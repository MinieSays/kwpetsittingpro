import React from "react";

const ListSection = () => {
  const listItems = [
    "Safety-Conscious: They prioritize safety, ensuring the boarding environment is secure, hazard-free, and equipped with safety measures.",
    "Experience and Knowledge: They have experience handling dogs of various breeds, temperaments, and needs, along with knowledge of basic canine behavior and health.",
    "Attentiveness and Care: Good dog boarders offer individualized attention, meeting each dog’s needs, providing exercise, mental stimulation, and companionship.",
    "Reliability and Professionalism: They are dependable, adhering to schedules, and communicate effectively with pet owners. Professional conduct and integrity are essential.",
    "Cleanliness and Hygiene: Maintaining a clean and hygienic environment is crucial to prevent the spread of illnesses and ensure the dogs’ well-being.",
    "Safety Protocols: They have established safety protocols for emergencies, including access to veterinary care if needed, and are trained in basic pet first aid.",
    "Feedback and Communication: Good dog boarders provide updates and feedback to pet owners, fostering trust and transparency about the dog’s stay.",
    "Love for Dogs: They genuinely care for dogs, creating a nurturing and loving environment that mirrors a home away from home.",
  ];

  return (
    <div className="w-full row container">
      <ul className="space-y-3 flex flex-col items-center mb-12">
        <h2 className="text-center text-4xl font-semibold leading-10 mb-6 tracking-tight sm:text-5xl sm:leading-none md:text-6xl">
          Finding Reputable
          <br />
          <span className="font-extrabold text-[#5cb464]">Boarding</span>
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
