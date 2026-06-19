import { Link } from "react-router-dom";

const genres = [
  { name: "Fantasy", icon: "🧙" },
  { name: "Action", icon: "⚔️" },
  { name: "Adventure", icon: "🗺️" },
  { name: "Romance", icon: "❤️" },
  { name: "Comedy", icon: "😂" },
  { name: "Drama", icon: "🎭" },
  { name: "Sci-Fi", icon: "🚀" },
  { name: "Mystery", icon: "🔎" },
  { name: "Horror", icon: "👻" },
  { name: "Isekai", icon: "🌌" },
  { name: "System", icon: "💻" },
  { name: "Cultivation", icon: "☯️" },
  { name: "Martial Arts", icon: "🥋" },
  { name: "Slice of Life", icon: "🏡" },
  { name: "School Life", icon: "🎓" },
  { name: "Supernatural", icon: "✨" }
];

export default function GenreGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="text-center mb-12">

        <h2 className="text-4xl font-bold">
          Explore Genres
        </h2>

        <p className="text-slate-500 mt-3">
          Find your next adventure through your favorite genres.
        </p>

      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">

        {genres.map((genre) => (
          <Link
            key={genre.name}
            to={`/genre/${genre.name.toLowerCase()}`}
            className="group bg-white border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300"
          >

            <div className="text-center">

              <div className="text-4xl mb-4">
                {genre.icon}
              </div>

              <h3 className="font-semibold group-hover:text-blue-600 transition">
                {genre.name}
              </h3>

            </div>

          </Link>
        ))}

      </div>

    </section>
  );
}
