import { Link } from "react-router-dom";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">

      <div className="max-w-xl text-center">

        {/* Icon */}
        <div className="w-32 h-32 mx-auto rounded-full bg-red-100 flex items-center justify-center">

          <FaExclamationTriangle
            className="text-red-500 text-6xl"
          />

        </div>

        {/* Title */}
        <h1 className="text-7xl font-bold mt-8">
          404
        </h1>

        <h2 className="text-3xl font-bold mt-4">
          Page Not Found
        </h2>

        <p className="text-slate-500 mt-4 text-lg">
          The page you are looking for does not exist
          or may have been moved.
        </p>

        {/* Actions */}
        <div className="flex justify-center gap-4 mt-10">

          <Link
            to="/"
            className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaHome />
            Back Home
          </Link>

          <Link
            to="/explore"
            className="px-8 py-4 rounded-2xl border hover:bg-slate-100 transition"
          >
            Explore Novels
          </Link>

        </div>

      </div>

    </div>
  );
}
