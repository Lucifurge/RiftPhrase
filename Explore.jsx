import { useState } from "react";
import NovelCard from "../components/novel/NovelCard";
import { FaSearch } from "react-icons/fa";

const mockNovels = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  title: `Novel ${i + 1}`,
  author: "Rift Author",
  cover: "https://placehold.co/300x450",
  rating: (Math.random() * 2 + 3).toFixed(1),
  views: Math.floor(Math.random() * 100000),
  status: ["Ongoing", "Completed", "Hiatus"][
    Math.floor(Math.random() * 3)
  ],
  genres: ["Fantasy", "Action", "Adventure"]
}));

export default function Explore() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-12">

          <h1 className="text-5xl font-bold mb-4">
            Explore Novels
          </h1>

          <p className="text-slate-500">
            Discover your next favorite story.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-2xl">

            <div className="flex items-center bg-slate-100 rounded-2xl p-3">

              <FaSearch className="text-slate-400 ml-3" />

              <input
                type="text"
                placeholder="Search novels..."
                className="flex-1 px-4 py-3 bg-transparent outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

            </div>

          </div>

        </div>

      </section>

      {/* Filters */}
      <section className="max-w-7xl mx-auto px-6 py-8">

        <div className="bg-white rounded-3xl p-6 shadow-sm mb-8">

          <div className="grid md:grid-cols-4 gap-4">

            {/* Genre */}
            <select className="border rounded-xl p-3">
              <option>All Genres</option>
              <option>Fantasy</option>
              <option>Action</option>
              <option>Romance</option>
              <option>Adventure</option>
              <option>Isekai</option>
            </select>

            {/* Status */}
            <select className="border rounded-xl p-3">
              <option>All Status</option>
              <option>Ongoing</option>
              <option>Completed</option>
              <option>Hiatus</option>
            </select>

            {/* Sort */}
            <select className="border rounded-xl p-3">
              <option>Latest</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Most Viewed</option>
            </select>

            {/* Language */}
            <select className="border rounded-xl p-3">
              <option>All Languages</option>
              <option>English</option>
              <option>Filipino</option>
              <option>Japanese</option>
            </select>

          </div>

        </div>

        {/* Novel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

          {mockNovels.map((novel) => (
            <NovelCard
              key={novel.id}
              {...novel}
            />
          ))}

        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-3 mt-12">

          <button className="px-5 py-3 rounded-xl border hover:bg-slate-100">
            Previous
          </button>

          <button className="px-5 py-3 rounded-xl bg-blue-600 text-white">
            1
          </button>

          <button className="px-5 py-3 rounded-xl border hover:bg-slate-100">
            2
          </button>

          <button className="px-5 py-3 rounded-xl border hover:bg-slate-100">
            3
          </button>

          <button className="px-5 py-3 rounded-xl border hover:bg-slate-100">
            Next
          </button>

        </div>

      </section>

    </div>
  );
}
