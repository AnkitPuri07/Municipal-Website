import React from "react";

function VisitCard({ img, title, description, location }) {
  return (
    <div className="relative w-full p-2 h-[200px] lg:w-1/4 md:h-[300px] md:w-1/3 overflow-hidden rounded-2xl group shadow-md hover:shadow-xl transition-all duration-500">
      
      {/* Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl"></div>

      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 px-4 text-center">
        <h2 className="text-white text-lg md:text-2xl font-semibold drop-shadow-md">
          {title}
        </h2>
      </div>

      {/* Description */}
      <div className="absolute bottom-14 left-1/2 transform -translate-x-1/2 px-4 text-center">
        <p className="text-white text-sm md:text-base drop-shadow-sm leading-relaxed">
          {description}
        </p>
      </div>

      {/* Location */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-4 text-center">
        <span className="text-white text-sm md:text-base font-medium drop-shadow-sm">
          {location}
        </span>
      </div>

    </div>
  );
}

export default VisitCard;
