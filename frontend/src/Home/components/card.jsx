// CardComponent.jsx
import React from 'react';

const CardComponent = ({ icon, title, description }) => {
  return (
    <div className="relative group bg-white rounded-xl shadow-xl overflow-hidden p-6 transition-all duration-300 hover:scale-105">
      {/* Hover Bubble */}
      <div className="absolute top-0 left-0 w-full h-full bg-yellow-200 opacity-0 group-hover:opacity-20 transition duration-300 blur-2xl z-0"></div>

      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center mb-4">
        <div className="w-16 h-16">{icon}</div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
