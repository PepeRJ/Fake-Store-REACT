// import styles from './ProductDetails.module.css'
import { useParams } from "react-router-dom";
import { Product } from "../context/products-context";
import { Link } from "react-router-dom";

type Params = {
  id: string;
};

export default function ProductDetails({ products }: { products: Product[] }) {
  const params = useParams<Params>();
  const id = params.id === undefined ? undefined : parseInt(params.id);

  const product = products.find((product) => product.id === id);

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center py-10">
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
        {product === undefined ? (
          <h1 className="text-xl font-bold text-red-600 text-center">
            Producto no encontrado
          </h1>
        ) : (
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold text-gray-900">
              {product.title}
            </h1>
            <img
              src={product.image}
              alt={product.title}
              className="mt-4 w-1/2 rounded-lg bg-gray-200 object-cover"
            />
            <p className="mt-4 text-lg text-gray-700">{product.description}</p>
            <p className="mt-4 text-xl font-medium text-gray-900">
              ${product.price.toFixed(2)}
            </p>
            <Link
              to="/products"
              className="mt-4 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              Volver a Productos
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
