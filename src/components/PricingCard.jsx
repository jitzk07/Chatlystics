// src/components/PricingCard.jsx
import React from "react";

const PricingCard = ({ title, price, interactions, idealFor, highlighted }) => {
  return (
    <div
      className={`relative p-6 border rounded-lg shadow-lg text-white ${
        highlighted
          ? "bg-blue-400 scale-105 border-blue-500"
          : "bg-[#1D2B53] hover:bg-[#273C75]"
      } transition-all`}
    >
      {/* Highlight Tag */}
      {highlighted && (
        <div className="absolute -top-3 left-4 bg-white text-black text-xs px-3 py-1 font-bold rounded">
          {title}
        </div>
      )}

      {/* Title */}
      {!highlighted && (
        <h3 className="text-lg font-bold mb-4 text-blue-300">{title}</h3>
      )}

      {/* Price */}
      <h2 className="text-4xl font-bold mb-4">
        ${price}
        <span className="text-base font-normal">/month</span>
      </h2>

      {/* Included Interactions */}
      <p className="text-sm mb-4">
        Included Interactions: <br />
        <span className="font-bold">{interactions}</span>
      </p>

      {/* Ideal For */}
      <p className="text-sm mb-6">{idealFor}</p>

      {/* Buy Now Button */}
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        BUY NOW
      </button>
    </div>
  );
};

export default PricingCard;
