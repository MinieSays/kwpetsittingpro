import React from "react";
import { FaPaw, FaDog, FaBone } from "react-icons/fa";

const FeaturesSection = ({ title, subtitle, callToAction }) => {
  return (
    <section className="py-24 bg-gray-50">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-6 lg:flex-row lg:justify-between">
          <div className="text-center lg:text-left lg:w-2/4">
            <h2 className="text-4xl font-bold">{title}</h2>
          </div>
          <div className="text-center lg:text-left lg:w-2/4">
            <p className="text-lg mb-5"> {subtitle}</p>
            <a
              href="/"
              className="flex items-center justify-center gap-2 text-[#61bb69b7] hover:text-[#28502cb7]"
            >
              {callToAction}
              <FaPaw size={20} />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:gap-5 lg:gap-20">
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-[#61bb69b7] lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaDog size={30} className="text-[#61bb69b7]" />
            </div>
            <h4 className="text-xl font-semibold group-hover:text-white">
              Private Walks
            </h4>
            <p className="text-sm group-hover:text-white">
              Great for dogs that like to go at their own pace.
            </p>
          </div>
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-[#61bb69b7] lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaPaw size={30} className="text-[#61bb69b7]" />
            </div>
            <h4 className="text-xl font-semibold group-hover:text-white">
              Group Walks
            </h4>
            <p className="text-sm group-hover:text-white">
              We never take more than two dogs at a time.
            </p>
          </div>
          <div className="group relative w-full bg-gray-50 rounded-2xl p-7 transition-all hover:bg-[#61bb69b7] lg:w-1/4">
            <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14">
              <FaBone size={30} className="text-[#61bb69b7]" />
            </div>
            <h4 className="text-xl font-semibold group-hover:text-white">
              Bonded & Insured
            </h4>
            <p className="text-sm group-hover:text-white">
              All of our employees and bonded and insured for your peace of
              mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
