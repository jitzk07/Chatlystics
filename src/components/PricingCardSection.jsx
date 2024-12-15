import React from "react";
import PricingCard from "./PricingCard";

const pricingData = [
  {
    title: "Free Plan",
    price: "00",
    interactions: "Up to 500 interactions per month",
    idealFor: "Individuals and small businesses exploring basic features.",
    highlighted: false,
  },
  {
    title: "Starter Plan",
    price: "99",
    interactions: "Up to 2,500 interactions per month",
    idealFor: "Small businesses looking to expand their analytics capabilities.",
    highlighted: false,
  },
  {
    title: "Professional Plan",
    price: "199",
    interactions: "Up to 10,000 interactions per month",
    idealFor:
      "Medium-sized businesses requiring deeper insights and multiple integrations.",
    highlighted: true,
  },
  {
    title: "Business Plan",
    price: "399",
    interactions: "Up to 25,000 interactions per month",
    idealFor: "Established businesses with higher data needs and advanced features.",
    highlighted: false,
  },
];

function PricingCardSection() {
  return (
    <div className="min-h-screen bg-[#1E3A8A]  text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Heading */}
        <h1 className="text-3xl font-extrabold text-center underline decoration-blue-400 mb-4">
          Affordable Pricing Plans
        </h1>
        <p className="text-center mb-8">Choose your Plan</p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* View More Link */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="text-blue-300 hover:text-blue-400 underline font-semibold"
          >
            View more Plan
          </a>
        </div>
      </div>
    </div>
  );
}

export default PricingCardSection;
