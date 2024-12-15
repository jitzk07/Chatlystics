import React from "react";
import Card from "./Card";

const cardData = [
  {
    title: "Multichannel Data Integration",
    description:
      "Chatslytics seamlessly integrates with your preferred communication platforms, consolidating all customer interactions into one centralized dashboard.",
    icon: "🌐",
    link: "#",
  },
  {
    title: "Advanced AI-Powered Analytics",
    description:
      "Chatslytics utilizes AI-driven sentiment analysis to detect and interpret emotions expressed in customer messages.",
    icon: "📊",
    link: "#",
  },
  {
    title: "Predictive Analytics and Forecasting",
    description:
      "Chatslytics employs predictive models to analyze historical data and forecast future trends.",
    icon: "☁️",
    link: "#",
  },
  {
    title: "Predictive Analytics and Forecasting",
    description:
      "Chatslytics employs predictive models to analyze historical data and forecast future trends.",
    icon: "☁️",
    link: "#",
  },
  {
    title: "Predictive Analytics and Forecasting",
    description:
      "Chatslytics employs predictive models to analyze historical data and forecast future trends.",
    icon: "☁️",
    link: "#",
  },
  {
    title: "Predictive Analytics and Forecasting",
    description:
      "Chatslytics employs predictive models to analyze historical data and forecast future trends.",
    icon: "☁️",
    link: "#",
  },
  {
    title: "Predictive Analytics and Forecasting",
    description:
      "Chatslytics employs predictive models to analyze historical data and forecast future trends.",
    icon: "☁️",
    link: "#",
  },
];

function Services() {
  return (
    <div className="min-h-screen bg-[#1E3A8A]  text-white">
      <div className="max-w-7xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold mb-8 text-center underline decoration-blue-400">
          Services We Offer
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              icon={card.icon}
              link={card.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
