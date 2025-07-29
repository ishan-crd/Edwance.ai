"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-7 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-8 py-4 rounded-full 
  bg-[#D4D4D4]/10 backdrop-blur-[153px] 
  border border-white/15 shadow-[0_13.67px_146.07px_-15.95px_rgba(0,0,0,0.25)] 
  flex justify-between items-center"
    >
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
        <span className="font-plak text-2xl text-orange font-bold">
          Edwance.AI
        </span>
      </div>

      {/* Nav Links */}
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="font-poppins text-neutral-black font-normal hover:text-orange transition"
        >
          Platform
        </Link>
        <Link
          href="/team"
          className="font-poppins text-neutral-black font-normal hover:text-orange transition"
        >
          Team
        </Link>
        <Link
          href="/contact"
          className="font-poppins text-neutral-black font-normal hover:text-orange transition"
        >
          Contact
        </Link>

        <button className="bg-orange text-white px-6 py-2 rounded-xl font-poppins font-medium hover:bg-orangeDark transition">
          Request Demo
        </button>
      </div>
    </nav>
  );
}
