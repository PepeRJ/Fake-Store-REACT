import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "./App"; 
import ErrorPage from "./pages/ErrorPage";
import ProductsPage from "./pages/ProductsPage";
import Spinner from "./components/Spinner";
import HomePage from "./pages/HomePage";

const ProductDetailPage = lazy(() => import('./pages/ProductDetailsPage'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <ProductsPage></ProductsPage>,
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Spinner></Spinner>}>
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
