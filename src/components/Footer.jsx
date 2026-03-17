import React from "react";
import { Instagram, Youtube, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-12 pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-3">

          {/* Logo + Social */}
          <div>
            <h2 className="text-2xl font-bold mb-3">OCTAFILMS</h2>
            <p className="text-gray-400 mb-6">
              Capturing Stories. Creating Impact.
            </p>

            <div className="flex gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
                <Instagram size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
                <Youtube size={18} />
              </div>
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition cursor-pointer">
                <Linkedin size={18} />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-red-500 cursor-pointer">About</li>
              <li className="hover:text-red-500 cursor-pointer">Services</li>
              <li className="hover:text-red-500 cursor-pointer">Portfolio</li>
              <li className="hover:text-red-500 cursor-pointer">Team</li>
              <li className="hover:text-red-500 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">GET IN TOUCH</h3>

            <div className="space-y-4 text-gray-400">

              <div className="flex items-center gap-3">
                <Mail className="text-red-500" size={18} />
                <span>contact@octafilms.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-red-500" size={18} />
                <span>+91 XXXXX XXXXX</span>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm space-y-2">

          <p>© 2026 OCTAFILMS. All Rights Reserved.</p>

          {/* Developer Credit 🔥 */}
          <p>
            Developed by{" "}
            <span className="text-red-500 font-medium">
              Harsh Gupta
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;