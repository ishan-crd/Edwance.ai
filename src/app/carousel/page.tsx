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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      {/* Oval Container */}
      <div className="relative w-full max-w-6xl mx-4">
        {/* Main oval shape */}
        <div
          className="relative bg-gradient-to-br from-orange-500 to-orange-400 overflow-hidden"
          style={{
            borderRadius: "50%/25%",
            aspectRatio: "16/9",
            minHeight: "500px",
          }}
        >
          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 py-12">
            {/* Navigation and Slides */}
            <div className="flex items-center justify-center gap-8 mb-8 w-full">
              {/* Left Arrow */}
              <button
                onClick={() =>
                  setIndex((i) => (i - 1 + slides.length) % slides.length)
                }
                className="text-white text-4xl px-4 hover:text-white/80 transition-colors flex-shrink-0"
              >
                &#8592;
              </button>

              {/* Slide Content */}
              <div className="flex-1 max-w-4xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
                  >
                    {/* Text Content */}
                    <div className="flex-1 text-left text-white">
                      <h3 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                        {slides[index].title}
                      </h3>
                      <p className="text-lg lg:text-xl leading-relaxed opacity-95">
                        {slides[index].text}
                      </p>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 flex justify-center lg:justify-end">
                      <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                        <img
                          src={slides[index].image}
                          alt="slide"
                          className="w-64 h-48 lg:w-80 lg:h-60 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                onClick={() => setIndex((i) => (i + 1) % slides.length)}
                className="text-white text-4xl px-4 hover:text-white/80 transition-colors flex-shrink-0"
              >
                &#8594;
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex gap-3 justify-center">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-white scale-110"
                      : "bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
