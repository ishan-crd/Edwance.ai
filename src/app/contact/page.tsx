"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", state: "", school: "" });
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-center py-24 bg-neutral-white overflow-hidden">
      <h2 className="text-4xl md:text-5xl font-plak font-bold text-neutral-black mb-4">Contact Us</h2>
      <p className="text-neutral-grayDark text-lg mb-10 max-w-xl text-center">
        You will get a response within 24 hours. We will explain in details how we can help your students grow and track their progress efficiently.
      </p>
      <form className="relative bg-white/60 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-lg flex flex-col gap-6 border border-white/40">
        <input className="bg-neutral-grayLight rounded-xl px-5 py-3 text-lg placeholder:text-neutral-grayDark focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Name" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
        <input className="bg-neutral-grayLight rounded-xl px-5 py-3 text-lg placeholder:text-neutral-grayDark focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Email address" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
        <input className="bg-neutral-grayLight rounded-xl px-5 py-3 text-lg placeholder:text-neutral-grayDark focus:outline-none focus:ring-2 focus:ring-orange" placeholder="Phone number" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
        <input className="bg-neutral-grayLight rounded-xl px-5 py-3 text-lg placeholder:text-neutral-grayDark focus:outline-none focus:ring-2 focus:ring-orange" placeholder="State" value={form.state} onChange={e => setForm(f => ({ ...f, state: e.target.value }))} />
        <input className="bg-neutral-grayLight rounded-xl px-5 py-3 text-lg placeholder:text-neutral-grayDark focus:outline-none focus:ring-2 focus:ring-orange" placeholder="School/Institution Name" value={form.school} onChange={e => setForm(f => ({ ...f, school: e.target.value }))} />
        <button type="submit" className="bg-orange text-white rounded-xl py-4 font-semibold text-lg mt-2 hover:bg-orangeDark transition">Send Enquiry &rarr;</button>
      </form>
    </section>
  );
} 