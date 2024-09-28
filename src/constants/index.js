import { FaBone, FaDog, FaPaw } from "react-icons/fa";
import reviewImg from "../assets/testimonial.png";
import reviewImg1 from "../assets/testimonial1.png";
import reviewImg2 from "../assets/testimonial2.png";

export const navLinks = [
  { name: "Home", to: "/" },
  { name: "Dog Walking", to: "/dogwalking" },
  { name: "Pet Sitting", to: "/petsitting" },
  { name: "Boarding", to: "/boarding" },
];

export const testimonials = [
    {
      image: reviewImg,
      name: "Nicole R",
      testimonial: "My furbaby was well taken care of!asdasdasdasd",
      rating: 5,
    },
    {
      image: reviewImg1,
      name: "Matthew G",
      testimonial: "Sarah is a great cat sitter and my cats love her.",
      rating: 5,
    },
    {
      image: reviewImg2,
      name: "Sarah T",
      testimonial: "A wonderful experience from start to finish.",
      rating: 5,
    },
  ];

  export const featuresData = [
    {
      icon: <FaDog size={30} className="text-[#61bb69b7]" />,
      title: "Private Walks",
      description: "Great for dogs that like to go at their own pace.",
    },
    {
      icon: <FaPaw size={30} className="text-[#61bb69b7]" />,
      title: "Group Walks",
      description: "We never take more than two dogs at a time.",
    },
    {
      icon: <FaBone size={30} className="text-[#61bb69b7]" />,
      title: "Bonded & Insured",
      description: "All of our employees are bonded and insured for your peace of mind.",
    },
  ];

  export const listItems = [
    "Safety-Conscious: They prioritize safety, ensuring the boarding environment is secure, hazard-free, and equipped with safety measures.",
    "Experience and Knowledge: They have experience handling dogs of various breeds, temperaments, and needs, along with knowledge of basic canine behavior and health.",
    "Attentiveness and Care: Good dog boarders offer individualized attention, meeting each dog’s needs, providing exercise, mental stimulation, and companionship.",
    "Reliability and Professionalism: They are dependable, adhering to schedules, and communicate effectively with pet owners. Professional conduct and integrity are essential.",
    "Cleanliness and Hygiene: Maintaining a clean and hygienic environment is crucial to prevent the spread of illnesses and ensure the dogs’ well-being.",
    "Safety Protocols: They have established safety protocols for emergencies, including access to veterinary care if needed, and are trained in basic pet first aid.",
    "Feedback and Communication: Good dog boarders provide updates and feedback to pet owners, fostering trust and transparency about the dog’s stay.",
    "Love for Dogs: They genuinely care for dogs, creating a nurturing and loving environment that mirrors a home away from home.",
  ];