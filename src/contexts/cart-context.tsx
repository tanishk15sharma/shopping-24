import axios from "axios";

import { createContext, useState, useContext, ReactNode } from "react";

export interface CartDetails {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
}

const cartContext = createContext<{
  cartList: CartDetails[];
  setCartList: React.Dispatch<React.SetStateAction<CartDetails[]>>;
} | null>(null);

const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartList, setCartList] = useState<CartDetails[]>([]);

  return (
    <cartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </cartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(cartContext);
  if (context === null) {
    throw new Error(
      "useProducts must be used within a ProductsContextProvider"
    );
  }
  return context;
};

export { CartContextProvider, useCart };
