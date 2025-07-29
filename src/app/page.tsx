"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "EdQraft",
    text: "Powered by data and driven by AI. Edwance.ai gives every student, teachers and parents what they truly need: track performance, personalised actions, and support every learner in real time!",
    image: "/EdQraft.png",
  },
  {
    title: "EdPulse",
    text: "Powered by data and driven by AI. Edwance.ai gives every student, teachers and parents what they truly need: track performance, personalised actions, and support every learner in real time!",
    image: "/EdPulse.png",
  },
  {
    title: "EdSight",
    text: "Powered by data and driven by AI. Edwance.ai gives every student, teachers and parents what they truly need: track performance, personalised actions, and support every learner in real time!",
    image: "/EdSight.png",
  },
  {
    title: "Edviser Tutor",
    text: "Powered by data and driven by AI. Edwance.ai gives every student, teachers and parents what they truly need: track performance, personalised actions, and support every learner in real time!",
    image: "/Edviser.png",
  },
];

const team = [
  {
    name: "Alice Smith",
    role: "Founder",
    experience: "5+ Years of Experience",
  },
  {
    name: "Bob Johnson",
    role: "Mentor",
    experience: "5+ Years of Experience",
  },
  {
    name: "Carol Lee",
    role: "Developer",
    experience: "3+ Years of Experience",
  },
  {
    name: "David Kim",
    role: "Designer",
    experience: "4+ Years of Experience",
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
          <div className="relative inline-block pb-3">
            {" "}
            <span className="relative z-10 text-orange font-extrabold">
              Edwance
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-3 bg-orange rounded-full z-0 animate-pulse"></span>
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

      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-orange my-16 mx-auto w-[95%] rounded-[100px] py-24 shadow-md">
        {/* Carousel Content */}
        <div className="relative z-10 flex items-center justify-center gap-8 w-full max-w-7xl px-6">
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
              className="flex flex-col md:flex-row items-center gap-16 w-full"
            >
              <div className="flex-1 text-left text-white max-w-lg">
                <h3 className="text-6xl md:text-7xl font-plak font-extrabold mb-6">
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
                  className="w-[600px] h-auto object-contain transition-all duration-500"
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

        {/* Dots */}
        <div className="relative z-10 flex gap-2 justify-center mt-20">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === carouselIndex ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>

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
            className="mt-4 self-center bg-white text-black px-6 py-3 rounded-full font-poppins text-base hover:bg-neutral-100 transition  "
          >
            Send Enquiry →
          </button>
        </form>
      </section>

      {/* Team Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden bg-orange my-16 mx-auto w-[95%] rounded-[100px] py-24 shadow-md">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-plak font-bold text-white mb-12">
          Our Team
        </h2>

        {/* Carousel Controls + Content */}
        <div className="relative z-10 flex items-center justify-center gap-8 w-full max-w-7xl px-6">
          <button
            onClick={() =>
              setTeamIndex(
                (i) =>
                  (i - 1 + Math.ceil(team.length / 2)) %
                  Math.ceil(team.length / 2)
              )
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
              className="flex flex-col md:flex-row items-center gap-16 w-full justify-center"
            >
              {[...team.slice(teamIndex * 2, teamIndex * 2 + 2)].map(
                (member, idx) => (
                  <div
                    key={idx}
                    className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-center px-8 py-10 rounded-3xl shadow-xl w-72"
                  >
                    <div className="bg-white w-32 h-32 rounded-full mb-6 mx-auto shadow-lg" />
                    <div className="text-2xl font-plak font-bold mb-2">
                      {member.name}
                    </div>
                    <div className="text-lg text-white/80 mb-1">
                      {member.role}
                    </div>
                    <div className="text-base text-white/70">
                      {member.experience}
                    </div>
                  </div>
                )
              )}
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() =>
              setTeamIndex((i) => (i + 1) % Math.ceil(team.length / 2))
            }
            className="text-white text-3xl px-4"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="relative z-10 flex gap-2 justify-center mt-20">
          {Array.from({ length: Math.ceil(team.length / 2) }).map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === teamIndex ? "bg-white" : "bg-white/50"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </main>
  );
}
