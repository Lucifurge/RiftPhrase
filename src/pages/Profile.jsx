import { FaBook, FaEye, FaHeart, FaPenFancy } from "react-icons/fa";
import NovelCard from "../components/novel/NovelCard";

export default function Profile() {
  // Temporary mock data
  const user = {
    username: "Rhapnel",
    displayName: "Rhapnel Rey",
    bio: "Author, dreamer, and creator of infinite worlds.",
    avatar: "https://placehold.co/200x200",
    banner: "https://placehold.co/1200x300",
    followers: 523,
    novels: 5,
    totalViews: 125000
  };

  const novels = [
    {
      id: 1,
      title: "The Void Emperor",
      author: "Rhapnel",
      cover: "https://placehold.co/300x450",
      rating: 4.9,
      views: 12000,
      status: "Ongoing",
      genres: ["Fantasy", "Action"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Banner */}
      <div className="relative h-72">

        <img
          src={user.banner}
          alt="Banner"
          className="w-full h-full object-cover"
        />

      </div>

      {/* Profile Card */}
      <div className="max-w-7xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-sm p-8 -mt-24 relative">

          <div className="flex flex-col md:flex-row gap-8">

            {/* Avatar */}
            <div>

              <img
                src={user.avatar}
                alt={user.username}
                className="w-40 h-40 rounded-full border-8 border-white object-cover"
              />

            </div>

            {/* User Info */}
            <div className="flex-1">

              <h1 className="text-4xl font-bold">
                {user.displayName}
              </h1>

              <p className="text-slate-500 mt-1">
                @{user.username}
              </p>

              <p className="mt-6 text-slate-700">
                {user.bio}
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-8">

                <div className="flex items-center gap-2">
                  <FaBook />
                  {user.novels} Novels
                </div>

                <div className="flex items-center gap-2">
                  <FaHeart />
                  {user.followers} Followers
                </div>

                <div className="flex items-center gap-2">
                  <FaEye />
                  {user.totalViews.toLocaleString()} Views
                </div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-8">

                <button className="px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
                  Follow
                </button>

                <button className="px-6 py-3 rounded-2xl border hover:bg-slate-50">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Author Novels */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="flex items-center gap-3 mb-8">

          <FaPenFancy className="text-2xl" />

          <h2 className="text-3xl font-bold">
            Published Novels
          </h2>

        </div>

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
