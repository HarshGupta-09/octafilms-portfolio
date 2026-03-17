import React, { useState } from "react";

const categories = ["ALL", "EVENTS", "CONCERTS", "FILMS", "POLITICAL"];

const projects = [
  {
    id: 1,
    title: "TEDx Event Coverage",
    location: "Delhi School of Economics – Delhi University",
    category: "EVENTS",
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
  },
  {
    id: 2,
    title : "Live Concert Production",
    location : "Multicamera Concert Coverage with cinematic grading",
    category: "CONCERTS",
    image:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
  },
  {
    id: 3,
    title : "Political Campaign",
    location : "Complete campaign media coverage and digital content",

    category: "CONCERTS",
    image:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3",
  },
  {
    id: 4,
    title : "Corporate Brand Flim",
    location : "Cinematic brand storytelling for coperate identity",
    category: "FILMS",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
  },
  {
    id: 5,
    category: "EVENTS",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
  },
  {
    id: 6,
    category: "FILMS",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("ALL");

  const filtered =
    active === "ALL"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-red-500">Work</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 font-extrabold mt-6">
            Explore our diverse portfolio of cinematic productions
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition
              ${
                active === cat
                  ? "bg-red-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl"
            >
              
              {/* Image */}
              <img
                src={item.image}
                alt=""
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 translate-y-6 group-hover:translate-y-0">
                
                {item.title && (
                  <>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-300">
                      {item.location}
                    </p>
                  </>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;