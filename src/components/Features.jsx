import React from "react";
import { FaDog } from "react-icons/fa6";
import { FaCat } from "react-icons/fa";
import { FaHouseUser } from "react-icons/fa";
import { FaPaw } from "react-icons/fa";

const Features = () => {
  return (
    <section class="py-20">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div class="bg-[#dbaf88] rounded-full flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-300 group-hover:bg-[#c4946a]">
              <FaDog class="text-white text-4xl" />
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
              Group & Private Dog Walking
            </h4>
            <p class="font-light text-gray-500 lg:mb-8 md:text-sm lg:text-md">
              Tailored dog walks, in groups or one-on-one, focusing on fun and
              safety.
            </p>
          </div>
          <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div class="bg-[#dbaf88] rounded-full flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-300 group-hover:bg-[#c4946a]">
              <FaCat class="text-white text-4xl" />
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
              Cats & Small Animals
            </h4>
            <p class="font-light text-gray-500 lg:mb-8 md:text-sm lg:text-md">
              Specialized care for your cats and small pets, creating a safe,
              cozy, and loving environment when you’re not around.
            </p>
          </div>
          <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div class="bg-[#dbaf88] rounded-full flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-300 group-hover:bg-[#c4946a]">
              <FaPaw class="text-white text-4xl" />
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
              Medication & CPR
            </h4>
            <p class="font-light text-gray-500 lg:mb-8 md:text-sm lg:text-md">
              Skilled in giving meds like diabetes shots and certified in dog
              CPR for your pet’s health needs.
            </p>
          </div>
          <div class="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
            <div class="bg-[#dbaf88] rounded-full flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-300 group-hover:bg-[#c4946a]">
              <FaHouseUser class="text-white text-4xl" />
            </div>
            <h4 class="text-lg font-medium text-gray-900 mb-3 capitalize">
              Boarding & Housesitting
            </h4>
            <p class="font-light text-gray-500 lg:mb-8 md:text-sm lg:text-md">
              Reliable boarding and attentive house sitting—ensuring your pets
              feel at home and giving you peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
