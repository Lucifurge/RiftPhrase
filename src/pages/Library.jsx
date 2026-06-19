import { useState } from "react";
import NovelCard from "../components/novel/NovelCard";

export default function Library() {
  const [activeTab, setActiveTab] = useState("bookmarks");

  // Temporary mock data
  const novels = [
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
            My Library
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your reading journey.
          </p>

        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">

          <button
            onClick={() => setActiveTab("bookmarks")}
            className={`px-6 py-3 rounded-2xl transition ${
              activeTab === "bookmarks"
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            Bookmarks
          </button>

          <button
            onClick={() => setActiveTab("history")}
            className={`px-6 py-3 rounded-2xl transition ${
              activeTab === "history"
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            Reading History
          </button>

          <button
            onClick={() => setActiveTab("following")}
            className={`px-6 py-3 rounded-2xl transition ${
              activeTab === "following"
                ? "bg-blue-600 text-white"
                : "bg-white border"
            }`}
          >
            Following
          </button>

        </div>

        {/* Novel Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {novels.map((novel) => (
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
