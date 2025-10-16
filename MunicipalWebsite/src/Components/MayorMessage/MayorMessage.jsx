import React from "react";
import Mayor from "../../assets/Mayor.jpg";

function MayorMessage() {
  return (
    <div className="flex justify-center items-center py-10 px-6 bg-slate-200 text-slate-800 mt-8">
      <div className="w-full max-w-6xl flex flex-col md:flex-row bg-white rounded-3xl shadow-lg overflow-hidden border border-blue-200 hover:shadow-blue-300/40 transition-shadow duration-500">
        
        {/* Image Section - Left */}
        <div className="w-full md:w-1/3 h-72 md:h-auto overflow-hidden">
          <img
            src={Mayor}
            alt="Mayor"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Section - Right */}
        <div className="w-full md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-700">
            Message from the Mayor
          </h1>
          <p className="text-base md:text-lg leading-relaxed mb-6 text-slate-700">
            Welcome to <span className="font-semibold text-blue-700">Dudhauli Municipality’s</span> official website. 
            We are committed to transparent governance, sustainable development, and 
            providing accessible services for all residents. This platform allows 
            you to stay informed, access services, and share feedback. Together, we 
            can build a prosperous and thriving community.
          </p>
          <span className="font-semibold text-lg md:text-xl text-blue-600">
            – Mayor Saitama Sensei
          </span>
        </div>
      </div>
    </div>
  );
}

export default MayorMessage;
