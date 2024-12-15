import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center bg-[#1E3A8A] px-6 py-12 md:px-12 lg:px-24">
      {/* Left Side: Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://via.placeholder.com/600x400" /* Replace with actual image path */
          alt="AI Visual"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Text */}
      <div className="w-full md:w-1/2 text-white md:pl-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 underline">
          About Us
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          ChatSlytics is an innovative platform that consolidates customer
          interactions from various communication channels into a single,
          unified interface. Utilizing cutting-edge Artificial Intelligence (AI)
          and Natural Language Processing (NLP), it analyzes unstructured chat
          data to provide deep insights into customer behaviour and market
          trends.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Utilizing cutting-edge Artificial Intelligence (AI) and Natural
          Language Processing (NLP), it analyzes unstructured chat data to
          provide deep insights into customer behaviour and market trends.
        </p>

        {/* Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          Read More
        </button>
      </div>
    </section>
  );
};

export default AboutUs;
