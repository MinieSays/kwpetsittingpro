import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({title}) => {
  return (
    <>
    <Link to="/contact">
      <button class="bg-[#5cb464] text-white font-bold py-2 px-6 rounded-full shadow-lg hover:bg-[#4ba254] transition duration-300 ease-in-out">
        {title}
      </button>
    </Link>
    </>
  );
}

export default Button