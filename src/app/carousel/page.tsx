"use client";
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

export default function CarouselPage() {
  const [index, setIndex] = useState(0);
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-br from-orange to-orangeLight py-24 overflow-hidden">
      <div className="flex items-center justify-center gap-8 mb-8">
        <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} className="text-white text-3xl px-4">&#8592;</button>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col md:flex-row items-center gap-12 bg-transparent px-8 py-8 rounded-3xl"
          >
            <div className="flex-1 text-left text-white max-w-md">
              <h3 className="text-3xl font-plak font-bold mb-4">{slides[index].title}</h3>
              <p className="text-lg mb-4">{slides[index].text}</p>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={slides[index].image} alt="slide" className="w-80 h-60 object-contain rounded-2xl bg-white/30 p-4" />
            </div>
          </motion.div>
        </AnimatePresence>
        <button onClick={() => setIndex((i) => (i + 1) % slides.length)} className="text-white text-3xl px-4">&#8594;</button>
      </div>
      <div className="flex gap-2 justify-center mt-4">
        {slides.map((_, i) => (
          <span key={i} className={`w-3 h-3 rounded-full ${i === index ? "bg-white" : "bg-white/50"}`}></span>
        ))}
      </div>
    </section>
  );
} 