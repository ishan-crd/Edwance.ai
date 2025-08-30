"use client";
import { motion } from "framer-motion";
import { useMemo, useEffect, useState } from "react";

const iconSources = [
  "/icons/1.png",
  "/icons/2.png",
  "/icons/3.png",
  "/icons/4.png",
  "/icons/5.png",
  "/icons/6.png",
];

// Pre-defined positions to avoid hydration mismatches
const predefinedPositions = [
  { x: "10%", y: "15%" },
  { x: "25%", y: "30%" },
  { x: "40%", y: "45%" },
  { x: "55%", y: "60%" },
  { x: "70%", y: "75%" },
  { x: "85%", y: "20%" },
  { x: "15%", y: "70%" },
  { x: "30%", y: "85%" },
  { x: "45%", y: "25%" },
  { x: "60%", y: "40%" },
  { x: "75%", y: "55%" },
  { x: "90%", y: "80%" },
  { x: "20%", y: "10%" },
  { x: "35%", y: "35%" },
  { x: "50%", y: "50%" },
  { x: "65%", y: "65%" },
  { x: "80%", y: "80%" },
  { x: "5%", y: "25%" },
  { x: "95%", y: "45%" },
  { x: "12%", y: "55%" },
  { x: "88%", y: "15%" },
  { x: "22%", y: "75%" },
  { x: "78%", y: "35%" },
  { x: "33%", y: "85%" },
  { x: "67%", y: "25%" },
  { x: "18%", y: "40%" },
  { x: "82%", y: "70%" },
  { x: "28%", y: "60%" },
  { x: "72%", y: "90%" },
  { x: "42%", y: "10%" },
  { x: "58%", y: "30%" },
];

const generateIcons = (count = 30) => {
  return Array.from({ length: count }, (_, index) => {
    const position = predefinedPositions[index % predefinedPositions.length];
    const size = index % 3 === 0 ? 120 : index % 3 === 1 ? 60 : 30;
    
    return {
      src: iconSources[index % iconSources.length],
      x: position.x,
      y: position.y,
      delay: (index * 0.2) % 2, // Staggered delays
      duration: 8 + (index % 3) * 2, // 8-12s duration
      size,
    };
  });
};

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false);
  const icons = useMemo(() => generateIcons(30), []);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-20vh",
            opacity: [0.6, 1, 0.6],
            x: [0, 10, -10, 0], // Fixed animation values
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
