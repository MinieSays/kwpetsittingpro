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
          <Header firstText="The Best" secondText="Dog-Gone Relief" />
          <Paragraph
            para="At my dog walking service, we prioritize personalized experiences
            tailored to your dog’s unique personality and needs. We understand
            that each dog has their own preferences and may have anxiety around
            others. Additionally, some have higher energy levels. We try our
            best to incorporate the needs of each dog. Whether your furry friend
          loves a leisurely stroll, prefers an energetic run, or thrives on
          socializing with other dogs, we adapt to their pace and preferences."
          />
          <Paragraph
            para="
                  Join our group dog walks designed with safety as our top priority.
            We maintain a low 1:5 person-to-dog ratio, ensuring close
            supervision and individual attention within the group. Each walk is
            carefully planned to create a secure and controlled environment,
            allowing for enjoyable socialization while prioritizing the safety
            and well-being of every dog. Our team members are trained to manage
            group dynamics, ensuring positive interactions and a harmonious
            experience for all furry participants. With a keen focus on safety
            protocols and a commitment to responsible handling, our group walks
            provide a fun and secure outing for your canine companions.
        "
          />
        </div>
      </div>
    </div>
  );
};

export default DescriptionTextRight;
