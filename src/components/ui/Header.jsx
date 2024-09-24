import React from "react";

const Header = ({firstText, secondText}) => {
  return (
    <h2 class="text-4xl font-semibold leading-10 mb-6 tracking-tight  sm:text-5xl sm:leading-none md:text-6xl">
      {firstText}
      <br></br>
      <span class="font-extrabold text-[#5cb464]">{secondText}</span>
    </h2>
  );
};

export default Header;
