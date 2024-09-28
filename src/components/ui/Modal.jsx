import React, { useEffect, useState } from "react";

const Modal = ({ showModal, toggleModal }) => {
  const [showBackground, setShowBackground] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    if (showModal) {
      setTimeout(() => setShowBackground(true), 50);
    } else {
      setShowBackground(false);
    }
  }, [showModal]);

  const handleServiceChange = (event) => {
    setSelectedService(event.target.value);
  };

  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center transition-transform duration-700 ease-out ${
            showBackground ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={toggleModal}
        >
          <div
            className="bg-white rounded-lg w-full max-w-md mx-4 p-6 relative shadow-lg transition-all duration-300 ease-in-out transform"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">
              Submit a request
            </h2>
            {/* Form */}
            <form
              action="https://formspree.io/f/xzzplwnv"
              method="POST"
              className="space-y-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                />
              </div>

              <div className="flex md:flex-row gap-4">
                <div className="flex-1">
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Service Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Service Time
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                  >
                    <option value="">Select a time</option>
                    <option value="9:00 AM">9:00 AM</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-3 md:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#5cb464] focus:border-transparent"
                ></textarea>
              </div>

              <fieldset className="mb-4">
                <legend className="block text-sm font-medium text-gray-700 mb-2">
                  Select Service
                </legend>
                <div className="grid grid-cols-2 md:gap-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Meet & Greet"
                      checked={selectedService === "Meet & Greet"}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    Meet & Greet
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Dog Walking"
                      checked={selectedService === "Dog Walking"}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    Dog Walking
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Pet Sitting"
                      checked={selectedService === "Pet Sitting"}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    Pet Sitting
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="service"
                      value="Pet Boarding"
                      checked={selectedService === "Pet Boarding"}
                      onChange={handleServiceChange}
                      className="mr-2"
                    />
                    Pet Boarding
                  </label>
                </div>
              </fieldset>

              <p className="text-sm text-gray-600">
                Please note that each request is not finalized until we confirm
                the appointment.
              </p>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-[#5cb464] text-white font-semibold rounded-md hover:bg-[#4ca355] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
