import React, { createContext, useContext, useState, useEffect } from 'react';

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
  addToCart: () => {},
  updateCartItem: () => {},
  removeFromCart: () => {},
});

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

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

  const updateCartItem = (itemId: string, updatedFields: Partial<CartItem>) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === itemId ? { ...item, ...updatedFields } : item)));
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateCartItem, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);