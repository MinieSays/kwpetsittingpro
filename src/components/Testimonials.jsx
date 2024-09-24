import React from "react";
import TestimonialCard from "./ui/TestimonialCard";
import reviewImg from "../assets/testimonial.png";
import reviewImg1 from "../assets/testimonial1.png";
import reviewImg2 from "../assets/testimonial2.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const testimonials = [
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

const TestimonialsSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Some Paw-Some Words!
        </h2>

        <OwlCarousel
          className="owl-theme"
          loop
          margin={30}
          autoplay
          nav
          navText={[
            `<div class="nav-btn prev-slide"><i class="fa fa-chevron-left text-xl text-gray-600"></i></div>`,
            `<div class="nav-btn next-slide"><i class="fa fa-chevron-right text-xl text-gray-600"></i></div>`,
          ]}
          responsive={{
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex justify-center items-center">
              <TestimonialCard
                image={testimonial.image}
                name={testimonial.name}
                testimonial={testimonial.testimonial}
                rating={testimonial.rating}
              />
            </div>
          ))}
        </OwlCarousel>

        <div className="flex justify-center mt-10">
          <a
            href="https://www.rover.com/members/sarah-s-animal-lover-furreverr/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-[#5cb464] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#4ba254] transition duration-300 ease-in-out">
              Read More Reviews
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
