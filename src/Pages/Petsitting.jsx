import React, { useEffect } from "react";
import TopBanner from "../components/TopBanner";

import petsittingimg from "../assets/petsitting1.jpg";
import petsittingimg1 from "../assets/petsitting2.jpg";

import bannerImage from "../assets/parallaxbanner.jpg";

import CallToAction from "../components/CallToAction";
import List from "../components/ListSection";
import ParallaxBanner from "../components/ParallaxBanner";
import Section from "../components/Section";
import { listItems } from "../components/petsitting";
import { Helmet } from "react-helmet";

const Petsitting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          Kitchener Pet Sitting - Waterloo House Sitting
        </title>
        <meta
          name="Affordable Pet Sitter in Kitchener Waterloo - 226-978-2133"
          content="Have a reliable pet sitter for your next vacation. Affordable rates. The best kitchener pet sitter."
        />
      </Helmet>
      <TopBanner
        title="Pet Sitting & House Sitting"
        subtitle="Leave your animals in their comfort zone with our pet sitting services"
      />
      <Section
        headerFirstText="Kitchener Petsitting"
        headerSecondText="Services"
        content={
          <>
            Experience worry-free pet sitting services designed to provide
            comfort and care for your furry friends while you’re away. Our
            personalized approach ensures your pets receive individual attention
            and tailored care according to their unique needs and routines.
            <br />
            <br />
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
        imageSrc={petsittingimg}
        imageAlt="Kitchener pet sitter"
        reverseColumns={false}
      />
      <CallToAction
        title="Book your next get-away today!"
        description="Call us for a complimentary meet and greet!"
        buttonText="Book now"
        buttonLink="/contact"
      />
      <Section
        headerFirstText="Safety First"
        headerSecondText="Approach"
        content={
          <>
            Trustworthy pet sitting revolves around reliability, clear
            communication, and integrity. As a dedicated pet sitter, I
            prioritize consistency, ensuring punctuality and adhering to
            commitments, which instills confidence in pet owners. Transparent
            communication is key—I provide regular updates, keeping owners
            informed about their pet’s well-being and any notable occurrences.
            <br />
            <br />
            Respecting both the home and the pets is fundamental; I treat the
            property with care and ensure the pet feels comfortable in its
            familiar surroundings. Professionalism, including certifications and
            being bonded and insured, underscores my commitment to responsible
            care. Safety is paramount—I’m prepared for emergencies and possess
            basic pet first aid and CPR skills. Positive reviews and references
            attest to my reliability and competence, fostering lasting
            trust-based relationships with both pets and their owners.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={petsittingimg1}
        imageAlt="Kitchener pet sitter"
        reverseColumns={true}
      />
      <List
        title="Finding a Reliable"
        subtitle="Pet Sitter"
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

export default Petsitting;
