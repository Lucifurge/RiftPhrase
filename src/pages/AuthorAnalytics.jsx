import {
  FaBook,
  FaEye,
  FaHeart,
  FaStar,
  FaChartLine
} from "react-icons/fa";

export default function AuthorAnalytics() {

  // Temporary Mock Data
  const stats = {
    totalNovels: 5,
    totalViews: 245678,
    totalFollowers: 12450,
    averageRating: 4.8
  };

  const topNovels = [
    {
      id: 1,
      title: "The Void Emperor",
      views: 125432,
      followers: 3200,
      rating: 4.9
    },
    {
      id: 2,
      title: "Rise of the Rift Walker",
      views: 98543,
      followers: 2541,
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <h1 className="text-5xl font-bold">
            Author Analytics
          </h1>

          <p className="text-slate-500 mt-2">
            Track your growth and understand your readers.
          </p>

        </div>

      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaBook className="text-4xl text-blue-600 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.totalNovels}
            </h2>

            <p className="text-slate-500 mt-2">
              Total Novels
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaEye className="text-4xl text-sky-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.totalViews.toLocaleString()}
            </h2>

            <p className="text-slate-500 mt-2">
              Total Views
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaHeart className="text-4xl text-red-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.totalFollowers.toLocaleString()}
            </h2>

            <p className="text-slate-500 mt-2">
              Followers
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaStar className="text-4xl text-yellow-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.averageRating}
            </h2>

            <p className="text-slate-500 mt-2">
              Average Rating
            </p>

          </div>

        </div>

      </div>

      {/* Top Novels */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-8">

            <FaChartLine className="text-3xl text-blue-600" />

            <h2 className="text-3xl font-bold">
              Top Performing Novels
            </h2>

          </div>

          <div className="space-y-5">

            {topNovels.map((novel) => (
              <div
                key={novel.id}
                className="border rounded-2xl p-6"
              >

                <h3 className="font-bold text-xl">
                  {novel.title}
                </h3>

                <div className="flex flex-wrap gap-8 mt-4">

                  <div className="flex items-center gap-2">
                    <FaEye className="text-blue-500" />
                    {novel.views.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    {novel.followers.toLocaleString()}
                  </div>

                  <div className="flex items-center gap-2">
                    <FaStar className="text-yellow-500" />
                    {novel.rating}
                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}
