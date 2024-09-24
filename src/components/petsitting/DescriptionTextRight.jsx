import React from "react";
import Header from "../ui/Header";

import Paragraph from "../ui/Paragraph";

const DescriptionTextRight = ({ img }) => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6 md:gap-6 xl:gap-10">
      <div class="flex items-center justify-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div class="relative w-full p-3 rounded  md:p-8">
          <div class="rounded-lg bg-white text-black w-full">
            <img src={img} alt="kitchener pet sitter" />
          </div>
        </div>
      </div>
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <Header firstText="Trustworthy" secondText="Pet Sitters" />
          <Paragraph
            para="Trustworthy pet sitting revolves around reliability, clear communication, and integrity. As a dedicated pet sitter, I prioritize consistency, ensuring punctuality and adhering to commitments, which instills confidence in pet owners.

Transparent communication is key—I provide regular updates, keeping owners informed about their pet’s well-being and any notable occurrences."
          />
          <Paragraph
            para="
                  Respecting both the home and the pets is fundamental; I treat the property with care and ensure the pet feels comfortable in its familiar surroundings.

Professionalism, including certifications and being bonded and insured, underscores my commitment to responsible care. Safety is paramount—I’m prepared for emergencies and possess basic pet first aid and CPR skills. Positive reviews and references attest to my reliability and competence, fostering lasting trust-based relationships with both pets and their owners.
        "
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionTextRight;
