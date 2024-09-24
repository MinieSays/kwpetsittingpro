import React from "react";
import Header from "../ui/Header";

import Paragraph from "../ui/Paragraph";

const DescriptionTextRight = ({ img }) => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6 md:gap-6 xl:gap-12">
      <div class="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-white text-black w-full">
            <img src={img} alt="kitchener pet sitter" />
          </div>
        </div>
      </div>
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <Header firstText="Safety" secondText="Precautions" />
          <Paragraph
            para="Our premises are meticulously designed with safety in mind, featuring secure enclosures and sturdy fencing to prevent any potential escapes. Additionally, our staff undergoes thorough training in handling and managing dogs, including knowledge of canine behavior and basic first aid. We maintain a strict vaccination policy to safeguard against illnesses and enforce regular health checks to monitor each dog’s well-being."
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionTextRight;
