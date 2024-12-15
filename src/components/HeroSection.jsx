import React from "react";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center bg-[#1E3A8A] h-screen px-8">
      {/* Left Content */}
      <div className="text-white max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Transforming Customer Conversations <br />
          into <span className="text-blue-400">Actionable Insights</span>
        </h1>
        <p className="text-lg mb-6 leading-relaxed">
          Empower your business with AI-driven analytics to unlock hidden
          opportunities, enhance customer engagement, and stay ahead of the
          competition.
        </p>
        {/* Input and Button */}
        <div className="flex items-center gap-3">
          <input
            type="email"
            placeholder="abc@youremail.com"
            className="w-full md:w-2/3 px-4 py-3 rounded-lg bg-blue-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md transition">
            Join Waitlist
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
        <img
          src="/image.png" // Replace with your image path
          alt="Robot AI Illustration"
          className="max-w-xs md:max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
