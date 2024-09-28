import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <Link to="/" className="flex items-center space-x-3 mb-4">
          <img src={logo} className="h-12 w-30" alt="Kitchener Pet Sitter" />
        </Link>
        <ul className="font-medium flex flex-wrap justify-center items-center md:gap-6 gap-x-4 gap-y-2 mb-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link to={link.to} className="block py-2 px-3 hover:text-[#5cb464]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} KW Petsitting. All rights reserved.
          <br /> Made by{" "}
          <a href="https://www.pywebsolutions.ca">PyWebSolutions.ca</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
