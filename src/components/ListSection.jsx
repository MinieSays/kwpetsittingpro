import React from "react";

const ListSection = ({ title, subtitle, listItems }) => {
  return (
    <div className="w-full row container">
      <ul className="space-y-3 flex flex-col items-center mb-12">
        <h2 className="text-center text-4xl font-semibold leading-10 mb-6 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          {title}
          <br />
          <span className="font-extrabold text-[#5cb464]">{subtitle}</span>
        </h2>
        {listItems.map((item, index) => (
          <li key={index} className="flex items-center text-left">
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;

