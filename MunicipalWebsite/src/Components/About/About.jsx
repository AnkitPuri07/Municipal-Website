import React from 'react'

function About({ title, description, img }) {
  return (
    <div className="relative w-full h-[400px] md:w-1/3 p-2 rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500">
      
      {/* Background Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-full object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-800/70 to-transparent rounded-2xl"></div>

      {/* Title */}
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-center px-4">
        <h2 className="text-white text-2xl md:text-3xl font-extrabold tracking-wide drop-shadow-md group-hover:text-blue-300 transition-colors duration-500">
          {title}
        </h2>
      </div>

      {/* Description */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[85%] text-center">
        <h3 className="text-white/90 text-sm md:text-base lg:text-lg leading-relaxed drop-shadow-md">
          {description}
        </h3>
      </div>
    </div>
  )
}

export default About
