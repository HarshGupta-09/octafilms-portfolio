import React from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "OCTAFILMS captured our event with incredible professionalism and creativity. The visuals truly told our story.",
    name: "Alok Jhangra",
    role: "Event Director, TEDx",
  },
  {
    text: "Their cinematic approach to campaign media gave us a competitive edge. Highly professional team.",
    name: "Govind Tanwar",
    role: "DUSU Vice President Candidate",
  },
  {
    text: "Outstanding campaign coverage! They captured the energy and emotion perfectly.",
    name: "Tushar Dedha",
    role: "DUSU President",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="text-red-500">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#0F1422] to-[#0F1422] border border-gray-800 rounded-xl p-8 transition duration-300
              hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(239,68,68,0.2)]"
            >
              
              {/* Quote Icon */}
              <Quote className="text-red-500 mb-4" size={36} />

              {/* Text */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                "{item.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-gray-700 mb-4"></div>

              {/* Name */}
              <h4 className="text-lg font-semibold">
                {item.name}
              </h4>

              {/* Role */}
              <p className="text-red-500 text-sm">
                {item.role}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;