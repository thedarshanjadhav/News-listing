import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo_inshorts.png";

/* eslint-disable react/prop-types */
const Navbar = ({ isOpen, toggleSideNav }) => {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center bg-white shadow p-2">
      <button
        onClick={toggleSideNav}
        className={`text-black focus:outline-none transition-transform duration-500 ease-in-out ${
          isOpen ? "transform translate-x-64" : ""
        }`}
        style={{ position: "relative", zIndex: 20 }}
      >
        {isOpen ? (
          <div className="flex items-center">
            <FaTimes size={24} />
            <p className="ml-2">Close</p>
          </div>
        ) : (
          <div className="flex items-center">
            <FaBars size={24} />
            <p className="ml-2">Menu</p>
          </div>
        )}
      </button>
      <div className="flex items-center justify-center w-full">
        <img src={logo} alt="Logo" className="h-16 p-1" />
      </div>
    </nav>
  );
};

export default Navbar;
