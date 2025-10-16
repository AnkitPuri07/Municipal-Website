import React from "react";
import { Link } from "react-router";

function Employee({ name, position }) {
  return (
    <div
      className="group w-full sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs mx-auto bg-white text-slate-800
                 border border-slate-200 rounded-2xl shadow-md hover:shadow-xl mb-4
                 p-5 flex flex-col items-center justify-center space-y-3 mt-3 h-[220px]
                 transition-all duration-300 hover:-translate-y-2"
    >
      {/* Profile Circle */}
      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xl shadow-md">
        {name[0]}
      </div>

      {/* Info Section */}
      <div className="w-full text-center">
        <h3 className="font-semibold text-lg text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
          {name}
        </h3>
        <h4 className="text-sm text-slate-500">{position}</h4>
      </div>

      {/* More Info Link */}
      <div>
        <Link
          className="text-blue-500 font-medium hover:text-blue-600 hover:underline transition-colors duration-300"
        >
          More Info
        </Link>
      </div>
    </div>
  );
}

export default Employee;
