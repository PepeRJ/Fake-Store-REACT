// import styles from './Header.module.css'
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-blue-700 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-bold">PepeRJ.</div>
          <nav className="flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-semibold no-underline p-1 pb-0.5 border-b-2 
               ${
                 isActive
                   ? "text-white border-white"
                   : "text-gray-200 border-transparent hover:text-white hover:border-white"
               }`
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `text-lg font-semibold no-underline p-1 pb-0.5 border-b-2 
               ${
                 isActive
                   ? "text-white border-white"
                   : "text-gray-200 border-transparent hover:text-white hover:border-white"
               }`
              }
            >
              Productos
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}
