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
}

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
  }, [refresh]);
  const fetchCartUser = async (userID: string): Promise<any[]> => {
    try {

      const response = await axios.get(`http://localhost:8000/load-cake-into-cart/${userID}`);
      const cart = response.data.data; // Access the 'data' field
      //console.log('Fetched orders:', cart);

      // Map through orders and use the already detailed cake information
      const cartDetails = cart.flatMap((cart: any) =>
        cart.cakes.map((cake: any) => ({
          id: cake.cake_id,
          name: cake.cakeName,
          price: `${Number(cake.price)}`,
          size: transSize(cake.size),
          flavor: cake.flavor,
          quantity: cake.cakeQuantity,
          image: cake.img_url,
        }))
      );

      //console.log('Order details with cake info:', cartDetails);
      return cartDetails;
    } catch (error) {
      console.log('Error fetching order history:', error);
      return [];
    }
  };
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (cartItem) => cartItem.id === item.id && cartItem.size === item.size && cartItem.flavor === item.flavor,
      );
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id && cartItem.size === item.size && cartItem.flavor === item.flavor
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem,
        );
      } else {
        return [...prevItems, item];
      }
    });
  };

  const updateCartItem = async (itemId: string, updatedFields: Partial<CartItem>) => {
    //updateField : những đối tượng nào được cập nhật sẽ đc ghi vào, vd: cập nhật quantity => {quantity: 2}
    try {
      //console.log('Remove item from cart:', userInfoString);
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        //updateField : những đối tượng nào được cập nhật sẽ đc ghi vào, vd: cập nhật quantity => {quantity: 2}
        setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, ...updatedFields } : item)));
        if (updatedFields.size) {
          const newSize = updatedFields.size
          await axios.put(`http://localhost:8000/update-cake-size-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newSize=${newSize}`);
          setRefresh((prev) => !prev); // Trigger useEffect to refresh cart
        }
        else if (updatedFields.flavor) {
          const newFlavor = updatedFields.flavor === "chanh dây" ? "CD" : updatedFields.flavor === "dâu tây" ? "DT" : updatedFields.flavor === "socola" ? "Soco" : null;
          await axios.put(`http://localhost:8000/update-cake-flavor-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newFlavor=${newFlavor}`);
          setRefresh((prev) => !prev); // Trigger useEffect to refresh cart
        }
        else if (updatedFields.quantity) {
          const newQuantity = updatedFields.quantity;
          await axios.put(`http://localhost:8000/update-cake-quantity-from-cart/${userInfo.userID}/cart?itemID=${itemId}&newQuantity=${newQuantity}`);
          setRefresh((prev) => !prev); // Trigger useEffect to refresh cart
        }
      }
      else {
        console.log('No user info found');
      }
    } catch (error) {
      console.error('Failed to remove item from cart:', error);
    }
  };

  const removeFromCart = async (itemId: string) => {
    try {
      //console.log('Remove item from cart:', userInfoString);
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        await axios.put(`http://localhost:8000/remove-cake-from-cart/cart?userID=${userInfo.userID}&itemID=${itemId}`);
        // Cập nhật trạng thái giỏ hàng sau khi xóa thành công
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      }
      else {
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
