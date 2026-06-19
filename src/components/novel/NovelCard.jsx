
import { Link } from "react-router-dom";
import {
  FaEye,
  FaStar,
  FaBookOpen
} from "react-icons/fa";

export default function NovelCard({
  id,
  slug,
  title,
  author,
  cover,
  rating = 0,
  views = 0,
  status = "Ongoing",
  genres = []
}) {
  return (
    <Link
      to={`/novel/${slug || id}`}
      className="group block"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">

        {/* Cover */}
        <div className="relative overflow-hidden">

          <img
            src={
              cover ||
              "https://placehold.co/300x450?text=No+Cover"
            }
            alt={title}
            className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition duration-300"
          />

          <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 text-white text-xs">
            {status}
          </div>

        </div>

        {/* Content */}
        <div className="p-4">

          <h3 className="font-bold text-lg line-clamp-2 min-h-[56px]">
            {title}
          </h3>

          <p className="text-slate-500 text-sm mt-1">
            by {author}
          </p>

          {/* Stats */}
          <div className="flex items-center justify-between mt-4 text-sm">

            <div className="flex items-center gap-2">

              <FaStar className="text-yellow-500" />

              <span>
                {rating.toFixed(1)}
              </span>

            </div>

            <div className="flex items-center gap-2">

              <FaEye className="text-blue-500" />

              <span>
                {views.toLocaleString()}
              </span>

            </div>

          </div>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mt-4">

            {genres.slice(0, 3).map((genre) => (
              <span
                key={genre}
                className="px-2 py-1 rounded-full bg-blue-50 text-blue-600 text-xs"
              >
                {genre}
              </span>
            ))}

          </div>

          {/* Read Button */}
          <button
            className="w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold hover:opacity-90 transition"
          >
            <FaBookOpen />
            Read Now
          </button>

        </div>

      </div>
    </Link>
  );
}

