import React from "react";
import Button from "./ui/Button";

const Hero = ({
  title,
  subtitle,
  description,
  buttonTitle,
  imageSrc,
}) => {
  return (
    <section className="row bg-white">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="text-[#5cb464] max-w-2xl mb-4 text-2xl font-semibold tracking-tight leading-none md:text-xl xl:text-3xl">
            {title}
          </h1>
          <h2 className="max-w-md mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
            {subtitle}
          </h2>
          <p className="max-w-md mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl">
            {description}
          </p>

          {buttonTitle && <Button title={buttonTitle} />}
        </div>
        {imageSrc && (
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src={imageSrc} alt="mockup" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

