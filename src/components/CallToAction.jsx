import React from 'react'

const CallToAction = () => {
    return (
        <div className="bg-[#5cb464] text-white py-12 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Stressed about your next get away?</h2>
        <p className="text-2xl mb-6">
          We've got you covered. Call us today for a free meet and greet!
        </p>
        <a href="#services" className="bg-white text-[#5cb464] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-gray-100 transition duration-300 ease-in-out">
          Get Started
        </a>
      </div>
    );
    
}

export default CallToAction