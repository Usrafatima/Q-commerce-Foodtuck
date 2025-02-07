"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { createContext, useState, useContext, ReactNode, useEffect, useRef } from "react";
import toast from "react-hot-toast";

interface CartItem {
  description: string;
  imageUrl: string | StaticImport;
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  updateQuantity: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const toastRef = useRef<Record<string, boolean>>({}); // Prevent duplicate toasts

  // ✅ Load cart from local storage
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart from localStorage", error);
      }
    }
  }, []);

  // ✅ Update local storage when cart changes
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);
  const [lastAddedItem, setLastAddedItem] = useState<CartItem | null>(null);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingItem = prev.find((product) => product.id === item.id);
      let updatedCart;
  
      if (existingItem) {
        updatedCart = prev.map((product) =>
          product.id === item.id ? { ...product, quantity: product.quantity + 1 } : product
        );
      } else {
        updatedCart = [...prev, { ...item, quantity: 1 }];
      }
  
      return updatedCart;
    });
  
    // ✅ Set last added item outside state update
    setLastAddedItem(item);
  };
  

  
  
  

  // ✅ Update quantity of an item
  const updateQuantity = (id: string, quantity: number) => {
    setCart((prev) =>
      prev
        .map((product) => (product.id === id ? { ...product, quantity } : product))
        .filter((product) => product.quantity > 0)
    );
  };

  // ✅ Remove item from cart
  const removeFromCart = (id: string) => {
    setCart((prev) => prev.filter((product) => product.id !== id));
  };

  // ✅ Compute total number of items in cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity, removeFromCart, cartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// ✅ Corrected useCart hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
