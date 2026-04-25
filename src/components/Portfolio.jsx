import React, { useState } from "react";

const categories = ["All Work", "EVENTS", "CONCERTS", "FILMS"];

const projects = [
  {
    id: 1,
    title: "Political Campaign",
    location: "",
    category: "EVENTS",
    image: "/photos/1.webp",
  },
  {
    id: 2,
    title: "Event Photography",
    location: "",
    category: "CONCERTS",
    image: "/photos/13PUGDI.webp",
  },
  {
    id: 3,
    title: "Political Campaign",
    location: "",
    category: "CONCERTS",
    image: "/photos/3.webp",
  },
  {
    id: 4,
    title: "Political Campaign",
    location: "",
    category: "FILMS",
    image: "/photos/16.webp",
  },
  {
    id: 5,
    title: "Political Campaign",
    location: "",
    category: "EVENTS",
    image: "/photos/6.webp",
  },
  {
    id: 6,
    title: "Political Campaign",
    location: "",
    category: "FILMS",
    image: "/photos/7.webp",
  },
  {
    id: 7,
    title: "Political Campaign",
    location: "",
    category: "FILMS",
    image: "/photos/12.webp",
  },
  {
    id: 8,
    title: "Political Campaign",
    location: "",
    category: "FILMS",
    image: "/photos/8.webp",
  },
  {
    id: 9,
    title: "Event Photography",
    location: "",
    category: "FILMS",
    image: "/photos/14.webp",
  },
  {
    id: 10,
    title: "Event Photography",
    location: "",
    category: "FILMS",
    image: "/photos/10.webp",
  },
  {
    id: 11,
    title: "Event Photography",
    location: "",
    category: "FILMS",
    image: "/photos/15.webp",
  },
  {
    id: 12,
    title: "Event Photography",
    location: "",
    category: "FILMS",
    image: "/photos/16.webp",
  },
];

const Portfolio = () => {
  const [active, setActive] = useState("All Work");

  const filtered =
    active === "All Work"
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
            Stories we’ve crafted. Moments we’ve captured.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-xl"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4 translate-y-6 group-hover:translate-y-0">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-300">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;