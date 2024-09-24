import React from 'react';
import StarRating from './StarRating';

const TestimonialCard = ({ image, name, testimonial, rating }) => {
  return (
    <div className="text-center bg-white p-6 rounded-xl transition-transform transform hover:scale-105 duration-300 ease-in-out w-[350px]">
      <div className="w-[100px] h-[100px] mx-auto mb-4">
        <img
          src={image}
          alt={name}
          className="rounded-full object-cover w-full h-full"
          style={{ aspectRatio: '1 / 1' }}
        />
      </div>
      <StarRating rating={rating} />
      <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;