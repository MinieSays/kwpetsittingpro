import React from "react";
import Button from "./ui/Button";
import Header from "./ui/Header";

const Section = ({
  headerFirstText,
  headerSecondText,
  content,
  buttonText,
  imageSrc,
  imageAlt,
  reverseColumns = false,
}) => {
  return (
    <div
      className={`row flex flex-col items-center max-w-screen-xl mx-auto md:flex-row sm:px-6 p-6 ${
        reverseColumns ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:px-10">
        <div className="text-left">
          <Header firstText={headerFirstText} secondText={headerSecondText} />
          <p className="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-xl">
            {content}
          </p>
          {buttonText && (
            <div className="mt-5 sm:flex md:mt-8">
              <a href="/">
                <Button title={buttonText} />
              </a>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:px-10">
        <div className="relative w-full p-3 rounded md:p-8">
          <div className="rounded-lg bg-white text-black w-full">
            <img src={imageSrc} alt={imageAlt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
