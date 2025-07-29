"use client";

export default function FooterPage() {
  return (
    <footer className="relative bg-orange text-white py-16 px-8 flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
      <div className="flex flex-col md:flex-row w-full max-w-6xl justify-between items-center gap-8">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 mb-2">
            <img src="/whitefavicon.ico" alt="logo" className="w-8 h-8" />
            <span className="font-plak text-2xl font-bold">Edwance.AI</span>
          </div>
          <span className="text-white/80">© Edwance.AI</span>
        </div>
        <div className="flex flex-wrap gap-8 text-white/90 text-base">
          <a href="#" className="hover:underline">
            Company
          </a>
          <a href="#" className="hover:underline">
            About Us
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline">
            Blogs & News
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <a href="#" className="hover:underline">
            Refund Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
