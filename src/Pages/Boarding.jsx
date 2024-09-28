import React, { useEffect } from "react";
import ParallaxBanner from "../components/ParallaxBanner";
import CallToAction from "../components/CallToAction";
import bannerImage from "../assets/parallaxbanner.jpg";
import img from "../assets/dogboarding1.jpg";
import img1 from "../assets/dogboarding2.jpg";
import TopBanner from "../components/TopBanner";
import Section from "../components/Section";
import { listItems } from "../constants";
import ListSection from "../components/ListSection";
import { Helmet } from "react-helmet";

const Boarding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>KW Pet Sitting - Kitchener Dog Boarder - Waterloo Boarding</title>
        <meta
          name="Affordable Boarding in Kitchener Waterloo - 226-978-2133"
          content="Safe and private dog boarding in Kitchener. Maximum of 2 dogs within the home. Reach out today to see if we're the right fit."
        />
      </Helmet>
      <TopBanner
        title="Pet Sitting & House Sitting"
        subtitle="Leave your animals in their comfort zone with our pet sitting services"
      />
      <Section
        headerFirstText="Kitchener"
        headerSecondText="Dog Boarding"
        content={
          <>
            Experience worry-free pet sitting services designed to provide
            comfort and care for your furry friends while you’re away. Our
            personalized approach ensures your pets receive individual attention
            and tailored care according to their unique needs and routines.
            <br /> <br />
            Whether it’s feeding, playtime, walks, or cuddles, we’re here to
            maintain their well-being and happiness in the familiar surroundings
            of your home. Our certified and compassionate sitters prioritize
            your pet’s safety and comfort, ensuring a stress-free experience for
            both you and your beloved companions. With regular updates and
            attentive care, trust us to provide a nurturing and reliable pet
            sitting service that keeps your pets content, allowing you to enjoy
            your time away with peace of mind.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={img}
        imageAlt="Kitchener pet sitter"
        reverseColumns={true}
      />
      <CallToAction
        title="Stressed about your next getaway?"
        description="We've got you covered. Call us today for a free meet and greet!"
        buttonText="Book a meet and greet today"
        buttonLink="/contact"
      />
      <Section
        headerFirstText="Safety"
        headerSecondText="Precautions"
        content={
          <>
            Our premises are meticulously designed with safety in mind,
            featuring secure enclosures and sturdy fencing to prevent any
            potential escapes. Additionally, our staff undergoes thorough
            training in handling and managing dogs, including knowledge of
            canine behavior and basic first aid. We maintain a strict
            vaccination policy to safeguard against illnesses and enforce
            regular health checks to monitor each dog’s well-being.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={img1}
        imageAlt="Kitchener pet sitter"
        reverseColumns={false}
      />
      <ListSection
        title="Finding Reputable"
        subtitle="Boarding"
        listItems={listItems}
      />
      <ParallaxBanner
        backgroundImage={bannerImage}
        title="Book a free meet and greet"
        buttonTitle="Book Now"
      />
    </>
  );
};

export default Boarding;
