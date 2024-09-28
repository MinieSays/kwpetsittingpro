import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-white">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Looking for a meet and greet or have any questions? Feel free to send
          us a form below. We'll get back to you within 2 business days.
          <br />
          <br />
          Email: sarah@kwpetsitting.com
          <br />
          Phone number: 226-978-2133
        </p>
        <form
          action="https://formspree.io/f/xzzplwnv"
          method="POST"
          className="space-y-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="full-name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#5cb464] focus:border-[#5cb464] block w-full p-2.5"
                placeholder="Full name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#5cb464] focus:border-[#5cb464] block w-full p-2.5"
                placeholder="(123) 456-7890"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#5cb464] focus:border-[#5cb464] block w-full p-2.5"
              placeholder="name@domain.com"
              required
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#5cb464] focus:border-[#5cb464]"
              placeholder="Leave a comment..."
              required
            ></textarea>
          </div>

          <div>
            <label
              htmlFor="service-date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Service Date
            </label>
            <input
              type="date"
              id="service-date"
              name="service-date"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#5cb464] focus:border-[#5cb464] block w-full p-2.5"
              required
            />
          </div>

          <div>
            <label
              htmlFor="service-time"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Select Service Time
            </label>
            <select
              id="service-time"
              name="service-time"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-[#5cb464] focus:border-[#5cb464]"
              required
            >
              <option value="">Select a time</option>
              {Array.from({ length: 24 }, (_, i) => (
                <React.Fragment key={i}>
                  <option value={`${i}:00`}>{`${i}:00`}</option>
                  <option value={`${i}:30`}>{`${i}:30`}</option>
                </React.Fragment>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select Service
            </label>
            <div className="flex space-x-4">
              {["Meet & Greet", "Dog Walking", "Pet Sitting", "Pet Boarding"].map(
                (service) => (
                  <div key={service} className="flex items-center">
                    <input
                      type="radio"
                      id={service}
                      name="selected-service"
                      value={service}
                      className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500"
                      required
                    />
                    <label
                      htmlFor={service}
                      className="ml-2 text-sm font-medium text-gray-900"
                    >
                      {service}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#5cb464] sm:w-fit hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300"
            >
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

