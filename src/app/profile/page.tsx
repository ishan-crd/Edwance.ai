"use client";
import { useSearchParams } from 'next/navigation';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import FloatingIcons from "../../components/FloatingIcons";
import { easeOut } from "framer-motion";


const teamProfiles = {
  "saurabh-pillai": {
    name: "Saurabh Pillai",
    role: "Founder & CEO",
    company: "Edwance.ai",
    experience: "5+ Years of Experience",
    image: "/saurabh.jpg",
    bio: "With over 5 years of experience leading digital transformation initiatives in the conversational AI space. As a Senior Tech Consultant at Yellow.ai, he has worked with marquee enterprises such as CIPLA, TATA AIA, Asian Paints, Taj Hotels, and Bharat Petroleum, consistently delivering a 120% Net Revenue Retention (NRR) year-on-year.",
    fullDescription: "He understands the art of consultative selling, combining business empathy, solution-driven thinking, and an ability to navigate complex stakeholder environments. With a B.Tech in Information Technology from SRM University, and a ex-delegate in Harvard US-India Conference, he brings a blend of customer success, technical fluency, and strategic insight—now fueling his mission at Edwance.ai to build impactful, AI-powered educational solutions that translate insights into outcomes.",
    education: "B.Tech in Information Technology, SRM University",
    achievements: [
      "120% Net Revenue Retention (NRR) year-on-year at Yellow.ai",
      "Ex-delegate in Harvard US-India Conference",
      "Senior Tech Consultant at Yellow.ai",
      "Worked with marquee enterprises: CIPLA, TATA AIA, Asian Paints, Taj Hotels, Bharat Petroleum"
    ],
    skills: ["Digital Transformation", "Conversational AI", "Consultative Selling", "Customer Success", "Strategic Planning"]
  },
  "karan-raju": {
    name: "S Karan Raju",
    role: "Co-Founder & CTO",
    company: "Edwance.ai",
    experience: "5+ Years of Experience",
    image: "/karan.jpg",
    bio: "Bringing over 5 years of experience in full-stack development, AI integration, and scalable system design. Currently at McKinsey & Company, he's led and worked on engineering initiatives across high-impact products like Insights app and Ask McKinsey chatbot.",
    fullDescription: "An M.Tech graduate from IIIT Delhi, Karan is passionate about building intelligent, inclusive tools that transform how students and educators engage with learning. He's the technical mind shaping Edwance's product vision—and always exploring how GenAI can drive real-world educational impact.",
    education: "M.Tech, IIIT Delhi",
    achievements: [
      "Engineering leader at McKinsey & Company",
      "Led development of Insights app and Ask McKinsey chatbot",
      "5+ years in full-stack development and AI integration",
      "Expert in scalable system design"
    ],
    skills: ["Full-Stack Development", "AI Integration", "System Design", "GenAI", "Product Vision", "Educational Technology"]
  },
  "ricky-bedi": {
    name: "Mr. Ricky Bedi",
    role: "Mentor",
    company: "Yellow.ai",
    experience: "35+ Years of Experience",
    image: "/ricky.jpg", 
    bio: "Currently serves as Vice President, Presales & Customer Success at Yellow.ai, a globally recognized leader in conversational AI platforms. With 35+ years of experience, He is a deep advocate of customer empathy and consultative selling.",
    fullDescription: "Known for embedding a problem‑solving mindset within teams and fostering long-term enterprise partnerships. Prior to this, Ricky co‑founded venture‑backed start-ups in the healthcare and e‑learning domains, where he drove innovation, growth, and strategic market launches. Additionally, he acts as an advisor to a technology accelerator, helping shape health‑tech and life‑sciences innovation initiatives.",
    education: "Seasoned Executive with 35+ years in technology and business",
    achievements: [
      "Vice President, Presales & Customer Success at Yellow.ai",
      "Co-founded venture-backed startups in healthcare and e-learning",
      "Advisor to technology accelerator",
      "35+ years of enterprise leadership experience",
      "Expert in health-tech and life-sciences innovation"
    ],
    skills: ["Customer Success", "Consultative Selling", "Enterprise Partnerships", "Startup Building", "Strategic Mentorship", "GTM Strategies"]
  }
};

