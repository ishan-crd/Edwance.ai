"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "EdPulse",
    text: "Powered by data and driven by AI. Edwance.ai gives every student, teachers and parents what they truly need: track performance, personalised actions, and support every learner in real time!",
    image: "/next.svg",
  },
  {
    title: "Slide 2",
    text: "Random content for slide 2.",
    image: "/vercel.svg",
  },
  {
    title: "Slide 3",
    text: "Random content for slide 3.",
    image: "/globe.svg",
  },
  {
    title: "Slide 4",
    text: "Random content for slide 4.",
    image: "/file.svg",
  },
];

const team = [
  {
    name: "Name",
    role: "Founder",
    experience: "5+ Year of Experience",
  },
  {
    name: "Name",
    role: "Mentor",
    experience: "5+ Year of Experience",
  },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    school: "",
  });

  return (
    <main className="bg-transparent">
      {/* Home Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 relative bg-transparent">
        <h1 className="text-5xl md:text-7xl font-plak font-extrabold leading-tight">
          <div className="text-neutral-black">The future of</div>
          <div className="text-orange underline decoration-orange decoration-2 underline-offset-4">
            Edwance
          </div>
          <div className="text-neutral-black">learning is here.</div>
        </h1>
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-orange text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-orange hover:bg-orangeDark transition">
            Try Now
          </button>
          <button className="border-2 border-orange text-orange px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange hover:text-white transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-orange to-orangeLight py-24 overflow-hidden">
        {/* Curved top section */}
        <div className="absolute top-0 left-0 w-full h-16 bg-white transform -skew-y-1 origin-top-left"></div>

        <div className="flex items-center justify-center gap-8 mb-8">
          <button
            onClick={() =>
              setCarouselIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            className="text-white text-3xl px-4"
          >
            &#8592;
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={carouselIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center gap-16 bg-transparent px-8 py-8 rounded-3xl"
            >
              <div className="flex-1 text-left text-white max-w-lg">
                <h3 className="text-6xl md:text-8xl font-plak font-extrabold mb-6">
                  {slides[carouselIndex].title}
                </h3>
                <p className="text-lg font-poppins font-light leading-relaxed">
                  {slides[carouselIndex].text}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <img
                  src={slides[carouselIndex].image}
                  alt="slide"
                  className="w-96 h-80 object-contain rounded-2xl bg-white/30 p-8 shadow-2xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCarouselIndex((i) => (i + 1) % slides.length)}
            className="text-white text-3xl px-4"
          >
            &#8594;
          </button>
        </div>
        <div className="flex gap-2 justify-center mt-4">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === carouselIndex ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>

        {/* Curved bottom section */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-white transform skew-y-1 origin-bottom-left"></div>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 py-24 bg-transparent overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-plak font-bold text-neutral-black mb-3">
          Contact Us
        </h2>
        <p className="text-center text-neutral-grayDark font-poppins text-base md:text-lg mb-10 max-w-2xl">
          You will get a response within 24 hours. We will explain in details
          how we can help your students grow and track their progress
          efficiently.
        </p>

        <form className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-xl flex flex-col gap-6">
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="State"
            value={form.state}
            onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="School/Institution Name"
            value={form.school}
            onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
          />
          <button
            type="submit"
            className="mt-4 self-center bg-neutral-black text-white px-6 py-3 rounded-full font-poppins text-base hover:bg-neutral-800 transition"
          >
            Send Enquiry →
          </button>
        </form>
      </section>

      {/* Team Section */}
      <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-orange to-orangeLight py-24 overflow-hidden">
        <h2 className="text-4xl md:text-5xl font-plak font-bold text-white mb-12">
          Our Team
        </h2>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() =>
              setTeamIndex((i) => (i - 1 + team.length) % team.length)
            }
            className="text-white text-3xl px-4"
          >
            &#8592;
          </button>
          <AnimatePresence mode="wait">
            <motion.div
              key={teamIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-transparent text-center px-12 py-8 rounded-3xl flex flex-col items-center"
            >
              <div className="bg-white w-40 h-40 rounded-full mb-6 shadow-lg" />
              <div className="text-2xl font-plak font-bold text-white mb-2">
                {team[teamIndex].name}
              </div>
              <div className="text-lg text-white/80 mb-1">
                {team[teamIndex].role}
              </div>
              <div className="text-base text-white/70">
                {team[teamIndex].experience}
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setTeamIndex((i) => (i + 1) % team.length)}
            className="text-white text-3xl px-4"
          >
            &#8594;
          </button>
        </div>
      </section>
    </main>
  );
}
