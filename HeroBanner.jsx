import { Link } from "react-router-dom";
import { FaBookOpen, FaPenNib, FaSearch } from "react-icons/fa";

export default function HeroBanner() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50 to-white"></div>

      {/* Decorative Blur Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-28">

        <div className="text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border shadow-sm mb-8">

            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse"></span>

            <span className="text-sm font-medium text-slate-600">
              Powered by Void Novels Inc.
            </span>

          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

            Open a{" "}

            <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-yellow-400 bg-clip-text text-transparent">
              Rift
            </span>

            <br />

            Discover Infinite Stories

          </h1>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-8 text-lg text-slate-600">

            Dive into thousands of light novels, web novels,
            fantasy worlds, and original stories created by
            passionate authors around the globe.

          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto mt-12">

            <div className="flex items-center bg-white rounded-2xl shadow-xl border p-3">

              <FaSearch className="text-slate-400 ml-3" />

              <input
                type="text"
                placeholder="Search novels, authors, genres..."
                className="flex-1 px-4 py-3 outline-none bg-transparent"
              />

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition">
                Search
              </button>

            </div>

          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-5 mt-12">

            <Link
              to="/explore"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              <FaBookOpen />
              Start Reading
            </Link>

            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl border-2 border-yellow-400 text-yellow-600 font-semibold hover:bg-yellow-50 transition"
            >
              <FaPenNib />
              Become an Author
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                0+
              </h2>

              <p className="text-slate-500">
                Novels
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                0+
              </h2>

              <p className="text-slate-500">
                Authors
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                0+
              </h2>

              <p className="text-slate-500">
                Chapters
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-600">
                0+
              </h2>

              <p className="text-slate-500">
                Readers
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
