import axios from "axios";

import {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

export interface ProductDetails {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

interface ProductContext {
  productList: ProductDetails[];
  setProductList: React.Dispatch<React.SetStateAction<ProductDetails[]>>;
  searchProduct: string;
  setSearchProduct: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
}

const productsContext = createContext<ProductContext | null>(null);

const ProductsContextProvider = ({ children }: { children: ReactNode }) => {
  const [productList, setProductList] = useState<ProductDetails[]>([]);
  const [searchProduct, setSearchProduct] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const { data, status } = await axios.get(
          "https://fakestoreapi.com/products"
        );
        if (status === 200) {
          setProductList(data);
        }
      } catch (err) {
        console.log(err);
        alert("Something went wrong try again");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <productsContext.Provider
      value={{
        productList,
        setProductList,
        searchProduct,
        setSearchProduct,
        loading,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

const useProducts = () => {
  const context = useContext(productsContext);
  if (context === null) {
    throw new Error(
      "useProducts must be used within a ProductsContextProvider"
    );
  }
  return context;
};

export { ProductsContextProvider, useProducts };
