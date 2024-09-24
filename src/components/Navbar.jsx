
import * as React from 'react';
import Button from './ui/Button';
import logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
// TODO import react icons cleaner
const Navbar = () => {
  return (
    

<nav class="bg-white border-gray-200 dark:bg-gray-900 row">
  <div class="flex flex-wrap justify-between max-w-screen-xl items-center mx-auto p-4">
    <a href="/" class="flex items-center space-x-3">
        <img src={logo} class="h-17 w-36" alt="Kitchener Pet Sitter" />
    </a>
    <button class="p-2 h-10 w-10 inline-flex items-center justify-center rounded-xl md:hidden hover:bg-gray-100" >
        <GiHamburgerMenu className="text-4xl" />
    </button>
    <div class="hidden w-full md:block md:w-auto">
      <ul class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8  md:mt-0 md:border-0">
        <li>
          <a href="/" class="block py-2 px-3 rounded md:bg-transparent md:p-0" >Home</a>
        </li>
        <li>
          <a href="/" class="hover:text-[#5cb464]">Dog Walking</a>
        </li>
        <li>
          <a href="/" class="hover:text-[#5cb464]">Pet Sitting</a>
        </li>
        <li>
          <a href="/" class="hover:text-[#5cb464]">Boarding</a>
        </li>
        <li>
          <a href="/" class="hover:text-[#5cb464]">Blog</a>
        </li>
        <li>
          <a href="/" class="">
            <Button title="Book Today" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar