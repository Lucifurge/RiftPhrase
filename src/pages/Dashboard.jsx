import { Link } from "react-router-dom";
import {
  FaBook,
  FaEye,
  FaHeart,
  FaPlus,
  FaPenFancy
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-slate-500 mt-2">
            Welcome back to Rift Phrase.
          </p>

        </div>

      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <FaBook className="text-3xl text-blue-600 mb-4" />

            <h3 className="text-3xl font-bold">
              0
            </h3>

            <p className="text-slate-500">
              Total Novels
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <FaEye className="text-3xl text-yellow-500 mb-4" />

            <h3 className="text-3xl font-bold">
              0
            </h3>

            <p className="text-slate-500">
              Total Views
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <FaHeart className="text-3xl text-red-500 mb-4" />

            <h3 className="text-3xl font-bold">
              0
            </h3>

            <p className="text-slate-500">
              Followers
            </p>

          </div>

          <div className="bg-white rounded-3xl p-6 shadow-sm">

            <FaPenFancy className="text-3xl text-green-500 mb-4" />

            <h3 className="text-3xl font-bold">
              0
            </h3>

            <p className="text-slate-500">
              Chapters
            </p>

          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Quick Actions
          </h2>

          <div className="flex flex-wrap gap-4">

            <Link
              to="/workspace/create"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaPlus />
              Create Novel
            </Link>

            <Link
              to="/workspace"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border hover:bg-slate-50 transition"
            >
              <FaBook />
              My Workspace
            </Link>

            <Link
              to="/library"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border hover:bg-slate-50 transition"
            >
              <FaHeart />
              My Library
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
