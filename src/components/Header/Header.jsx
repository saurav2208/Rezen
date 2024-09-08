import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/Images/Logo.png";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-custom-blue-dark border-gray-100 px-7 lg:px-12 py-5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-16" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-white hover:bg-white hover:text-custom-blue-dark focus:ring-4 focus:ring-gray-200 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="text-white bg-pink-600 hover:bg-pink-500 focus:ring-4 focus:ring-pink-300 font-semibold rounded-lg text-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>
          <div
            className="hidden lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-4 text-lg mt-4 lg:mt-0 font-medium text-center">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/chatbot"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  ChatBot
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/resource_corner"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  Resource Corner
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  Blogs
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg transition duration-200 ${
                      isActive
                        ? "bg-pink-600 text-white shadow-lg border border-pink-700"
                        : "text-white"
                    } hover:bg-pink-500 hover:text-white hover:shadow-md hover:rounded-lg`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
