import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md"; // Icon for close button
import { Link } from "react-router-dom";
import Modal from "./ui/Modal";

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
      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="flex flex-wrap justify-between max-w-screen-xl items-center mx-auto p-4">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} className="h-17 w-36" alt="Kitchener Pet Sitter" />
          </Link>

          {/* Mobile Menu Button */}
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

          {/* Desktop Menu */}
          <div className="hidden md:block md:w-auto">
            <ul className="font-medium flex flex-col md:flex-row items-center md:space-x-8">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded md:bg-transparent md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/dogwalking" className="hover:text-[#5cb464]">
                  Dog Walking
                </Link>
              </li>
              <li>
                <Link to="/petsitting" className="hover:text-[#5cb464]">
                  Pet Sitting
                </Link>
              </li>
              <li>
                <Link to="/boarding" className="hover:text-[#5cb464]">
                  Boarding
                </Link>
              </li>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <ul className="font-medium flex flex-col items-center space-y-4 p-4 bg-white shadow-lg">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-center"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/dogwalking"
                  className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-center"
                  onClick={toggleMobileMenu}
                >
                  Dog Walking
                </Link>
              </li>
              <li>
                <Link
                  to="/petsitting"
                  className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-center"
                  onClick={toggleMobileMenu}
                >
                  Pet Sitting
                </Link>
              </li>
              <li>
                <Link
                  to="/boarding"
                  className="block py-2 px-3 rounded hover:bg-gray-100 w-full text-center"
                  onClick={toggleMobileMenu}
                >
                  Boarding
                </Link>
              </li>
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
        
              {/* Modal for "Book Today" */}
              <Modal showModal={showModal} toggleModal={toggleModal} />
    </>
  );
};

export default Navbar;