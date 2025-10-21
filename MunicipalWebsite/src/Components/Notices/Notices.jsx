import React from 'react'

function Notices({ title, description, img, date, category }) {
  return (
    <div className="flex justify-center items-center p-4 bg-slate-200">
      <div className="w-full flex flex-col h-[400px] rounded-2xl overflow-hidden shadow-lg 
                      md:flex-row md:w-3/4 md:h-[220px] lg:h-[280px] 
                      bg-white border border-blue-200 hover:shadow-blue-300/40 transition-all duration-500">
        
        {/* Text Section */}
        <div className="w-full h-[55%] flex flex-col justify-center items-center gap-2 lg:gap-4 
                        bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 
                        p-6 md:h-full md:w-2/3 md:rounded-l-2xl md:rounded-r-none text-white">
          <h1 className="text-xl md:text-2xl font-bold tracking-wide">{category}</h1>
          <h2 className="text-lg md:text-xl font-semibold mt-1 text-white/95">{title}</h2>
          <h3 className="text-sm md:text-base italic mt-1 text-blue-100">{date}</h3>
          <p className="text-sm md:text-base text-blue-50 text-center mt-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Image Section */}
        <div className="w-full h-[45%] md:h-full md:w-1/3 md:rounded-r-2xl md:rounded-l-none overflow-hidden bg-slate-100">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={img}
            alt={title}
          />
        </div>
      </div>
    </div>
  )
}

export default Notices
