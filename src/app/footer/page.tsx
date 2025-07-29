"use client";

export default function FooterPage() {
  return (
    <footer className="bg-orange text-white px-8 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Left Section: Logo + Social */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <img src="/whitefavicon.ico" alt="logo" className="w-8 h-8" />
            <span className="font-plak text-2xl font-bold">Edwance.AI</span>
          </div>
        </div>

        {/* Right Section: Two Columns of Links */}
        <div className="grid grid-cols-2 gap-12 text-sm text-white/90">
          {/* Column 1 */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold mb-2">Company</span>
            <a href="#" className="hover:underline">
              About us
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
            <a href="#" className="hover:underline">
              Blogs & News
            </a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-2">
            <span className="text-white font-semibold mb-2">Legal</span>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Cancellation Policy
            </a>
            <a href="#" className="hover:underline">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
