"use client";
import { motion } from "framer-motion";

const icons = [
  { src: "/icons/1.png", x: "5%", y: "10%", delay: 0, duration: 8 },
  { src: "/icons/2.png", x: "20%", y: "15%", delay: 0.2, duration: 7 },
  { src: "/icons/3.png", x: "35%", y: "8%", delay: 0.4, duration: 9 },
  { src: "/icons/4.png", x: "50%", y: "12%", delay: 0.1, duration: 8.5 },
  { src: "/icons/5.png", x: "65%", y: "18%", delay: 0.3, duration: 7.5 },
  { src: "/icons/6.png", x: "80%", y: "10%", delay: 0.5, duration: 8.2 },
  { src: "/icons/1.png", x: "15%", y: "40%", delay: 0.6, duration: 7.8 },
  { src: "/icons/2.png", x: "30%", y: "35%", delay: 0.8, duration: 8.8 },
  { src: "/icons/3.png", x: "45%", y: "42%", delay: 0.2, duration: 7.3 },
  { src: "/icons/4.png", x: "60%", y: "38%", delay: 0.4, duration: 8.3 },
  { src: "/icons/5.png", x: "75%", y: "45%", delay: 0.7, duration: 7.7 },
  { src: "/icons/6.png", x: "85%", y: "35%", delay: 0.1, duration: 8.7 },
  { src: "/icons/1.png", x: "10%", y: "70%", delay: 0.3, duration: 7.9 },
  { src: "/icons/2.png", x: "25%", y: "65%", delay: 0.5, duration: 8.1 },
  { src: "/icons/3.png", x: "40%", y: "72%", delay: 0.9, duration: 7.4 },
  { src: "/icons/4.png", x: "55%", y: "68%", delay: 0.2, duration: 8.4 },
  { src: "/icons/5.png", x: "70%", y: "75%", delay: 0.4, duration: 7.6 },
  { src: "/icons/6.png", x: "90%", y: "60%", delay: 0.6, duration: 8.6 },
];

export default function FloatingIcons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ 
            y: "-20vh", 
            opacity: [0.4, 0.8, 0.4],
            x: [-10, 10, -10]
          }}
          transition={{ 
            duration: icon.duration, 
            repeat: Infinity, 
            repeatType: "loop",
            delay: icon.delay,
            ease: "linear"
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
            className="w-16 h-16 md:w-20 md:h-20 opacity-90"
            style={{ filter: 'brightness(0.9) contrast(1.2)' }}
          />
        </motion.div>
      ))}
    </div>
  );
} 