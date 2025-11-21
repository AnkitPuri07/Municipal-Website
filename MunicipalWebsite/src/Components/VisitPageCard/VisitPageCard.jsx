// src/components/VisitCard.jsx
import React from "react";

function VisitCard({ place }) {
  return (
    <div className="relative w-full md:w-[60%] mt-2 h-96 rounded-xl p-2 overflow-hidden shadow-lg group cursor-pointer">
      {/* Background Image */}
      <img
        src={place.image}
        alt={place.title}
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Title at the top */}
      <h2 className="absolute top-4 left-4 text-white text-2xl font-bold drop-shadow-lg">
        {place.title}
      </h2>

      {/* Description in the center */}
      <p className="absolute inset-x-4 top-1/2 transform -translate-y-1/2 text-center text-white text-md font-medium drop-shadow-lg">
        {place.description}
      </p>

      {/* Details above the bottom */}
      <div className="absolute bottom-4 left-4 right-4 text-white text-sm bg-black/40 p-3 rounded-lg backdrop-blur-sm transition-all duration-500 opacity-0 group-hover:opacity-100">
        <p>
          <span className="font-semibold">Speciality:</span> {place.details.speciality}
        </p>
        <p>
          <span className="font-semibold">Route:</span> {place.details.route}
        </p>
      </div>
    </div>
  );
}

export default VisitCard;
