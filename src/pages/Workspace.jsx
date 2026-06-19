import { Link } from "react-router-dom";
import {
  FaBook,
  FaPlus,
  FaEdit,
  FaChartLine,
  FaEye
} from "react-icons/fa";

export default function Workspace() {
  // Temporary mock data
  const novels = [
    {
      id: 1,
      title: "The Void Emperor",
      status: "Ongoing",
      views: 12543,
      chapters: 124
    },
    {
      id: 2,
      title: "Rise of the Rift Walker",
      status: "Completed",
      views: 8754,
      chapters: 87
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

            <div>
              <h1 className="text-4xl font-bold">
                Author Workspace
              </h1>

              <p className="text-slate-500 mt-2">
                Manage your novels and chapters.
              </p>
            </div>

            <Link
              to="/workspace/create"
              className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              <FaPlus />
              New Novel
            </Link>

          </div>

        </div>

      </div>

      {/* Novel List */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid gap-6">

          {novels.map((novel) => (
            <div
              key={novel.id}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div>

                  <h2 className="text-2xl font-bold">
                    {novel.title}
                  </h2>

                  <div className="flex flex-wrap gap-6 mt-4 text-slate-500">

                    <span className="flex items-center gap-2">
                      <FaBook />
                      {novel.chapters} Chapters
                    </span>

                    <span className="flex items-center gap-2">
                      <FaEye />
                      {novel.views.toLocaleString()} Views
                    </span>

                    <span className="flex items-center gap-2">
                      <FaChartLine />
                      {novel.status}
                    </span>

                  </div>

                </div>

                <div className="flex gap-3">

                  <Link
                    to={`/workspace/novel/${novel.id}`}
                    className="px-5 py-3 rounded-2xl border hover:bg-slate-50 transition"
                  >
                    Manage
                  </Link>

                  <Link
                    to={`/workspace/chapter/${novel.id}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FaEdit />
                    Write Chapter
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
