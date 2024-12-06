// import styles from './Home.module.css'
import { Link } from "react-router-dom";
import { Product } from "../context/products-context";

export default function Home({ products }: { products: Product[] }) {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex items-center">
      <img
        src="https://www.hostinger.es/tutoriales/wp-content/uploads/sites/7/2020/06/tienda-de-ropa.webp"
        alt="Ropa de moda"
        className="absolute inset-0 object-cover w-full h-full opacity-20"
      />

      <main className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 z-10">
        <section className="text-center text-white">
          <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl drop-shadow-lg">
            Bienvenido a PepeRJ
          </h1>
          <p className="mt-4 text-2xl bg-blue-800 bg-opacity-75 rounded-lg p-6 shadow-xl animate-slide-in">
            Descubre nuestras ofertas increíbles y las últimas novedades en
            productos.
          </p>
          <div className="mt-8">
            <Link
              to="/products"
              className="inline-block text-lg font-bold text-gray-900 bg-white hover:bg-gray-200 py-4 px-10 rounded-lg shadow-lg transition-colors duration-300"
            >
              Ver Productos
            </Link>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Productos Destacados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
              >
                <Link to={`/products/${product.id}`}>
                  {" "}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{product.title}</h3>
                    <p className="mt-2 text-gray-700">${product.price}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
