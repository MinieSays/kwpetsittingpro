import React from "react";
import TestimonialCard from "./ui/TestimonialCard";
import reviewImg from "../assets/testimonial.png";
import reviewImg1 from "../assets/testimonial1.png";
import reviewImg2 from "../assets/testimonial2.png";
import Button from "./ui/Button";

// TODO put testimonials into file
const testimonials = [
  {
    image: reviewImg,
    name: "Nicole R",
    testimonial: "My furbaby was well taken care of! Lots of pics and videos.",
    rating: 5,
  },
  {
    image: reviewImg1,
    name: "Matthew G",
    testimonial: "Sarah is a great cat sitter and my cats love her",
    rating: 5,
  },
  {
    image: reviewImg2,
    name: "Sarah T",
    testimonial: "A wonderful experience from start to finish. Five stars!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-4 row">
        <h2 className="text-3xl font-bold text-center mb-12">
          What our clients are saying..
        </h2>
        <div className="flex flex-wrap justify-center">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/2 lg:w-1/3 mb-8">
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </div>
          ))}
        <Button title="Read More Reviews" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
