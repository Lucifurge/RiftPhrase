id="4e8gsl"
import { Link } from "react-router-dom";
import {
  FaEye,
  FaClock
} from "react-icons/fa";

export default function ChapterList() {
  // Temporary Data
  const chapters = [
    {
      id: 1,
      number: 1,
      title: "Awakening",
      views: 5421,
      created_at: "2 days ago"
    },
    {
      id: 2,
      number: 2,
      title: "The Rift Opens",
      views: 4980,
      created_at: "1 day ago"
    },
    {
      id: 3,
      number: 3,
      title: "A New World",
      views: 4200,
      created_at: "12 hours ago"
    }
  ];

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h2 className="text-3xl font-bold">
          Chapters
        </h2>

        <span className="text-slate-500">
          {chapters.length} Chapters
        </span>

      </div>

      {/* Chapter List */}
      <div className="space-y-4">

        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={`/read/${chapter.id}`}
            className="block border rounded-2xl p-5 hover:bg-slate-50 transition"
          >

            <div className="flex flex-col md:flex-row md:justify-between gap-4">

              <div>

                <h3 className="font-bold text-lg">
                  Chapter {chapter.number}
                </h3>

                <p className="text-slate-600 mt-1">
                  {chapter.title}
                </p>

              </div>

              <div className="flex gap-6 text-sm text-slate-500">

                <div className="flex items-center gap-2">
                  <FaEye />
                  {chapter.views.toLocaleString()}
                </div>

                <div className="flex items-center gap-2">
                  <FaClock />
                  {chapter.created_at}
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>

    </div>
  );
}

