import React from "react";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 px-8 py-6 flex items-center justify-between">
      
      {/* Logo */}
      <h1 className="text-white text-xl font-semibold tracking-widest">
        OCTAFILMS
      </h1>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
        <li className="hover:text-red-500 transition-all duration-200 ease-linear  cursor-pointer">ABOUT</li>
        <li className="hover:text-red-500 transition-all duration-200 ease-linear cursor-pointer">SERVICES</li>
        <li className="hover:text-red-500 transition-all duration-200 ease-linear cursor-pointer">PORTFOLIO</li>
        <li className="hover:text-red-500 transition-all duration-200 ease-linear cursor-pointer">TEAM</li>
        <li className="hover:text-red-500 transition-all duration-200 ease-linear cursor-pointer">CONTACT</li>
      </ul>

      {/* CTA Button */}
      <button className="hidden md:block bg-red-600 transition-all duration-200 ease-linear cursor-pointer hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold">
        WORK WITH US
      </button>
    </nav>
  );
};

export default Navbar;