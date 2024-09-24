import React from "react";


const PagesBanner = ({title, subtitle}) => {
    return (
        <div className="relative">
          <div className="parallax-bg bg-cover h-[30vh]">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-white h-full flex flex-col justify-center items-center">
              <h1 className="text-4xl font-bold mb-4">{title}</h1>
              <p className="text-2xl mb-6">{subtitle}</p>
            </div>
          </div>
        </div>
      );
}

export default PagesBanner