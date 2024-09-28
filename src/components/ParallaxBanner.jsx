import React from "react";
import Button from "./ui/Button";

const ParallaxBanner = ({ backgroundImage, title, buttonTitle, buttonOnClick }) => {
  return (
    <div
      className="relative bg-fixed bg-center bg-cover h-[400px] flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          {title}
        </h1>
        <Button title={buttonTitle}/>
      </div>
    </div>
  );
};

export default ParallaxBanner;
