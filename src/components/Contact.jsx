import React, { useRef } from "react";
import { Mail, Phone, MapPin, Instagram, Youtube, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const name = formData.get("name");
    const email = formData.get("email");
    const project = formData.get("project");
    const message = formData.get("message");

    // 🔥 Validation
    if (!name || !email || !project || !message) {
      alert("Please fill all required fields!");
      return;
    }

    emailjs
      .sendForm(
        "service_ynd7xra",
        "template_xxw80os",
        form.current,
        {
          publicKey: "e4ffr4np0yqV3QVuY",
        }
      )
      .then(
        () => {
          alert("Message sent successfully! 🚀");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error);
        }
      );
  };

  return (
    <section className="bg-black text-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            Start a <span className="text-red-500">Project</span>
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
          <p className="text-gray-400 mt-6">
            Let's create something extraordinary together
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* ===== Form ===== */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">

            {/* Name */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">NAME *</label>
              <input
                name="name"
                type="text"
                required
                className="w-full bg-[#111827] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">EMAIL *</label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-[#111827] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">PHONE</label>
              <input
                name="phone"
                type="text"
                className="w-full bg-[#111827] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              />
            </div>

            {/* Project */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                PROJECT TYPE *
              </label>
              <select
                name="project"
                required
                defaultValue=""
                className="w-full bg-[#111827] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              >
                <option value="" disabled>
                  Select a project type
                </option>
                <option>Event Photography</option>
                <option>Videography</option>
                <option>Social Media Management</option>
                <option>Political Campaign</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="text-sm text-gray-300 mb-2 block">
                MESSAGE *
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full bg-[#111827] border border-gray-800 rounded-lg px-4 py-3 outline-none focus:border-red-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full cursor-pointer bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              <Send size={18} />
              SEND MESSAGE
            </button>
          </form>

          {/* ===== Right Side (same as before) ===== */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <Mail className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-400">EMAIL</p>
                    <p>octafilms6@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-400">PHONE</p>
                    <p>8109124018</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-red-500" />
                  <div>
                    <p className="text-sm text-gray-400">LOCATION</p>
                    <p>New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Follow Us</h3>

              <div className="flex gap-4">
                <a
                  target="_blank"
                  href="https://www.instagram.com/octafilms.productions"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition"
                >
                  <Instagram />
                </a>

                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-800 hover:bg-red-600 transition">
                  <Youtube />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;