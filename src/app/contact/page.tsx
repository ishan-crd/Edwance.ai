"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    school: "",
  });

  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center px-4 py-24 bg-neutral-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-plak font-bold text-neutral-black mb-3">
        Contact Us
      </h2>
      <p className="text-center text-neutral-grayDark font-poppins text-base md:text-lg mb-10 max-w-2xl">
        You will get a response within 24 hours. We will explain in details how
        we can help your students grow and track their progress efficiently.
      </p>

      <form className="bg-white/20 backdrop-blur-lg border border-white/30 shadow-xl rounded-2xl p-8 md:p-10 w-full max-w-xl flex flex-col gap-6">
        <input
          className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
        />
        <input
          className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
          placeholder="Email address"
          value={form.email}
          onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
        />
        <input
          className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
          placeholder="Phone number"
          value={form.phone}
          onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
        />
        <input
          className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
          placeholder="State"
          value={form.state}
          onChange={(e) => setForm((f) => ({ ...f, state: e.target.value }))}
        />
        <input
          className="w-full border-b border-neutral-300 bg-transparent px-2 py-3 text-lg placeholder:text-neutral-600 focus:outline-none font-poppins"
          placeholder="School/Institution Name"
          value={form.school}
          onChange={(e) => setForm((f) => ({ ...f, school: e.target.value }))}
        />
        <button
          type="submit"
          className="mt-4 self-center bg-neutral-black text-white px-6 py-3 rounded-full font-poppins text-base hover:bg-neutral-800 transition"
        >
          Send Enquiry →
        </button>
      </form>
    </section>
  );
}
