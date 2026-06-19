export default function Rankings() {
  const [activeTab, setActiveTab] = useState("trending");

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
      genres: ["Fantasy", "Action"]
    },
    {
      id: 2,
      slug: "rift-walker",
      title: "Rise of the Rift Walker",
      author: "Luofeng",
      cover: "https://placehold.co/300x450",
      rating: 4.8,
      views: 98543,
      status: "Completed",
      genres: ["Adventure", "Fantasy"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold">
            Rankings
          </h1>

          <p className="text-slate-500 mt-2">
            Discover the most popular stories on Rift Phrase.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            {[
              "trending",
              "top-rated",
              "most-viewed",
              "most-followed"
            ].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-2xl transition ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                {tab
                  .replace("-", " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </button>
            ))}
          </div>

        </div>

      </div>

      {/* Novel Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">

          {novels.map((novel) => (
            <NovelCard
              key={novel.id}
              {...novel}
            />
          ))}

        </div>

      </div>

    </div>
  );
}
