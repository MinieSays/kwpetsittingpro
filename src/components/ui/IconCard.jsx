import React from "react";

const IconCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
      <div className="bg-[#dbaf88] rounded-full flex justify-center items-center mb-5 w-20 h-20 mx-auto transition-all duration-300 group-hover:bg-[#c4946a]">
        <Icon className="text-white text-4xl" />
      </div>
      <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
        {title}
      </h4>
      <p className="font-light text-gray-500 lg:mb-8 md:text-sm lg:text-md">
        {description}
      </p>
    </div>
  );
};

export default IconCard;
