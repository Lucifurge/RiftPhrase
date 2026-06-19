```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

import { useAuth } from "../../contexts/AuthContext";
import { logout } from "../../services/authService";

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
    <nav className="bg-white border-b sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600"
          >
            Rift Phrase
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">

            <Link
              to="/explore"
              className="hover:text-blue-600"
            >
              Explore
            </Link>

            {user ? (
              <>
                <Link
                  to="/dashboard"
                  className="hover:text-blue-600"
                >
                  Dashboard
                </Link>

                <Link
                  to="/library"
                  className="hover:text-blue-600"
                >
                  Library
                </Link>

                <Link
                  to={`/profile/${user.user_metadata?.username || "me"}`}
                  className="hover:text-blue-600"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="px-5 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="hover:text-blue-600"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col gap-4 mt-6 pb-4">

            <Link to="/explore">
              Explore
            </Link>

            {user ? (
              <>
                <Link to="/dashboard">
                  Dashboard
                </Link>

                <Link to="/library">
                  Library
                </Link>

                <Link
                  to={`/profile/${user.user_metadata?.username || "me"}`}
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="text-left text-red-500"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login">
                  Login
                </Link>

                <Link to="/register">
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
```
