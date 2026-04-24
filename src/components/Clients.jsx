import React from "react";

const clients = [
  { name: "TEDx" },
  { name: "DU" },
  { name: "ABVP" },
  { name: "NSUI" },
  { name: "BJP" },
  { name: "CONGRESS" },
];

const Clients = () => {
  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Clients & <span className="text-red-500">Collaborations</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6">
            Trusted by leading organizations and brands
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`flex items-center justify-center h-24 rounded-xl border transition duration-300
              ${
                client.highlight
                  ? "border-red-500 text-red-500 rotate-[-6deg] shadow-[0_0_20px_rgba(239,68,68,0.3)]"
                  : "border-gray-800 text-white"
              }
              bg-[black]
              hover:border-red-500 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(239,68,68,0.2)]
              `}
            >
              <span className="text-lg font-semibold tracking-wide">
                {client.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Clients;