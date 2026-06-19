import NovelCard from "../novel/NovelCard";

const featuredNovels = [
  {
    id: "1",
    title: "The Void Emperor",
    author: "Rhapnel",
    cover: "https://placehold.co/300x450",
    rating: 4.9,
    views: 12543,
    status: "Ongoing",
    genres: ["Fantasy", "Action", "Adventure"]
  },
  {
    id: "2",
    title: "Rise of the Rift Walker",
    author: "Luofeng",
    cover: "https://placehold.co/300x450",
    rating: 4.7,
    views: 9876,
    status: "Completed",
    genres: ["Fantasy", "Isekai"]
  },
  {
    id: "3",
    title: "Golden Light Rebirth",
    author: "Aether",
    cover: "https://placehold.co/300x450",
    rating: 4.8,
    views: 20124,
    status: "Ongoing",
    genres: ["Romance", "Fantasy"]
  },
  {
    id: "4",
    title: "System of Infinity",
    author: "Void",
    cover: "https://placehold.co/300x450",
    rating: 4.6,
    views: 15200,
    status: "Hiatus",
    genres: ["System", "Action"]
  }
];

export default function FeaturedNovels() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-4xl font-bold">
            Featured Novels
          </h2>

          <p className="text-slate-500 mt-2">
            Discover stories selected by the Rift Phrase team.
          </p>
        </div>

        <button className="text-blue-600 font-semibold hover:underline">
          View All
        </button>

      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">

        {featuredNovels.map((novel) => (
          <NovelCard
            key={novel.id}
            {...novel}
          />
        ))}

      </div>

    </section>
  );
}
