// import styles from './Products.module.css'
import { Link } from "react-router-dom";
import { Product } from "../context/products-context";

export default function Products({ products }: { products: Product[] }) {
  if (!Array.isArray(products) || products.length === 0) {
    return <div>No se encontraron publicaciones.</div>;
  }

  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <h2 className="sr-only">Products</h2>
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 flex flex-col justify-between"
              >
                <Link to={`/product/${product.id}`} className="flex-1">
                  <img
                    alt={product.image}
                    src={product.image}
                    className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-[7/8] transition-opacity duration-300"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-gray-800">
                    {product.title}
                  </h3>
                  <p className="mt-1 text-xl font-medium text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </Link>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-2 inline-block text-center text-white bg-blue-600 hover:bg-blue-700 font-medium py-2 rounded-lg transition-colors duration-200"
                >
                  Ver detalle
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
