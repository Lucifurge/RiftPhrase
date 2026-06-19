// src/components/layout/Navbar.jsx

import { Link } from "react-router-dom";
import { FaSearch, FaBell, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-yellow-400 flex items-center justify-center text-white font-bold text-lg">
              RP
            </div>

            <div>
              <h1 className="font-bold text-xl">
                Rift Phrase
              </h1>

              <p className="text-xs text-slate-500">
                Infinite Stories
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="hover:text-blue-600 transition"
            >
              Home
            </Link>

            <Link
              to="/explore"
              className="hover:text-blue-600 transition"
            >
              Explore
            </Link>

            <Link
              to="/rankings"
              className="hover:text-blue-600 transition"
            >
              Rankings
            </Link>

            <Link
              to="/library"
              className="hover:text-blue-600 transition"
            >
              Library
            </Link>

            <Link
              to="/authors"
              className="hover:text-blue-600 transition"
            >
              Authors
            </Link>

          </nav>

          {/* Search */}
          <div className="hidden md:flex items-center bg-slate-100 rounded-xl px-4 py-2 w-72">

            <FaSearch className="text-slate-400" />

            <input
              type="text"
              placeholder="Search novels..."
              className="bg-transparent outline-none ml-3 w-full"
            />

          </div>

          {/* User Actions */}
          <div className="flex items-center gap-4">

            {/* Notifications */}
            <button className="relative p-2 rounded-xl hover:bg-slate-100 transition">
              <FaBell />

              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                3
              </span>
            </button>

            {/* Profile */}
            <button className="p-2 rounded-xl hover:bg-slate-100 transition">
              <FaUser />
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="hidden md:block px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
            >
              Login
            </Link>

            {/* Register */}
            <Link
              to="/register"
              className="hidden md:block px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Register
            </Link>

          </div>

        </div>

      </div>

    </header>
  );
}
