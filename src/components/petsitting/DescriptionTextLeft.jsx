import React from "react";
import Header from "../ui/Header";
import Paragraph from "../ui/Paragraph";

// TODO fix the brs

const DescriptionTextLeft = ({ img }) => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <Header firstText="Kitchener Pet Sitting" secondText="Services" />
          <Paragraph
            para="
Experience worry-free pet sitting services designed to provide comfort and care for your furry friends while you’re away.

Our personalized approach ensures your pets receive individual attention and tailored care according to their unique needs and routines.
          "
          />
          <Paragraph
            para="
Whether it’s feeding, playtime, walks, or cuddles, we’re here to maintain their well-being and happiness in the familiar surroundings of your home.

Our certified and compassionate sitters prioritize your pet’s safety and comfort, ensuring a stress-free experience for both you and your beloved companions.

With regular updates and attentive care, trust us to provide a nurturing and reliable pet sitting service that keeps your pets content, allowing you to enjoy your time away with peace of mind.
          "
          />
        </div>
      </div>
      <div class="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-white text-black w-full">
            <img src={img} alt="kitchener pet sitter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTextLeft;
