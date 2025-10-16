import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div  className="flex flex-wrap justify-evenly bg-slate-800 text-slate-50 shadow-md p-2">
       <span className="font-bold text-white text-lg md:w-1/3">Municipality</span>
       <NavLink
            to="/"
            className=" transition duration-200 hover:text-orange-700 font-bold md:text-lg"
          >
            Home
          </NavLink>

          <NavLink
            to="/Notices"
         className=" transition duration-200 hover:text-orange-700 font-bold md:text-lg"
          >
            Notices
          </NavLink>


          <NavLink
            to="/Visit"
          className=" transition duration-200 hover:text-orange-700 font-bold md:text-lg"
          >
            Visit
          </NavLink>

          

    </div>
    </>
  );
}

export default Navbar;