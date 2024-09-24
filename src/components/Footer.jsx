import React from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col items-center">
        <a href="/" className="flex items-center space-x-3 mb-4">
          <img src={logo} className="h-20 w-36" alt="Kitchener Pet Sitter" />
        </a>

        {/* Navigation Links */}
        <ul className="font-medium flex flex-col md:flex-row items-center space-x-0 md:space-x-8 mb-4">
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#5cb464]">Home</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#5cb464]">Dog Walking</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#5cb464]">Pet Sitting</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#5cb464]">Boarding</a>
          </li>
          <li>
            <a href="/" className="block py-2 px-3 hover:text-[#5cb464]">Blog</a>
          </li>
        </ul>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mb-4">
          <a href="/" aria-label="Facebook" className="text-gray-600 hover:text-[#5cb464]">
            <FaFacebook className="h-6 w-6" />
          </a>
          <a href="/" aria-label="Twitter" className="text-gray-600 hover:text-[#5cb464]">
            <FaTwitter className="h-6 w-6" />
          </a>
          <a href="/" aria-label="Instagram" className="text-gray-600 hover:text-[#5cb464]">
            <FaInstagram className="h-6 w-6" />
          </a>
        </div>

        {/* Copyright Section */}
        <p className="text-sm text-gray-500 text-center">
          © {new Date().getFullYear()} Kitchener Pet Sitter. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;