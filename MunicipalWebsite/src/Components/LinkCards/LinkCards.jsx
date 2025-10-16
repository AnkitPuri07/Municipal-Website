import React from "react";
import OnlineServices from "../../assets/OnlineServices.jpg"; 

function LinkCards({img,description,title}) {
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-lg overflow-hidden group shadow-2xl transform transition duration-500 ease-in-out
    hover:translate-x-3 hover:-translate-y-2 cursor-pointer relative">
      {/* Background Image */}
      <img
        src={img}
        alt="Online Services"
        className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {title}
        </h2>
        <p className="text-sm md:text-lg text-slate-100 ">
          {description}
        </p>
      </div>
    </div>
  );
}

export default LinkCards;
