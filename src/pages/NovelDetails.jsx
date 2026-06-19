
import { Link, useParams } from "react-router-dom";
import {
  FaStar,
  FaEye,
  FaHeart,
  FaBookOpen,
  FaUser
} from "react-icons/fa";

import ChapterList from "../components/novel/ChapterList";
import CommentsSection from "../components/novel/CommentsSection";

export default function NovelDetails() {
  const { slug } = useParams();

  // Temporary Data
  const novel = {
    id: 1,
    slug,
    title: "The Void Emperor",
    author: "Rhapnel",
    cover: "https://placehold.co/400x600",
    banner: "https://placehold.co/1200x300",
    synopsis:
      "In the endless void, a forgotten soul awakens and begins a journey that will reshape countless worlds.",

    status: "Ongoing",
    language: "English",

    rating: 4.9,
    views: 125432,
    followers: 3210,

    genres: [
      "Fantasy",
      "Action",
      "Adventure",
      "Cultivation"
    ]
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Banner */}
      <div className="h-72 relative">

        <img
          src={novel.banner}
          alt={novel.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm p-8 -mt-32 relative">

          <div className="grid lg:grid-cols-[300px_1fr] gap-10">

            {/* Cover */}
            <div>

              <img
                src={novel.cover}
                alt={novel.title}
                className="rounded-3xl shadow-lg w-full"
              />

            </div>

            {/* Info */}
            <div>

              <h1 className="text-5xl font-bold">
                {novel.title}
              </h1>

              <Link
                to={`/profile/${novel.author}`}
                className="inline-flex items-center gap-2 mt-4 text-blue-600"
              >
                <FaUser />
                {novel.author}
              </Link>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-8">

                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  {novel.rating}
                </div>

                <div className="flex items-center gap-2">
                  <FaEye className="text-blue-500" />
                  {novel.views.toLocaleString()}
                </div>

                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  {novel.followers.toLocaleString()}
                </div>

              </div>

              {/* Genres */}
              <div className="flex flex-wrap gap-3 mt-8">

                {novel.genres.map((genre) => (
                  <span
                    key={genre}
                    className="px-4 py-2 rounded-full bg-blue-50 text-blue-600"
                  >
                    {genre}
                  </span>
                ))}

              </div>

              {/* Synopsis */}
              <div className="mt-10">

                <h2 className="text-2xl font-bold mb-4">
                  Synopsis
                </h2>

                <p className="leading-8 text-slate-700">
                  {novel.synopsis}
                </p>

              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-10">

                <Link
                  to={`/read/${novel.id}`}
                  className="px-8 py-4 rounded-2xl bg-blue-600 text-white font-semibold flex items-center gap-3"
                >
                  <FaBookOpen />
                  Start Reading
                </Link>

                <button
                  className="px-8 py-4 rounded-2xl border"
                >
                  Follow
                </button>

                <button
                  className="px-8 py-4 rounded-2xl border"
                >
                  Add to Library
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* Chapters */}
        <div className="mt-10">

          <ChapterList />

        </div>

        {/* Comments */}
        <div className="mt-10 mb-16">

          <CommentsSection />

        </div>

      </div>

    </div>
  );
}
```
