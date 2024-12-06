import { useContext } from "react";
import Home from "../components/Home";
import { ProductsContext } from "../context/products-context";
import Spinner from "../components/Spinner";

export default function HomePage() {
  const products = useContext(ProductsContext);

  if (!products || products.length === 0) {
    return <Spinner></Spinner>;
  }

  const productosDestacados = products.filter((product) =>
    [4, 7].includes(product.id)
  );

  return (
    <>
      <Home products={productosDestacados} />{" "}
    </>
  );
}
