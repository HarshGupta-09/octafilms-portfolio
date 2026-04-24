import React from "react";
import { Film, Award, Users, Zap } from "lucide-react";

const features = [
  {
    icon: <Film size={36} />,
    title: "Cinematic Excellence",
    desc: "Professional filmmaking techniques and creative direction",
  },
  {
    icon: <Award size={36} />,
    title: "Award-Winning Quality",
    desc: "High-quality visual narratives that captivate audiences",
  },
  {
    icon: <Users size={36} />,
    title: "Experienced Team",
    desc: "Expert team of cinematographers and visual storytellers",
  },
  {
    icon: <Zap size={36} />,
    title: "Modern Workflows",
    desc: "State-of-the-art equipment and editing workflows",
  },
];

const About = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-red-500">OCTAFILMS</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Top Section (Image + Text) */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Image */}
          <div>
            <img
              src="/public/about.jpeg"
              alt="filmmaking"
              className="rounded-xl w-full object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Text */}
          <div className="space-y-6  text-gray-300">
            <p>
              <span className="text-white font-bold">
             OCTAFILMS is a visual storytelling studio built on the idea that every frame should mean something.
              </span>{" "}
            
            </p>

            <p className="text-white font-bold"> 
             From high-energy events to deeply personal narratives, we create cinematic experiences that connect, engage, and leave an impact.
            </p>

            <p className="text-white font-bold">
            Our work blends storytelling, emotion, and precision — turning moments into timeless visuals.
            </p>
            <p className="text-white font-bold">
            We don’t just document.
We make people feel.
            </p>

            <p className="text-red-500 text-xl font-medium">
              
Every story deserves to be felt — not just seen.
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[black] border border-gray-800 rounded-xl p-8 text-center 
              hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.25)] 
              hover:-translate-y-2 transition duration-300"
            >
              
              {/* Icon */}
              <div className="text-red-500 flex justify-center mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm font-bold leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default About;