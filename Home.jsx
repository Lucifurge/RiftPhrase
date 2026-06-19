// src/pages/Home.jsx

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-600 via-sky-400 to-yellow-400 bg-clip-text text-transparent">
              Rift Phrase
            </span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-slate-600 mb-8">
            Open a Rift. Discover Infinite Stories.
            Read, write, and explore thousands of worlds created by passionate authors.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
              Start Reading
            </button>

            <button className="px-8 py-4 rounded-xl border border-yellow-400 text-yellow-600 font-semibold hover:bg-yellow-50 transition">
              Become an Author
            </button>
          </div>
        </div>
      </section>

      {/* Featured Novels */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            🌟 Featured Novels
          </h2>

          <button className="text-blue-600 hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {[1,2,3,4,5,6].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden"
            >
              <div className="h-64 bg-slate-200"></div>

              <div className="p-4">
                <h3 className="font-semibold truncate">
                  Novel Title
                </h3>

                <p className="text-sm text-slate-500">
                  Author Name
                </p>

                <p className="text-yellow-500 mt-2">
                  ★ 4.8
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Latest Updates */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-8">
            ⚡ Latest Updates
          </h2>

          <div className="space-y-4">

            {[1,2,3,4,5].map((item) => (
              <div
                key={item}
                className="bg-white p-5 rounded-xl shadow-sm flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold">
                    The Void Emperor
                  </h3>

                  <p className="text-slate-500">
                    Chapter {item * 10} released
                  </p>
                </div>

                <span className="text-sm text-slate-400">
                  2 hours ago
                </span>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Genres */}
      <section className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-8">
          📚 Explore Genres
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">

          {[
            "Fantasy",
            "Action",
            "Romance",
            "Adventure",
            "Sci-Fi",
            "Comedy",
            "Drama",
            "Mystery",
            "Horror",
            "System",
            "Cultivation",
            "Isekai"
          ].map((genre) => (
            <button
              key={genre}
              className="p-4 rounded-xl border bg-white hover:bg-blue-50 hover:border-blue-500 transition"
            >
              {genre}
            </button>
          ))}

        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-sky-500 py-20">
        <div className="max-w-4xl mx-auto text-center text-white px-6">

          <h2 className="text-4xl font-bold mb-4">
            Ready to Share Your Story?
          </h2>

          <p className="mb-8 text-lg">
            Join Rift Phrase and become part of a growing universe of readers and writers.
          </p>

          <button className="px-8 py-4 rounded-xl bg-yellow-400 text-slate-900 font-bold hover:bg-yellow-300 transition">
            Start Writing Today
          </button>

        </div>
      </section>

      {/* Footer */}
      <Footer />

    </div>
  );
}
