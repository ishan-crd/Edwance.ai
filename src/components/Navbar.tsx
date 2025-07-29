"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 rounded-3xl bg-white/60 backdrop-blur-md shadow-lg mt-6 mx-auto max-w-6xl">
      <div className="flex items-center gap-2">
        <img src="/favicon.ico" alt="logo" className="w-8 h-8" />
        <span className="font-plak text-2xl text-orange font-bold">
          Edwance.AI
        </span>
      </div>
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
        <button className="bg-orange text-white px-6 py-2 rounded-xl font-poppins font-medium shadow-orange hover:bg-orangeDark transition">
          Request Demo
        </button>
      </div>
    </nav>
  );
}
