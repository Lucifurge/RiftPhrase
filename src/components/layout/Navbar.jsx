import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../services/authService";

import logo from "/logo.png";

export default function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <img
              src={logo}
              alt="Rift Phrase"
              className="h-14 w-14 object-contain"
            />

            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-yellow-300 bg-clip-text text-transparent">
              Rift Phrase
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              to="/explore"
              className="text-slate-200 hover:text-cyan-400 transition"
            >
              Explore
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-slate-200 hover:text-cyan-400 transition"
                >
                  Dashboard
                </Link>

                <Link
                  to="/library"
                  className="text-slate-200 hover:text-cyan-400 transition"
                >
                  Library
                </Link>

                <Link
                  to={`/profile/${user.user_metadata?.username || "me"}`}
                  className="text-slate-200 hover:text-cyan-400 transition"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-xl bg-red-600 text-white hover:bg-red-700 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate-200 hover:text-cyan-400 transition"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 transition"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-6 pb-4 border-t border-slate-800 pt-4">

            <Link
              to="/explore"
              className="text-slate-200"
            >
              Explore
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-slate-200"
                >
                  Dashboard
                </Link>

                <Link
                  to="/library"
                  className="text-slate-200"
                >
                  Library
                </Link>

                <Link
                  to={`/profile/${user.user_metadata?.username || "me"}`}
                  className="text-slate-200"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-left text-red-400"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-slate-200"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="text-slate-200"
                >
                  Register
                </Link>
              </>
            )}

          </div>
        )}

      </div>

    </nav>
  );
}
