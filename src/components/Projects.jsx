import React from "react";

const projects = [
  {
    title: "TEDx Event Coverage",
    subtitle: "Delhi School of Economics – Delhi University",
    desc: "Complete event documentation with cinematic storytelling approach",
    tags: ["Event Photography", "Videography"],
    
  },
  {
    title: "Political Campaign Media",
    subtitle: "Election Campaign 2024",
    desc: "Campaign photography and digital campaign visuals for political storytelling",
    tags: ["Political Media", "Digital Content"],
  },
  {
    title: "Concert Photography",
    subtitle: "Live Music Event Coverage",
    desc: "Multi-camera concert coverage with professional lighting and stage work",
    tags: ["Concert", "Live Events"],
  },
  {
    title: "Short Film Production",
    subtitle: "Independent Cinematic Storytelling",
    desc: "Complete short film production from concept to final delivery",
    tags: ["Short Film", "Cinematic"],
  },
];

const Projects = () => {
  return (
    <>
      {/* ===== Featured Projects ===== */}
      <section className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          </div>

          {/* Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition duration-300 cursor-pointer
                ${
                  item.highlight
                    ? "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.2)]"
                    : "border-gray-800"
                }
                bg-gradient-to-br from-[black] to-[#0b0f19]
                hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]
                `}
              >
                
                {/* Title */}
                <h3 className="text-2xl font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Subtitle */}
                <p className="text-red-500 font-medium mb-4">
                  {item.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {item.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-1 text-sm rounded-full bg-red-900/30 text-red-400 border border-red-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== Stats Section ===== */}
      <section className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">
              150+
            </h3>
            <p className="mt-2 text-sm md:text-base tracking-wide uppercase">
              Projects Completed
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">
              50+
            </h3>
            <p className="mt-2 text-sm md:text-base tracking-wide uppercase">
              Happy Clients
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">
              5+
            </h3>
            <p className="mt-2 text-sm md:text-base tracking-wide uppercase">
              Years Experience
            </p>
          </div>

          <div>
            <h3 className="text-4xl md:text-5xl font-bold">
              1000+
            </h3>
            <p className="mt-2 text-sm md:text-base tracking-wide uppercase">
              Hours Footage
            </p>
          </div>

        </div>
      </section>
    </>
  );
};

export default Projects;