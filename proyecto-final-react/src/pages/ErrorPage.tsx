import { useRouteError } from "react-router-dom";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <>
      <Header />
      <div className="bg-red-50 min-h-screen flex flex-col items-center justify-center">
        <div className="text-center p-6">
          <h1 className="text-6xl font-bold text-red-600">¡Oops!</h1>
          <p className="mt-4 text-2xl text-gray-800">
            Ha ocurrido un problema.
          </p>
          {isError(error) && (
            <p className="mt-2 text-lg text-gray-600">
              Estado: <span className="font-semibold">{error.statusText}</span>
            </p>
          )}
          <Link
            to="/"
            className="mt-6 inline-block text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 py-3 px-6 rounded-lg transition-colors duration-200"
          >
            Regresar a la página de inicio
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

function isError(error: unknown): error is { statusText: string } {
  return typeof error === "object" && error !== null && "statusText" in error;
}
