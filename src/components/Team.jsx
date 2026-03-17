import React from "react";

const Team = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-500">Team</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </div>

        {/* Card */}
        <div className="border-none  rounded-xl p-6 md:p-10 
        bg-gradient-to-br from-[#111827] to-[#0b0f19]
        flex flex-col md:flex-row items-center gap-8
        transition duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.25)]">

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
              alt="team"
              className="rounded-lg w-full h-64 md:h-72 object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">

            {/* Name */}
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">
              Agam Rai
            </h3>

            {/* Role */}
            <p className="text-red-500 font-medium mb-4">
              Cinematographer & Visual Storyteller
            </p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed">
              Agam Rai is a filmmaker and cinematographer known for capturing
              powerful visuals across events, campaigns, and cinematic storytelling.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;