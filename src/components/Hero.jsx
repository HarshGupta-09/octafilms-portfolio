import React from "react";

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-center">
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
          alt="camera"
          className="w-full h-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-3xl">
        
        {/* Title */}
        <h1 className="text-white text-5xl md:text-9xl font-bold tracking-wide">
          OCTAFILMS
        </h1>

        {/* Red Line */}
        <div className="w-16 h-1 bg-red-600 mx-auto my-6"></div>

        {/* Subtitle */}
        <h2 className="text-white text-xl md:text-4xl font-medium mb-4">
         We don’t just capture visuals.
We craft stories that stay.
        </h2>

        {/* Description */}
        <p className="text-gray-300 mb-8 font-bold">
         Cinematic Storytelling • Photography • Visual Experiences
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          
          <a href="#portfolio" className="bg-red-600 cursor-pointer transition-all duration-200 ease-linear hover:bg-red-700 text-white px-7 py-4 rounded-full font-semibold">
            Watch Our Work
          </a>

          <a  href="#contact" className="border cursor-pointer transition-all duration-500 border-white text-white px-7 py-4 rounded-full font-semibold hover:bg-white hover:text-black">
          Start a Project
          </a>

        </div>
      </div>
    </section>
  );
};

export default Hero;