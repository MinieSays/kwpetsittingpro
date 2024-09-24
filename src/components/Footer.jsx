import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <Link to="/" className="flex items-center space-x-3 mb-4">
          <img src={logo} className="h-20 w-36" alt="Kitchener Pet Sitter" />
        </Link>

        <ul className="font-medium flex flex-col md:flex-row items-center space-x-0 md:space-x-8 mb-4">
          <li>
            <Link to="/" className="block py-2 px-3 hover:text-[#5cb464]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dogwalking" className="block py-2 px-3 hover:text-[#5cb464]">
              Dog Walking
            </Link>
          </li>
          <li>
            <Link to="/petsitting" className="block py-2 px-3 hover:text-[#5cb464]">
              Pet Sitting
            </Link>
          </li>
          <li>
            <Link to="/boarding" className="block py-2 px-3 hover:text-[#5cb464]">
              Boarding
            </Link>
          </li>
          <li>
            <Link to="/blog" className="block py-2 px-3 hover:text-[#5cb464]">
              Blog
            </Link>
          </li>
        </ul>
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} KW Petsitting. All rights
          reserved.<br /> Made by Minie Sayadeth from PyWebSolutions.ca
        </p>
      </div>
    </footer>
  );
};

export default Footer;
