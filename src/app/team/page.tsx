"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

export default function TeamPage() {
  const [index, setIndex] = useState(0);
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-orange to-orangeLight py-24 overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-plak font-bold text-white mb-12">Our Team</h2>
      <div className="flex items-center justify-center gap-8">
        <button onClick={() => setIndex((i) => (i - 1 + team.length) % team.length)} className="text-white text-3xl px-4">&#8592;</button>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-transparent text-center px-12 py-8 rounded-3xl flex flex-col items-center"
          >
            <div className="bg-white w-40 h-40 rounded-full mb-6 shadow-lg" />
            <div className="text-2xl font-plak font-bold text-white mb-2">{team[index].name}</div>
            <div className="text-lg text-white/80 mb-1">{team[index].role}</div>
            <div className="text-base text-white/70">{team[index].experience}</div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => setIndex((i) => (i + 1) % team.length)} className="text-white text-3xl px-4">&#8594;</button>
      </div>
    </section>
  );
} 