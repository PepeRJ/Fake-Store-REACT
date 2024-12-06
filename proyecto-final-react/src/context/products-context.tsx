import { createContext, ReactNode } from "react";
import useFetch from "../hooks/use-fetch";

export interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description?: string;
}

export const ProductsContext = createContext<Product[] | undefined>(undefined);

export const ProductsProvider = ({
  url,
  children,
}: {
  url: string;
  children: ReactNode;
}) => {
  const products = useFetch(url);

  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
