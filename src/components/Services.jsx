import React from "react";
import { Camera, Video, Users, Sparkles, Film, Clapperboard } from "lucide-react";

const services = [
  {
    icon: <Camera size={28} />,
    title: "Event Photography",
    desc: "Corporate events, conferences, TEDx events, seminars, and social gatherings.",
  },
  {
    icon: <Video size={28} />,
    title: "Cinematic Videography",
    desc: "High-quality cinematic video production for events and brands.",
  },
  {
    icon: <Users size={28} />,
    title: "Political Campaign Media",
    desc: "Campaign photography, digital campaign visuals, and storytelling.",
   
  },
  {
    icon: <Sparkles size={28} />,
    title: "Brand & Social Media Content",
    desc: "Creative content for Instagram, YouTube, LinkedIn and digital platforms.",
  },
  {
    icon: <Film size={28} />,
    title: "Documentary & Short Films",
    desc: "Professional storytelling and documentary production.",
  },
  {
    icon: <Clapperboard size={28} />,
    title: "Editing & Post Production",
    desc: "Professional color grading, cinematic editing, and visual storytelling.",
  },
];

const Services = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-500">Services</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 font-bold mt-6 max-w-2xl mx-auto">
            Comprehensive media production services tailored to bring your vision to life
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 border transition duration-300
              ${
                item.highlight
                  ? "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.3)]"
                  : "border-gray-800"
              }
              bg-gradient-to-br from-[black] to-[#0b0f19]
              hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]
              `}
            >
              
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-600 mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-semibold mb-3 ${
                  item.highlight ? "text-red-500" : "text-white"
                }`}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;