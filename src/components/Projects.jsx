import React, { useEffect, useRef, useState } from "react";

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

const stats = [
  { target: 30, suffix: "+", label: "Projects Completed" },
  { target: 30, suffix: "+", label: "Happy Clients" },
  { target: 3,  suffix: "+", label: "Years Experience" },
  { target: 1000, suffix: "+", label: "Hours Footage" },
];

// ── CountUp Hook ──────────────────────────────────────────────
function useCountUp(target, duration = 1000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuad for smooth deceleration
      const eased = 1 - (1 - progress) * (1 - progress);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

// ── Single Stat Card ──────────────────────────────────────────
function StatItem({ target, suffix, label, animate }) {
  const count = useCountUp(target, 2000, animate);

  return (
    <div>
      <h3 className="text-4xl md:text-5xl font-bold">
        {count}{suffix}
      </h3>
      <p className="mt-2 text-sm md:text-base tracking-wide uppercase">
        {label}
      </p>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────
const Projects = () => {
  const statsRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect(); // ek baar trigger hone ke baad stop
        }
      },
      { threshold: 0.3 } // 30% visible hone par trigger
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== Featured Projects ===== */}
      <section className="bg-black text-white py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold">
              Featured <span className="text-red-500">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((item, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl border transition duration-300 cursor-pointer
                  ${item.highlight
                    ? "border-red-500 shadow-[0_0_25px_rgba(239,68,68,0.2)]"
                    : "border-gray-800"
                  }
                  bg-gradient-to-br from-[black] to-[#0b0f19]
                  hover:border-red-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(239,68,68,0.25)]
                `}
              >
                <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                <p className="text-red-500 font-medium mb-4">{item.subtitle}</p>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">{item.desc}</p>
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
      <section
        ref={statsRef}
        className="bg-gradient-to-r from-red-700 to-red-500 text-white py-16 px-6"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} animate={animate} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;