import React from "react";
import { Link } from "react-router-dom";

const CallToAction = ({
  title,
  description,
  buttonText,
  buttonLink,
  bgColor = "bg-[#5cb464]",
  textColor = "text-white",
  buttonBgColor = "bg-white",
  buttonTextColor = "text-[#5cb464]",
}) => {
  return (
    <div className={`${bgColor} ${textColor} py-12 px-6 text-center`}>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-2xl mb-6">{description}</p>
      <Link
        to={buttonLink}
        className={`${buttonBgColor} ${buttonTextColor} font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out`}
      >
        {buttonText}
      </Link>
    </div>
  );
};

export default CallToAction;
