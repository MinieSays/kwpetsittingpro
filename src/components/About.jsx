import React from "react";
import Button from "./ui/Button";
import aboutimg from "../assets/aboutimage.jpg";

// TODO create a link js page for images

const About = () => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <h2 class="text-4xl font-semibold leading-10 mb-6 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl">
            Your Pets Are
            <br></br>
            <span class="font-extrabold text-[#5cb464]">Our Family</span>
          </h2>
          <p class="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-xl dark:text-gray-400">
            Hey there! I’m Sarah, and animals have been my lifelong joy. Having
            grown up surrounded by them, I’ve forged strong connections and a
            deep understanding of their needs. <br></br> <br></br>Each dog I
            care for isn’t just a pet; they’re a special individual with their
            own quirks and needs. When your furry friend stays with me, they
            become family. I take pride in providing a second home filled with
            love and safety.
            <br></br> <br></br>
            My customers have left glowing reviews about the care their pets
            receive—I’d love to extend that same care to your beloved pet too!
            Insured & bonded – Background checks for your peace of mind.
            Prioritizing safety, comfort and reliability Flexible scheduling to
            accommodate for different routines and requirements
          </p>
          <div class="mt-5 sm:flex md:mt-8">
            <a href="/">
              <Button title="Get Started Today" />
            </a>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-white text-black w-full">
            <img src={aboutimg} alt="kitchener pet sitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
