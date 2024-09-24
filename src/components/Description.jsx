import React from "react";
import Button from "./ui/Button";
import descriptionimg from "../assets/descriptionimg.jpg";

// TODO create a link js page for images

const Description = () => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <h2 class="text-4xl font-semibold leading-10 mb-6 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl">
            Our Promise
            <br></br>
            <span class="font-extrabold text-[#5cb464]">To You.</span>
          </h2>
          <p class="max-w-lg mb-6 font-light text-gray-500 lg:mb-8 md:text-md lg:text-xl dark:text-gray-400">
            We provide dependable and compassionate pet care services, treating
            your pets as part of our family. <br></br>
            <br></br>
            <b>Certified in Pet First Aid & CPR</b>
            <br></br>
            Trained and certified in Pet First Aid & CPR techniques, equipped to
            handle emergency situations and provide immediate care for your
            pet’s well-being.
            <br></br>
            <br></br>
            <b>Insured and Bonded</b> <br></br>Our services guarantees financial
            protection and trust, securing the safety of your pets, and your
            home. <br></br>
            <br></br>
            <b>5-Star Rave Reviews</b>
            <br></br>We take pride in providing the best care for you and your
            furry friend.
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
            <img src={descriptionimg} alt="kitchener pet sitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
