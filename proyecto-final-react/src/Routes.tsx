import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App"; 
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import Home from "./pages/HomePage";

const ProductDetailPage = lazy(() => import('./pages/ProductDetailsPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "products/:id",
        element: (
          <Suspense fallback={<div>Cargando detalles del producto...</div>}>
            <ProductDetailPage></ProductDetailPage>
          </Suspense>
        ),
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router}></RouterProvider>;
}
