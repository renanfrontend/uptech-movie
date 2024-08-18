import React, { createContext, useState, FC } from 'react';
import { CartItem } from '../types/cartItem';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (movie: CartItem) => void;
  removeFromCart: (movieId: number) => void;
  increaseQuantity: (itemId: number) => void;
  decreaseQuantity: (itemId: number) => void;
  calculateTotal: () => number;
  sumQuantity: () => number; 
  clearCart: () => void;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const CartContext = createContext<CartContextType>({
  cartItems: [] as CartItem[], // Explicitly type the empty array
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  setCartItems: () => {},
  calculateTotal: () => 0, 
  sumQuantity: () => 0, 
  clearCart: () => {}
});

const CartProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (movie: CartItem) => {
    const existingItemIndex = cartItems.findIndex(item => item.id === movie.id);

    if (existingItemIndex > -1) {
      // Se o item já existe no carrinho, aumenta a quantidade
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1; // Increment by 1
      setCartItems(updatedCartItems);
    } else {
      // Se o item é novo, adiciona ao carrinho
      movie.quantity = 1;
      setCartItems([...cartItems, movie]);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0); 
  };

  const sumQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0); 
  };

  const removeFromCart = (movieId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== movieId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increaseQuantity = (itemId: number) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (itemId: number) => {
    setCartItems(cartItems.map(item => 
      item.id === itemId && item.quantity > 1 
        ? { ...item, quantity: item.quantity - 1 } 
        : item
    ));
  };

  return (
    <CartContext.Provider value={{ 
      cartItems, 
      addToCart, 
      removeFromCart, 
      increaseQuantity, 
      decreaseQuantity,
      setCartItems,
      calculateTotal,
      sumQuantity,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };