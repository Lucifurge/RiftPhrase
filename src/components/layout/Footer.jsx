import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Rift Phrase
            </h2>

            <p className="text-slate-400">
              Open a Rift. Discover Infinite Stories.
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Developed by Void Novels Inc.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Explore
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/explore" className="hover:text-blue-400">
                  Explore Novels
                </Link>
              </li>

              <li>
                <Link to="/rankings" className="hover:text-blue-400">
                  Rankings
                </Link>
              </li>

              <li>
                <Link to="/latest" className="hover:text-blue-400">
                  Latest Updates
                </Link>
              </li>

              <li>
                <Link to="/genres" className="hover:text-blue-400">
                  Genres
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Company
            </h3>

            <ul className="space-y-3">
              <li>
                <Link to="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-blue-400">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link to="/privacy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Community
            </h3>

            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:text-blue-400"
                >
                  Discord
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-400"
                >
                  Facebook
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-blue-400"
                >
                  X / Twitter
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500">

          © {new Date().getFullYear()} Void Novels Inc. All rights reserved.

        </div>

      </div>
    </footer>
  );
}
