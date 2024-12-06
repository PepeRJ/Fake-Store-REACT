import { useContext } from "react";
import Products from "../components/Products";
import { ProductsContext } from "../context/products-context";
import Spinner from "../components/Spinner";

export default function ProductsPage() {
  const products = useContext(ProductsContext);

  if (!products || products.length === 0) {
    return <Spinner></Spinner>;
  }

  return (
    <div>
      <Products products={products} />
    </div>
  );
}
