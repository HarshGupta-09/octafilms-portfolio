import React from "react";
import { Lightbulb, Calendar, Play, Scissors } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb size={28} />,
    title: "Concept",
    desc: "Understanding your vision and defining the creative direction",
    number: "01",
  },
  {
    icon: <Calendar size={28} />,
    title: "Planning",
    desc: "Detailed planning, storyboarding, and logistics coordination",
    number: "02",
  },
  {
    icon: <Play size={28} />,
    title: "Production",
    desc: "Professional filming with state-of-the-art equipment",
    number: "03",
  },
  {
    icon: <Scissors size={28} />,
    title: "Post Production",
    desc: "Expert editing, color grading, and final delivery",
    number: "04",
  },
];

const Process = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            The <span className="text-red-500">Process</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6">
            Our streamlined approach to creating exceptional visual content
          </p>
        </div>

        {/* Line */}
        <div className="hidden md:block absolute top-[52%] left-0 w-full h-[2px] bg-red-600/40"></div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-4 text-center relative z-10">
          {steps.map((step, index) => (
            <div key={index} className="relative">

              {/* Faded Number */}
              <span className="absolute inset-0 flex items-center justify-center text-[80px] font-bold text-white/5">
                {step.number}
              </span>

              {/* Icon */}
              <div className="relative flex justify-center mb-6">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full bg-red-600 
                  transition duration-500 hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] hover:rotate-[360deg]"
                >
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.desc}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;