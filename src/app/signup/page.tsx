"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    school: "",
    role: "student"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // Just log the form data for demo purposes
    console.log("Signup form submitted:", formData);
    alert("Form submitted successfully! (This is just a frontend demo)");
  };

  const handleGoogleSignup = () => {
    // Just log the action for demo purposes
    console.log("Google signup clicked");
    alert("Google signup clicked! (This is just a frontend demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-white via-orange/5 to-orange/10 flex items-center justify-center p-4 pt-24">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-plak font-bold text-neutral-black mb-2">
            Create Your Account
          </h1>
          <p className="text-neutral-grayDark font-poppins">
            Join the future of learning with Edwance
          </p>
        </div>

        {/* Signup Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl p-8"
        >
          {/* Google Signup Button */}
          <button
            onClick={handleGoogleSignup}
            className="w-full bg-white border border-neutral-300 text-neutral-black px-6 py-3 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 mb-6 flex items-center justify-center space-x-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span>Continue with Google</span>
          </button>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white/80 text-neutral-grayDark font-poppins">
                Or sign up with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
              required
            />

            {/* Password Fields */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
              required
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
              required
            />

            {/* School */}
            <input
              type="text"
              name="school"
              placeholder="School/Institution Name"
              value={formData.school}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
              required
            />

            {/* Role Selection */}
            <select
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm focus:outline-none focus:border-orange transition-colors font-poppins text-neutral-black"
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="administrator">Administrator</option>
            </select>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-orangeDark hover:shadow-lg transition-all duration-200 mt-6"
            >
              Create Account
            </button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-neutral-grayDark font-poppins text-sm">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-orange hover:text-orangeDark font-semibold transition-colors"
              >
                Log in instead
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Terms */}
        <p className="text-center text-neutral-grayDark font-poppins text-xs mt-6 max-w-sm mx-auto">
          By creating an account, you agree to our{" "}
          <Link href="/terms" className="text-orange hover:underline">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-orange hover:underline">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
