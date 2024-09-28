import React from "react";
import { FaDog, FaCat, FaHouseUser, FaPaw } from "react-icons/fa";
import IconCard from "./ui/IconCard";

const featuresData = [
  {
    icon: FaDog,
    title: "Group & Private Dog Walking",
    description:
      "Tailored dog walks, in groups or one-on-one, focusing on fun and safety.",
  },
  {
    icon: FaCat,
    title: "Cats & Small Animals",
    description:
      "Specialized care for your cats and small pets, creating a safe, cozy, and loving environment when you’re not around.",
  },
  {
    icon: FaPaw,
    title: "Medication & CPR",
    description:
      "Skilled in giving meds like diabetes shots and certified in dog CPR for your pet’s health needs.",
  },
  {
    icon: FaHouseUser,
    title: "Boarding & Housesitting",
    description:
      "Reliable boarding and attentive house sitting—ensuring your pets feel at home and giving you peace of mind.",
  },
];

const Features = () => {
  return (
    <section>
      <div className="mt-6 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {featuresData.map((feature, index) => (
            <IconCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
