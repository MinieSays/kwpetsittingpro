import React from 'react'
import { FaStar } from 'react-icons/fa'; 

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center mb-2">
    {[...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
      />
    ))}
  </div>
  )
}

export default StarRating