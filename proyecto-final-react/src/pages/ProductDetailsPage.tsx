import { useContext } from "react";
import ProductDetails from "../components/ProductDetails";
import { ProductsContext } from "../context/products-context";
import Spinner from "../components/Spinner";

export default function ProductDetailsPage() {
  const products = useContext(ProductsContext);

  if (!products || products.length === 0) {
    return <Spinner></Spinner>;
  }

  return (
    <>
      <ProductDetails products={products} />
    </>
  );
}
