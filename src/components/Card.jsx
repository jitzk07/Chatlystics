// src/components/Card.jsx
import React from "react";

const Card = ({ title, description, icon, link }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md bg-[#1D2B53] text-white hover:bg-[#273C75] transition-all">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-300 hover:underline font-semibold text-sm"
      >
        Read more
      </a>
    </div>
  );
};

export default Card;
