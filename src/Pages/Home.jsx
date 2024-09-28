import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import aboutimg from "../assets/aboutimage.jpg";
import CallToAction from "../components/CallToAction";
import TestimonialsSection from "../components/Testimonials";
import heroimg from "../assets/image-header.jpg";
import Section from "../components/Section";
import { Helmet } from "react-helmet";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="home">
      <Helmet>
        <title>KW Petsitting - Kitchener Dog Walker - Waterloo Petsitter</title>
        <meta
          name="KW Petsitting - Kitchener Dog Walker, Waterloo Petsitter"
          content="Affordable Pet Sitting and Dog Walking Services in Kitchener Waterloo. Meet up with a local dog walker today."
        />
      </Helmet>
      <Hero
        title="Kitchener Dog Walker & Pet Sitter"
        subtitle="Looking for a Trusted Pet Sitter?"
        description="Keep your dog healthy and happy when you're away from home!"
        buttonTitle="Book a free meet & greet"
        imageSrc={heroimg}
      />
      <Features />
      <Section
        headerFirstText="Your Pets"
        headerSecondText="Are Our Family"
        content={`Hey there! I’m Sarah, and animals have been my lifelong joy. Having grown up surrounded by them, I’ve forged strong connections and a deep understanding of their needs. 
        Each dog I care for isn’t just a pet; they’re a special individual with their own quirks and needs. When your furry friend stays with me, they become family. 
        I take pride in providing a second home filled with love and safety. 
        My customers have left glowing reviews about the care their pets receive—I’d love to extend that same care to your beloved pet too! 
        Insured & bonded – Background checks for your peace of mind. Prioritizing safety, comfort, and reliability. Flexible scheduling to accommodate different routines and requirements.`}
        buttonText="Get Started Today"
        imageSrc={aboutimg}
        imageAlt="Kitchener pet sitter"
        reverseColumns={false}
      />
      <TestimonialsSection />
      <Section
        headerFirstText="Our Promise"
        headerSecondText="To You"
        content={
          <>
            We provide dependable and compassionate pet care services, treating
            your pets as part of our family.
            <br />
            <br />
            <b>Certified in Pet First Aid & CPR</b>
            <br />
            Trained and certified in Pet First Aid & CPR techniques, equipped to
            handle emergency situations and provide immediate care for your
            pet’s well-being.
            <br />
            <br />
            <b>Insured and Bonded</b>
            <br />
            Our services guarantee financial protection and trust, securing the
            safety of your pets, and your home.
            <br />
            <br />
            <b>5-Star Rave Reviews</b>
            <br />
            We take pride in providing the best care for you and your furry
            friend.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={aboutimg}
        imageAlt="Kitchener pet sitter"
        reverseColumns={true}
      />
      <CallToAction
        title="Stressed about your next getaway?"
        description="We've got you covered. Call us today for a free meet and greet!"
        buttonText="Book a meet and greet today"
        buttonLink="/contact"
      />
    </section>
  );
};

export default Home;
