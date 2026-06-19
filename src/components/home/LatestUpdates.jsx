import { Link } from "react-router-dom";

const latestUpdates = [
  {
    id: 1,
    novelId: "1",
    title: "The Void Emperor",
    chapter: "Chapter 124: The Golden Rift",
    author: "Rhapnel",
    time: "5 minutes ago"
  },
  {
    id: 2,
    novelId: "2",
    title: "Rise of the Rift Walker",
    chapter: "Chapter 56: Return to Earth",
    author: "Luofeng",
    time: "20 minutes ago"
  },
  {
    id: 3,
    novelId: "3",
    title: "System of Infinity",
    chapter: "Chapter 89: The New World",
    author: "Void",
    time: "1 hour ago"
  },
  {
    id: 4,
    novelId: "4",
    title: "Golden Light Rebirth",
    chapter: "Chapter 201: Divine Awakening",
    author: "Aether",
    time: "3 hours ago"
  },
  {
    id: 5,
    novelId: "5",
    title: "Chronicles of the Lost Mage",
    chapter: "Chapter 12: The Academy",
    author: "Unknown",
    time: "5 hours ago"
  }
];

export default function LatestUpdates() {
  return (
    <section className="bg-slate-50 py-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              Latest Updates
            </h2>

            <p className="text-slate-500 mt-2">
              Stay updated with newly released chapters.
            </p>
          </div>

          <Link
            to="/latest"
            className="text-blue-600 font-semibold hover:underline"
          >
            View All
          </Link>

        </div>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          {latestUpdates.map((update, index) => (
            <Link
              key={update.id}
              to={`/novel/${update.novelId}`}
              className={`block p-6 hover:bg-slate-50 transition ${
                index !== latestUpdates.length - 1
                  ? "border-b border-slate-100"
                  : ""
              }`}
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">

                <div>

                  <h3 className="font-bold text-lg hover:text-blue-600">
                    {update.title}
                  </h3>

                  <p className="text-slate-600">
                    {update.chapter}
                  </p>

                  <p className="text-sm text-slate-400 mt-1">
                    by {update.author}
                  </p>

                </div>

                <span className="text-sm text-slate-400">
                  {update.time}
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>

    </section>
  );
}
