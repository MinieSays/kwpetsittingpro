import React, { useEffect } from "react";
import PagesBanner from "../components/PagesBanner";
import CallToAction from "../components/CallToAction";
import FeaturesSection from "../components/FeaturesSection";
import dogwalkingimg from "../assets/dogwalkingimg.jpg";
import DescriptionTextLeft from "../components/dogwalking/DescriptionTextLeft";
import DescriptionTextRight from "../components/dogwalking/DescriptionTextRight";
import dogwalkingimg1 from "../assets/dogwalking1.jpg"

const DogWalking = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <>
      <PagesBanner
        title="Dog Walking Kitchener"
        subtitle="Group or Private Dog Walks While You're Away!"
      />
      <DescriptionTextLeft img={dogwalkingimg} />
      <CallToAction />
      <DescriptionTextRight img={dogwalkingimg1} />
      <FeaturesSection
        title="Safety is our top priority."
        subtitle="We make sure every dog is compatible with the pack."
        callToAction="Book a free meet and green!"
      />
    </>
  );
};

export default DogWalking;
