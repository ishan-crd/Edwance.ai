"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Just log the form data for demo purposes
    console.log("Login form submitted:", formData);
    alert("Login form submitted! (This is just a frontend demo)");
  };

  const handleGoogleLogin = () => {
    // Just log the action for demo purposes
    console.log("Google login clicked");
    alert("Google login clicked! (This is just a frontend demo)");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-white via-orange/5 to-orange/10 flex items-center justify-center p-4 pt-24">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-plak font-bold text-neutral-black mb-2">
            Welcome Back
          </h1>
          <p className="text-neutral-grayDark font-poppins">
            Sign in to continue your learning journey
          </p>
        </div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/80 backdrop-blur-lg border border-white/30 shadow-xl rounded-3xl p-8"
        >
          {/* Google Login Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border border-neutral-300 text-neutral-black px-6 py-3 rounded-xl font-semibold text-sm shadow-sm hover:shadow-md transition-all duration-200 mb-6 flex items-center justify-center space-x-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
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
                Or sign in with email
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
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

            {/* Password */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full border-b border-neutral-300 bg-transparent px-3 py-3 text-sm placeholder:text-neutral-500 focus:outline-none focus:border-orange transition-colors font-poppins"
              required
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-orange border-neutral-300 rounded focus:ring-orange focus:ring-2"
                />
                <span className="text-sm text-neutral-grayDark font-poppins">
                  Remember me
                </span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-orange hover:text-orangeDark font-poppins transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange text-white px-6 py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-orangeDark hover:shadow-lg transition-all duration-200 mt-6"
            >
              Sign In
            </button>
          </form>

          {/* Signup Link */}
          <div className="text-center mt-6">
            <p className="text-neutral-grayDark font-poppins text-sm">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-orange hover:text-orangeDark font-semibold transition-colors"
              >
                Sign up instead
              </Link>
            </p>
          </div>
        </motion.div>

        {/* Demo Account Info */}
        <div className="mt-6 text-center">
          <p className="text-neutral-grayDark font-poppins text-xs">
            Want to try before you sign up?{" "}
            <Link
              href="/demo"
              className="text-orange hover:text-orangeDark font-semibold transition-colors"
            >
              Request a demo
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
