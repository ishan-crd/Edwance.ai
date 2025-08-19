"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const slides = [
  {
    title: "EdQraft",
    text: "EdQraft is an AI-powered engine that generates real-time, syllabus-aligned MCQs and quizzes within seconds.",
    image: "/EdQraft.png",
  },
  {
    title: "EdPulse",
    text: "EdPulse is a student-friendly, remote RF clicker system that captures real-time responses during classroom quizzes. ",
    image: "/EdPulse.png",
  },
  {
    title: "EdSight",
    text: "EdSight processes clicker and quiz data to generate deep, personalized insights. ",
    image: "/EdSight.png",
  },
  {
    title: "EdWiser",
    text: "EdWiser is your personal AI tutor - It answers academic questions, suggests study resources, and guides students in real-time across subjects, adapting to individual learning styles and gaps.",
    image: "/EdWiser.png",
  },
];

const team = [
  {
    name: "Saurabh Pillai",
    role: "Founder & CEO",
    experience: "5+ Years of Experience",
    profileId: "saurabh-pillai",
    image: "/saurabh.jpg",
  },
  {
    name: "S Karan Raju",
    role: "Co-Founder & CTO",
    experience: "5+ Years of Experience",
    profileId: "karan-raju",
    image: "/karan.jpg",
  },
  {
    name: "Mr. Ricky Bedi",
    role: "Mentor",
    experience: "35+ Years of Experience",
    profileId: "ricky-bedi",
    image: "/ricky.jpg",
  },
];


