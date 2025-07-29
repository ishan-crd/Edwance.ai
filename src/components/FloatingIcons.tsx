"use client";
import { motion } from "framer-motion";
import { useMemo } from "react";

const iconSources = [
  "/icons/1.png",
  "/icons/2.png",
  "/icons/3.png",
  "/icons/4.png",
  "/icons/5.png",
  "/icons/6.png",
];

const generateIcons = (count = 30) => {
  return Array.from({ length: count }, () => {
    const randomFactor = Math.random();
    const size =
      randomFactor < 0.15
        ? Math.floor(Math.random() * 50 + 100) // weirdly big (100–150px)
        : randomFactor > 0.85
        ? Math.floor(Math.random() * 15 + 15) // tiny (15–30px)
        : Math.floor(Math.random() * 40 + 40); // normal (40–80px)

    return {
      src: iconSources[Math.floor(Math.random() * iconSources.length)],
      x: `${Math.floor(Math.random() * 95)}%`,
      y: `${Math.floor(Math.random() * 95)}%`,
      delay: Math.random() * 1,
      duration: Math.random() * 4 + 6, // 6–10s
      size,
    };
  });
};

export default function FloatingIcons() {
  const icons = useMemo(() => generateIcons(30), []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0.6, 1, 0.6], // increased opacity
            x: [Math.random() * -20, Math.random() * 20, Math.random() * -20],
          }}
          transition={{
            duration: icon.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: icon.delay,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            left: icon.x,
            top: icon.y,
          }}
        >
          <img
            src={icon.src}
            alt="floating icon"
            style={{
              width: icon.size,
              height: icon.size,
              filter: "brightness(1) contrast(1.1)",
              opacity: 0.95,
              objectFit: "contain",
              aspectRatio: "1 / 1",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
