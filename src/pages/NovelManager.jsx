import { Link, useParams } from "react-router-dom";
import {
  FaEdit,
  FaPlus,
  FaChartBar,
  FaEye,
  FaBook
} from "react-icons/fa";

export default function NovelManager() {
  const { id } = useParams();

  // Temporary mock data
  const novel = {
    id,
    title: "The Void Emperor",
    status: "Ongoing",
    views: 12453,
    chapters: 124,
    followers: 523
  };

  const chapters = [
    {
      id: 1,
      title: "Chapter 1 - Awakening",
      published: true
    },
    {
      id: 2,
      title: "Chapter 2 - The Rift",
      published: true
    },
    {
      id: 3,
      title: "Chapter 3 - New World",
      published: false
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="bg-white rounded-3xl p-8 shadow-sm mb-8">

          <h1 className="text-4xl font-bold">
            {novel.title}
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your novel.
          </p>

          <div className="flex flex-wrap gap-6 mt-6">

            <span className="flex items-center gap-2">
              <FaBook />
              {novel.chapters} Chapters
            </span>

            <span className="flex items-center gap-2">
              <FaEye />
              {novel.views.toLocaleString()} Views
            </span>

            <span className="flex items-center gap-2">
              <FaChartBar />
              {novel.followers} Followers
            </span>

          </div>

          <div className="flex flex-wrap gap-4 mt-8">

            <Link
              to={`/workspace/${novel.id}/edit`}
              className="px-5 py-3 rounded-2xl border hover:bg-slate-50"
            >
              <FaEdit className="inline mr-2" />
              Edit Novel
            </Link>

            <Link
              to={`/workspace/${novel.id}/new-chapter`}
              className="px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
            >
              <FaPlus className="inline mr-2" />
              New Chapter
            </Link>

          </div>

        </div>

        {/* Chapters */}
        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Chapters
          </h2>

          <div className="space-y-4">

            {chapters.map((chapter) => (
              <div
                key={chapter.id}
                className="border rounded-2xl p-5 flex justify-between items-center"
              >

                <div>
                  <h3 className="font-semibold">
                    {chapter.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {chapter.published
                      ? "Published"
                      : "Draft"}
                  </p>
                </div>

                <Link
                  to={`/workspace/chapter/${chapter.id}`}
                  className="px-4 py-2 rounded-xl border hover:bg-slate-50"
                >
                  Edit
                </Link>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
