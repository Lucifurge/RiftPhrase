import { Link } from "react-router-dom";
import { FaEye, FaStar } from "react-icons/fa";

export default function NovelCard({
  id,
  cover,
  title,
  author,
  rating = 0,
  views = 0,
  status = "Ongoing",
  genres = []
}) {
  return (
    <Link
      to={`/novel/${id}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition duration-300 border border-slate-100"
    >

      {/* Cover */}
      <div className="relative overflow-hidden">

        <img
          src={
            cover ||
            "https://placehold.co/300x450/e2e8f0/64748b?text=No+Cover"
          }
          alt={title}
          className="w-full aspect-[2/3] object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-3 right-3">

          <span className={`
            px-3 py-1 rounded-full text-xs font-semibold text-white

            ${status === "Completed"
              ? "bg-green-500"
              : status === "Hiatus"
              ? "bg-yellow-500"
              : status === "Dropped"
              ? "bg-red-500"
              : "bg-blue-600"}
          `}>

            {status}

          </span>

        </div>

      </div>

      {/* Content */}
      <div className="p-4">

        {/* Title */}
        <h3 className="font-bold text-lg line-clamp-2 group-hover:text-blue-600 transition">
          {title}
        </h3>

        {/* Author */}
        <p className="text-sm text-slate-500 mt-1 truncate">
          by {author}
        </p>

        {/* Genres */}
        <div className="flex flex-wrap gap-2 mt-3">

          {genres.slice(0, 3).map((genre) => (
            <span
              key={genre}
              className="px-2 py-1 rounded-lg bg-blue-50 text-blue-600 text-xs"
            >
              {genre}
            </span>
          ))}

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4">

          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="text-sm font-medium">
              {rating}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <FaEye />
            <span>{views.toLocaleString()}</span>
          </div>

        </div>

      </div>

    </Link>
  );
}
