import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"; 
import { Link } from "react-router-dom";
import Modal from "./ui/Modal";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <nav className="bg-white">
        <div className="flex flex-wrap justify-between max-w-screen-xl items-center mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} className="h-14 w-22" alt="Kitchener Pet Sitter" />
          </Link>

          <button
            className="p-2 h-10 w-10 inline-flex items-center justify-center rounded-md md:hidden hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <MdClose className="text-3xl text-gray-700" />
            ) : (
              <GiHamburgerMenu className="text-3xl text-gray-700" />
            )}
          </button>

          <div className="hidden md:block md:w-auto">
            <ul className="font-medium flex flex-col md:flex-row items-center md:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="block py-2 px-3 rounded md:bg-transparent md:p-0 hover:text-[#5cb464]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={toggleModal}
                  className="bg-[#5cb464] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#4ba254] transition duration-300 ease-in-out"
                >
                  Book Today
                </button>
              </li>
            </ul>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="font-medium flex flex-col items-center space-y-4 p-4 bg-white shadow-lg">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-center"
                    onClick={toggleMobileMenu}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    toggleMobileMenu();
                    toggleModal();
                  }}
                  className="bg-[#5cb464] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#4ba254] transition duration-300 ease-in-out w-full text-center"
                >
                  Book Today
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Navbar;
