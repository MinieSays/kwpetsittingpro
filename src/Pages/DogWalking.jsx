import React, { useEffect } from "react";
import TopBanner from "../components/TopBanner";
import CallToAction from "../components/CallToAction";
import FeaturesSection from "../components/FeaturesSection";
import dogwalkingimg from "../assets/dogwalkingimg.jpg";
import dogwalkingimg1 from "../assets/dogwalking1.jpg";
import Section from "../components/Section";

const DogWalking = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopBanner
        title="Dog Walking Kitchener"
        subtitle="Group or Private Dog Walks While You're Away!"
      />
      <Section
        headerFirstText="Group & Private"
        headerSecondText="Dog Walks"
        content={
          <>
            Welcome to KW Pet Sitting—At our dog walking service, we prioritize
            the well-being and happiness of your furry companions. Our
            experienced and dedicated team understands that each dog is unique,
            deserving individualized care.
            <br />
            <br />
            We offer personalized walks tailored to your dog’s needs, whether
            they thrive in a solo stroll or enjoy the social interaction of a
            group outing. With a strong emphasis on safety and engagement, we
            maintain a low 1:3 person-to-dog ratio during our walks, ensuring
            each dog receives ample attention and supervision.
            <br />
            <br />
            Additionally, our team members are certified in Pet First Aid & CPR,
            ready to handle any unforeseen circumstances. We use positive
            reinforcement techniques, such as treats and praise, to encourage
            good behavior and make every walk an enjoyable experience. Trust us
            to provide reliable, caring, and professional service that keeps
            your beloved pet happy, healthy, and active.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={dogwalkingimg}
        imageAlt="Kitchener pet sitter"
        reverseColumns={false}
      />
      <CallToAction
        title="Looking for a reliable dog walker?"
        description="We've got you covered. Call us today for a free meet and greet!"
        buttonText="Book a meet and greet today"
        buttonLink="/contact"
      />
      <Section
        headerFirstText="The Best"
        headerSecondText="Doggie Relief"
        content={
          <>
            At KW Petsitting dog walking service, we prioritize personalized
            experiences tailored to your dog’s unique personality and needs. We
            understand that each dog has their own preferences and may have
            anxiety around others. Additionally, some have higher energy levels.
            We try our best to incorporate the needs of each dog. Whether your
            furry friend loves a leisurely stroll, prefers an energetic run, or
            thrives on socializing with other dogs, we adapt to their pace and
            preferences.
            <br />
            <br />
            Join our group dog walks designed with safety as our top priority.
            We maintain a low 1:5 person-to-dog ratio, ensuring close
            supervision and individual attention within the group. Each walk is
            carefully planned to create a secure and controlled environment,
            allowing for enjoyable socialization while prioritizing the safety
            and well-being of every dog. Our team members are trained to manage
            group dynamics, ensuring positive interactions and a harmonious
            experience for all furry participants. With a keen focus on safety
            protocols and a commitment to responsible handling, our group walks
            provide a fun and secure outing for your canine companions.
          </>
        }
        buttonText="Get Started Today"
        imageSrc={dogwalkingimg1}
        imageAlt="Kitchener pet sitter"
        reverseColumns={false}
      />
    <FeaturesSection
      title="Our Services"
      subtitle="We offer a variety of services for your pets"
      callToAction="Learn More"
    />
    </>
  );
};

export default DogWalking;
