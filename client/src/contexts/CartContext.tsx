import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface CartItem {
  id: string;
  name: string;
  price: number;
  size: string;
  flavor: string;
  quantity: number;
  image: string;
  total_price: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (itemId: string, updatedFields: Partial<CartItem>) => void;
  removeFromCart: (itemId: string) => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => { },
  updateCartItem: () => { },
  removeFromCart: () => { },
});

const transSize = (size: number) => {
  if (size === 10) return 'S';
  if (size === 16) return 'M';
  if (size === 24) return 'L';
};

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [refresh, setRefresh] = useState(false); // State to trigger useEffect
  const userInfoString = sessionStorage.getItem('userInfo');

  useEffect(() => {
    const getCartUser = async () => {
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const cartUser = await fetchCartUser(userInfo.userID);
        setCartItems(cartUser);
      } else {
        console.log('No user info found');
      }
    };
    getCartUser();
  }, [refresh, userInfoString]);

  const fetchCartUser = async (userID: string): Promise<any[]> => {
    try {
      const response = await axios.get(`http://localhost:8000/load-cake-into-cart/${userID}`);
      const cart = response.data.data;

      const cartDetails = cart.flatMap((cart: any) =>
        cart.cakes.map((cake: any) => ({
          id: cake.cake_id,
          name: cake.cakeName,
          price: Number(cake.price),
          size: transSize(cake.size),
          flavor: cake.flavor,
          quantity: cake.cakeQuantity,
          image: cake.img_url,
          total_price: cake.total_price,
        })),
      );

      return cartDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };

  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      console.log(item);
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id
      );
      //console.log(existingItem);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size && cartItem.flavor === item.flavor
            ? {
              ...cartItem,
              quantity: cartItem.quantity + item.quantity,
              total_price: cartItem.total_price + item.total_price,
            }
            : cartItem,
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const updateCartItem = async (itemId: string, updatedFields: Partial<CartItem>) => {
    try {
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        setCartItems((prevItems) =>
          prevItems.map((item) => {
            if (item.id === itemId) {
              const newItem = { ...item, ...updatedFields };
              return { ...newItem };
            }
            return item;
          }),
        );

        if (updatedFields.size) {
          const newSize = updatedFields.size
          await axios.put(`http://localhost:8000/update-cake-size-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newSize=${newSize}`);
        }
        else if (updatedFields.flavor) {
          const newFlavor = updatedFields.flavor === "Chanh dây" ? "CD" : updatedFields.flavor === "Dâu tây" ? "DT" : updatedFields.flavor === "Socola" ? "Soco" : null;
          await axios.put(`http://localhost:8000/update-cake-flavor-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newFlavor=${newFlavor}`);
        }
        else if (updatedFields.quantity) {
          const newQuantity = updatedFields.quantity;
          await axios.put(`http://localhost:8000/update-cake-quantity-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newQuantity=${newQuantity}`);
        }
        setRefresh((prev) => !prev); // Trigger useEffect to refresh cart
      } else {
        console.log('No user info found');
      }
    } catch (error) {
      console.error('Failed to update item in cart:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        await axios.put(`http://localhost:8000/remove-cake-from-cart/cart?userID=${userInfo.userID}&itemID=${itemId}`);
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      } else {
        console.log('No user info found');
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
