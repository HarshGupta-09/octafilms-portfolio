import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "ABOUT", id: "about" },
    { name: "SERVICES", id: "services" },
    { name: "PORTFOLIO", id: "portfolio" },
    { name: "TEAM", id: "team" },
    { name: "CONTACT", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] px-6 md:px-8 py-4 flex items-center justify-between transition-all duration-300
      ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <h1 className="text-white text-lg md:text-xl font-semibold tracking-widest">
        OCTAFILMS
      </h1>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 text-white text-sm font-medium">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="hover:text-red-500 transition"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTA */}
      <a
        href="#contact"
        className="hidden md:block bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-full text-sm font-semibold"
      >
       Start a Project
      </a>

      {/* Mobile Menu Button */}
      <div className="md:hidden text-white">
        {open ? (
          <X size={28} onClick={() => setOpen(false)} className="cursor-pointer" />
        ) : (
          <Menu size={28} onClick={() => setOpen(true)} className="cursor-pointer" />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 md:hidden
        ${open ? "max-h-[400px] py-6" : "max-h-0 overflow-hidden"}`}
      >
        <ul className="flex flex-col items-center gap-6 text-white text-lg font-medium">

          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="hover:text-red-500 transition"
              >
                {link.name}
              </a>
            </li>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 rounded-full text-sm font-semibold"
          >
            WORK WITH US
          </a>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;