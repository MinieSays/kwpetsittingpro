import React from "react";
import Button from "./ui/Button";
import heroimg from "../assets/image-header.jpg";

const Hero = () => {
  return (
    <section class="row bg-white dark:bg-gray-900">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
          <h1 class="text-[#5cb464] max-w-2xl mb-4 text-2xl font-semibold tracking-tight leading-none md:text-xl xl:text-3xl">
            Kitchener Dog walker & Pet Sitter
          </h1>
          <h2 class="max-w-md mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Looking for a Trusted Pet Sitter?
          </h2>
          <p class="max-w-md mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            Keep your dog healthy and happy when your away from home!
          </p>

          <Button title="Book a free meet & greet" />
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img src={heroimg} alt="mockup" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
