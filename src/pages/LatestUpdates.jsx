
import NovelCard from "../components/novel/NovelCard";

export default function LatestUpdates() {
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
      genres: ["Fantasy", "Action"],
      latestChapter: "Chapter 125",
      updatedAt: "10 minutes ago"
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
      genres: ["Adventure", "Fantasy"],
      latestChapter: "Chapter 78",
      updatedAt: "1 hour ago"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold">
            Latest Updates
          </h1>

          <p className="text-slate-500 mt-2">
            Stay up to date with newly released chapters.
          </p>

        </div>

      </div>

      {/* Updates List */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="space-y-6">

          {novels.map((novel) => (
            <div
              key={novel.id}
              className="bg-white rounded-3xl shadow-sm p-6"
            >

              <div className="flex flex-col lg:flex-row gap-6">

                <img
                  src={novel.cover}
                  alt={novel.title}
                  className="w-32 rounded-2xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {novel.title}
                  </h2>

                  <p className="text-slate-500 mt-1">
                    by {novel.author}
                  </p>

                  <div className="mt-4">

                    <p className="font-semibold">
                      {novel.latestChapter}
                    </p>

                    <p className="text-slate-500 text-sm">
                      Updated {novel.updatedAt}
                    </p>

                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">

                    {novel.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm"
                      >
                        {genre}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