const navItems = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Home() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [teamIndex, setTeamIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    school: "",
  });

  const router = useRouter(); // Add this

  // Function to handle profile navigation
  const handleProfileClick = (profileId: string) => {
    router.push(`/profile?id=${profileId}`);
  };

  return (
    <main className="bg-transparent">
      {/* Home Section */}
      <section id="home" className="flex flex-col items-center justify-center text-center min-h-[100vh] pt-20 md:pt-30 pb-16 md:pb-25 relative bg-transparent px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-plak font-extrabold leading-tight">
          <div className="text-neutral-black">The future of</div>
          <div className="relative inline-block pb-3">
            {" "}
            <span className="relative z-10 text-orange font-extrabold">
              Edwance
            </span>
            <span className="absolute left-0 right-0 bottom-0 h-2 md:h-3 bg-orange rounded-full z-0 animate-pulse"></span>
          </div>
          <div className="text-neutral-black">learning is here.</div>
        </h1>
        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center w-full max-w-sm sm:max-w-none">
          <button className="bg-orange text-white px-6 md:px-5 py-3 md:py-2.5 rounded-lg font-semibold text-sm shadow-md hover:bg-orangeDark transition">
            Try Now →
          </button>
          <button className="border border-orange text-orange px-6 md:px-5 py-3 md:py-2.5 rounded-lg font-semibold text-sm hover:bg-orange hover:text-white transition">
            Book a Demo
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="relative flex flex-col items-center justify-center overflow-hidden bg-orange my-8 md:my-16 mx-4 md:mx-auto w-[calc(100%-2rem)] md:w-[95%] rounded-[50px] md:rounded-[100px] h-[600px] md:h-[700px] shadow-md">
        {/* Carousel Content */}
        <div className="relative z-10 flex items-center justify-center gap-2 md:gap-8 w-full max-w-7xl px-4 md:px-6 h-full">
          <button
            onClick={() =>
              setCarouselIndex((i) => (i - 1 + slides.length) % slides.length)
            }
            className="text-white text-2xl md:text-3xl px-2 md:px-4 flex-shrink-0"
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
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full"
            >
              <div className="flex-1 text-center md:text-left text-white max-w-lg order-2 md:order-1">
                <h3 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-plak font-extrabold mb-4 md:mb-6">
                  {slides[carouselIndex].title}
                </h3>
                <p className="text-base md:text-lg font-poppins font-light leading-relaxed px-4 md:px-0">
                  {slides[carouselIndex].text}
                </p>
              </div>
              <div className="flex-1 flex justify-center order-1 md:order-2">
                <img
                  src={slides[carouselIndex].image}
                  alt="slide"
                  className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-auto object-contain transition-all duration-500"
                />
              </div>
            </motion.div>
          </AnimatePresence>
          <button
            onClick={() => setCarouselIndex((i) => (i + 1) % slides.length)}
            className="text-white text-2xl md:text-3xl px-2 md:px-4 flex-shrink-0"
          >
            &#8594;
          </button>
        </div>

        {/* Slide Indicators: rounded bars at top */}
        <div className="absolute top-6 md:top-10 left-1/2 transform -translate-x-1/2 z-10 flex gap-4 justify-center">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCarouselIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1 md:h-1.5 rounded-full transition-colors duration-300 ${
                i === carouselIndex
                  ? "bg-orangeDark w-16 sm:w-20 md:w-24"
                  : "bg-white w-16 sm:w-20 md:w-24"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-transparent overflow-hidden">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-plak font-bold text-neutral-black mb-3 text-center">
          Contact Us
        </h2>
        <p className="text-center text-neutral-grayDark font-poppins text-sm md:text-base lg:text-lg mb-8 md:mb-10 max-w-2xl px-4">
          You will get a response within 24 hours. We will explain in details
          how we can help your students grow and track their progress
          efficiently.
        </p>

        <form className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-6 md:p-8 lg:p-10 w-full max-w-xl flex flex-col gap-4 md:gap-6 mx-4">
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-base md:text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-base md:text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-base md:text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="Phone number"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-base md:text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="State"
            value={form.state}
            onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
          />
          <input
            className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-base md:text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
            placeholder="School/Institution Name"
            value={form.school}
            onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
          />
          <button
            type="submit"
            className="mt-4 self-center bg-white text-black px-6 py-3 rounded-full font-poppins text-base hover:bg-neutral-100 transition"
          >
            Send Enquiry →
          </button>
        </form>
      </section>

      {/* Team Section - UPDATED WITH CLICK HANDLERS */}
      <section id="team" className="relative flex flex-col items-center justify-center overflow-hidden bg-orange my-8 md:my-16 mx-4 md:mx-auto w-[calc(100%-2rem)] md:w-[95%] rounded-[50px] md:rounded-[100px] py-16 md:py-24 shadow-md">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-plak font-bold text-white mb-8 md:mb-12 text-center">
          Our Team
        </h2>

        {/* Mobile: Single member view, Desktop: Two members view */}
        <div className="relative z-10 flex items-center justify-center gap-2 md:gap-8 w-full max-w-7xl px-4 md:px-6">
          <button
            onClick={() => {
              const maxIndex = window.innerWidth < 768 ? team.length : Math.ceil(team.length / 2);
              setTeamIndex((i) => (i - 1 + maxIndex) % maxIndex);
            }}
            className="text-white text-2xl md:text-3xl px-2 md:px-4 flex-shrink-0"
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
              className="flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full justify-center"
            >
              {/* Mobile: Show one member, Desktop: Show two members */}
              <div className="block md:hidden">
                {(() => {
                  const member = team[teamIndex];
                  return (
                    <div 
                      onClick={() => handleProfileClick(member.profileId)}
                      className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-center px-6 py-8 rounded-3xl shadow-xl w-64 cursor-pointer hover:bg-white/30 hover:scale-105 transition-all duration-300"
                    >
                      <img
  src={member.image}
  alt={member.name}
  className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4 md:mb-6 mx-auto shadow-lg"
/>

                      <div className="text-xl font-plak font-bold mb-2">
                        {member.name}
                      </div>
                      <div className="text-base text-white/80 mb-1">
                        {member.role}
                      </div>
                      <div className="text-sm text-white/70 mb-3">
                        {member.experience}
                      </div>
                      <div className="text-sm text-white/90 font-semibold">
                        Click to view profile →
                      </div>
                    </div>
                  );
                })()}
              </div>
              
              {/* Desktop: Show two members */}
              <div className="hidden md:flex gap-16 justify-center">
                {[...team.slice(teamIndex * 2, teamIndex * 2 + 2)].map(
                  (member, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleProfileClick(member.profileId)}
                      className="bg-white/20 backdrop-blur-lg border border-white/30 text-white text-center px-8 py-10 rounded-3xl shadow-xl w-72 cursor-pointer hover:bg-white/30 hover:scale-105 transition-all duration-300"
                    >
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-full mb-6 mx-auto shadow-lg"
                      />
                      <div className="text-2xl font-plak font-bold mb-2">
                        {member.name}
                      </div>
                      <div className="text-lg text-white/80 mb-1">
                        {member.role}
                      </div>
                      <div className="text-base text-white/70 mb-3">
                        {member.experience}
                      </div>
                      <div className="text-sm text-white/90 font-semibold">
                        Click to view profile →
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={() => {
              const maxIndex = window.innerWidth < 768 ? team.length : Math.ceil(team.length / 2);
              setTeamIndex((i) => (i + 1) % maxIndex);
            }}
            className="text-white text-2xl md:text-3xl px-2 md:px-4 flex-shrink-0"
          >
            &#8594;
          </button>
        </div>

        {/* Dots */}
        <div className="relative z-10 flex gap-2 justify-center mt-12 md:mt-20">
          {/* Mobile: 4 dots for 4 members, Desktop: 2 dots for 2 pairs */}
          <div className="block md:hidden">
            {team.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full ${
                  i === teamIndex ? "bg-white" : "bg-white/50"
                }`}
              ></span>
            ))}
          </div>
          <div className="hidden md:block">
            {Array.from({ length: Math.ceil(team.length / 2) }).map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full mr-2 ${
                  i === teamIndex ? "bg-white" : "bg-white/50"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}