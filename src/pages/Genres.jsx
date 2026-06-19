
import { useState } from "react";
import NovelCard from "../components/novel/NovelCard";

export default function Genres() {
  const genres = [
    "Fantasy",
    "Action",
    "Adventure",
    "Romance",
    "Comedy",
    "Drama",
    "Sci-Fi",
    "Mystery",
    "Horror",
    "Isekai",
    "Cultivation",
    "System"
  ];

  const [selectedGenre, setSelectedGenre] =
    useState("Fantasy");

  // Temporary Mock Data
  const novels = [
    {
      id: 1,
      slug: "the-void-emperor",
      title: "The Void Emperor",
      author: "Rhapnel",
      cover: "https://placehold.co/300x450",
      rating: 4.9,
      views: 125432,
      status: "Ongoing",
      genres: ["Fantasy", "Action"]
    },
    {
      id: 2,
      slug: "rise-of-the-rift-walker",
      title: "Rise of the Rift Walker",
      author: "Luofeng",
      cover: "https://placehold.co/300x450",
      rating: 4.8,
      views: 87543,
      status: "Ongoing",
      genres: ["Fantasy", "Adventure"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold">
            Genres
          </h1>

          <p className="text-slate-500 mt-2">
            Explore stories by genre.
          </p>

        </div>

      </div>

      {/* Genre Selector */}
      <div className="max-w-7xl mx-auto px-6 py-8">

        <div className="flex flex-wrap gap-3">

          {genres.map((genre) => (
            <button
              key={genre}
              onClick={() =>
                setSelectedGenre(genre)
              }
              className={`px-5 py-3 rounded-2xl transition ${
                selectedGenre === genre
                  ? "bg-blue-600 text-white"
                  : "bg-white border"
              }`}
            >
              {genre}
            </button>
          ))}

        </div>

      </div>

      {/* Novel Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <h2 className="text-3xl font-bold mb-8">
          {selectedGenre}
        </h2>

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
```
