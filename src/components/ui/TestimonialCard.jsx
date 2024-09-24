import React from 'react'
import StarRating from './StarRating';

const TestimonialCard = ({ image, name, testimonial, rating }) => {


  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 max-w-sm">
      <img src={image} alt={name} className="w-20 h-20 rounded-full mx-auto mb-4" />
      <StarRating rating={rating} />
      <h3 className="text-lg font-bold text-center mb-2">{name}</h3>
      <p className="text-gray-600 text-center">{testimonial}</p>
    </div>
  );
}

export default TestimonialCard

