import React, { useEffect } from "react";
import PagesBanner from "../components/PagesBanner";

import petsittingimg from "../assets/petsitting1.jpg"
import petsittingimg1 from "../assets/petsitting2.jpg"

import DescriptionTextLeft from "../components/petsitting/DescriptionTextLeft";
import DescriptionTextRight from "../components/petsitting/DescriptionTextRight";

import CallToAction from "../components/CallToAction";
import List from "../components/ListSection";
import ParallaxBanner from "../components/ParallaxBanner";


const Petsitting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <PagesBanner
        title="Pet Sitting & House Sitting"
        subtitle="Leave your animals in their comfort zone with our pet sitting services"
      />
      <DescriptionTextLeft img={petsittingimg} />
      <CallToAction />
      <DescriptionTextRight img={petsittingimg1} />
      <List />
      <ParallaxBanner />
    </>
  );
};

export default Petsitting;
