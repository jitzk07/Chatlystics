import React from "react";

const ConnectSection = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center bg-[#1E3A8A] h-screen px-4">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Connect with the Visionary Behind ChatSlytics
      </h2>

      {/* Subheading */}
      <p className="text-gray-300 text-lg mb-6 max-w-2xl leading-relaxed">
        Schedule a call with our founder to explore how ChatSlytics can
        transform your customer conversations into actionable insights and drive
        your business growth.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row gap-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition">
          Schedule Your Call Now
        </button>
        <button className="border border-blue-400 hover:border-blue-600 text-blue-400 hover:text-blue-600 font-semibold px-6 py-3 rounded-lg transition">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default ConnectSection;
