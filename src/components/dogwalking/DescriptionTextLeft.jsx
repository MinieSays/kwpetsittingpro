import React from "react";
import Header from "../ui/Header";
import Paragraph from "../ui/Paragraph";

// TODO fix the brs

const DescriptionTextLeft = ({ img }) => {
  return (
    <div class="row flex flex-col items-center max-w-screen-xl  mx-auto md:flex-row sm:px-6 p-6">
      <div class="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div class="text-left">
          <Header firstText="Group & Private" secondText="Dog Walks" />
          <Paragraph
            para="
          Welcome to KW Pet Sitting—At our dog walking service, we prioritize
            the well-being and happiness of your furry companions. Our
            experienced and dedicated team understands that each dog is unique,
            deserving individualized care.
          "
          />
          <Paragraph
            para="
                  We offer personalized walks tailored to your dog’s
            needs, whether they thrive in a solo stroll or enjoy the social
            interaction of a group outing. With a strong emphasis on safety and
            engagement, we maintain a low 1:3 person-to-dog ratio during our
            walks, ensuring each dog receives ample attention and supervision.
          "
          />
          <Paragraph
            para="
                    Additionally, our team members are certified in Pet First Aid & CPR,
            ready to handle any unforeseen circumstances. We use positive
            reinforcement techniques, such as treats and praise, to encourage
            good behavior and make every walk an enjoyable experience. Trust us
            to provide reliable, caring, and professional service that keeps
            your beloved pet happy, healthy, and active.
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
