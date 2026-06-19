import { useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";
import NovelCard from "../components/novel/NovelCard";

export default function SearchResults() {
  const [query, setQuery] = useState("");

  // Temporary mock data
  const results = [
    {
      id: 1,
      title: "The Void Emperor",
      author: "Rhapnel",
      cover: "https://placehold.co/300x450",
      rating: 4.9,
      views: 12543,
      status: "Ongoing",
      genres: ["Fantasy", "Action"]
    },
    {
      id: 2,
      title: "Rise of the Rift Walker",
      author: "Luofeng",
      cover: "https://placehold.co/300x450",
      rating: 4.7,
      views: 9876,
      status: "Completed",
      genres: ["Adventure", "Fantasy"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold">
            Search
          </h1>

          <p className="text-slate-500 mt-2">
            Discover stories across Rift Phrase.
          </p>

          {/* Search Bar */}
          <div className="mt-8 flex gap-3">

            <div className="flex items-center flex-1 bg-slate-100 rounded-2xl px-4 py-4">

              <FaSearch className="text-slate-400" />

              <input
                type="text"
                placeholder="Search novels, authors..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="bg-transparent outline-none ml-3 flex-1"
              />

            </div>

            <button className="px-6 rounded-2xl border hover:bg-slate-100">
              <FaFilter />
            </button>

          </div>

        </div>

      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <h2 className="text-2xl font-bold mb-8">
          Search Results
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {results.map((novel) => (
            <NovelCard
              key={novel.id}
              {...novel}
            />
          ))}

        </div>

      </div>

    </div>
  );
}
