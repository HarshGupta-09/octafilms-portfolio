import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ["about", "services", "portfolio", "team", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] px-8 py-4 flex items-center justify-between transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <h1 className="text-white text-xl font-semibold tracking-widest">
        OCTAFILMS
      </h1>

      {/* Links */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium">

        <li>
          <a
            href="#about"
            className={`transition ${
              active === "about" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            ABOUT
          </a>
        </li>

        <li>
          <a
            href="#services"
            className={`transition ${
              active === "services" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            SERVICES
          </a>
        </li>

        <li>
          <a
            href="#portfolio"
            className={`transition ${
              active === "portfolio" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            PORTFOLIO
          </a>
        </li>

        <li>
          <a
            href="#team"
            className={`transition ${
              active === "team" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            TEAM
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={`transition ${
              active === "contact" ? "text-red-500" : "text-white hover:text-red-500"
            }`}
          >
            CONTACT
          </a>
        </li>

      </ul>

      {/* CTA */}
      <a
        href="#contact"
        className="hidden md:block bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-full text-sm font-semibold"
      >
        WORK WITH US
      </a>
    </nav>
  );
};

export default Navbar;