export default function ProfilePage() {
  const searchParams = useSearchParams();
  const profileId = searchParams.get('id') || 'saurabh-pillai';
  const profile = teamProfiles[profileId as keyof typeof teamProfiles];
  const [activeSection, setActiveSection] = useState('overview');

  // Fallback to first profile if ID not found
  const currentProfile = profile || teamProfiles['saurabh-pillai'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-transparent relative">
      <FloatingIcons />
      <Navbar />
      
      <motion.main 
        className="pt-24 pb-16 px-4 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.div 
              className="relative inline-block mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-orange to-orangeDark rounded-full mx-auto shadow-2xl flex items-center justify-center">
  <div className="w-44 h-44 md:w-60 md:h-60 bg-white rounded-full overflow-hidden flex items-center justify-center">
    <img
      src={currentProfile.image}
      alt={currentProfile.name}
      className="w-full h-full object-cover"
    />
  </div>
</div>
{/* Experience Div */}      
              {/* <motion.div 
                className="absolute -bottom-4 -right-4 bg-orange text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.8, duration: 0.3 }}
              >
                {currentProfile.experience}
              </motion.div> */}
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-plak font-extrabold text-neutral-black mb-4"
              variants={itemVariants}
            >
              {currentProfile.name}
            </motion.h1>
            
            <motion.div 
              className="mb-6"
              variants={itemVariants}
            >
              <span className="text-2xl md:text-3xl font-plak font-bold text-orange">
                {currentProfile.role}
              </span>
              {currentProfile.company && (
                <span className="text-xl md:text-2xl text-neutral-grayDark font-poppins ml-2">
                  at {currentProfile.company}
                </span>
              )}
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-neutral-grayDark font-poppins max-w-4xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              {currentProfile.bio}
            </motion.p>
          </motion.div>

          {/* Navigation Tabs */}
          <motion.div 
            className="flex justify-center mb-12"
            variants={itemVariants}
          >
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full p-2 shadow-xl">
              {['overview', 'achievements', 'skills'].map((section) => (
                <button
                  key={section}
                  onClick={() => setActiveSection(section)}
                  className={`px-6 py-3 rounded-full font-poppins font-semibold text-sm md:text-base transition-all duration-300 ${
                    activeSection === section
                      ? 'bg-orange text-white shadow-lg'
                      : 'text-neutral-black hover:text-orange'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Content Sections */}
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={itemVariants}
          >
            {activeSection === 'overview' && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-plak font-bold text-neutral-black mb-6">
                  About {currentProfile.name.split(' ')[0]}
                </h2>
                <p className="text-lg text-neutral-grayDark font-poppins leading-relaxed mb-8">
                  {currentProfile.fullDescription}
                </p>
                
                <div className="bg-orange/10 rounded-2xl p-6 border border-orange/20">
                  <h3 className="text-xl font-plak font-bold text-orange mb-3">Education</h3>
                  <p className="text-neutral-grayDark font-poppins">{currentProfile.education}</p>
                </div>
              </motion.div>
            )}

            {activeSection === 'achievements' && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-plak font-bold text-neutral-black mb-8">
                  Key Achievements
                </h2>
                <div className="grid gap-4">
                  {currentProfile.achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-4 p-4 bg-white/10 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                    >
                      <div className="w-3 h-3 bg-orange rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-neutral-grayDark font-poppins">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'skills' && (
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-12 shadow-2xl"
              >
                <h2 className="text-3xl md:text-4xl font-plak font-bold text-neutral-black mb-8">
                  Core Skills & Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentProfile.skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-gradient-to-r from-orange/20 to-orangeDark/20 rounded-xl p-4 border border-orange/30 text-center hover:from-orange/30 hover:to-orangeDark/30 transition-all duration-300"
                    >
                      <span className="text-neutral-black font-poppins font-semibold">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <motion.div 
              className="bg-orange/10 backdrop-blur-lg border border-orange/30 rounded-3xl p-8 md:p-12 max-w-2xl mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-plak font-bold text-neutral-black mb-4">
                Ready to Transform Education?
              </h3>
              <p className="text-neutral-grayDark font-poppins mb-6">
                Connect with our team and discover how Edwance.ai can revolutionize learning in your institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange text-white px-8 py-3 rounded-lg font-semibold text-base shadow-lg hover:bg-orangeDark transition-all duration-300 transform hover:scale-105">
                  Get Started →
                </button>
                <button className="border border-orange text-orange px-8 py-3 rounded-lg font-semibold text-base hover:bg-orange hover:text-white transition-all duration-300 transform hover:scale-105">
                  Learn More
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.main>
    </div>
  );
}