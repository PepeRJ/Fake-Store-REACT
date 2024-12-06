import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ProductsProvider from "./context/products-context";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <ProductsProvider url="https://fakestoreapi.com/products?limit=8">
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </ProductsProvider>
    </>
  );
}
