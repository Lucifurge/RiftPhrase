import {
  FaUsers,
  FaBook,
  FaFlag,
  FaBullhorn,
  FaChartLine,
  FaUserShield
} from "react-icons/fa";

export default function AdminDashboard() {
  const stats = {
    totalUsers: 12450,
    totalNovels: 3210,
    reportsPending: 12,
    announcements: 5
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">

            <FaUserShield className="text-5xl text-blue-600" />

            <div>
              <h1 className="text-5xl font-bold">
                Admin Dashboard
              </h1>

              <p className="text-slate-500 mt-2">
                Manage Rift Phrase platform.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <FaUsers className="text-4xl text-blue-600 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.totalUsers.toLocaleString()}
            </h2>

            <p className="text-slate-500 mt-2">
              Registered Users
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <FaBook className="text-4xl text-green-600 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.totalNovels.toLocaleString()}
            </h2>

            <p className="text-slate-500 mt-2">
              Published Novels
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <FaFlag className="text-4xl text-red-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.reportsPending}
            </h2>

            <p className="text-slate-500 mt-2">
              Pending Reports
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <FaBullhorn className="text-4xl text-yellow-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.announcements}
            </h2>

            <p className="text-slate-500 mt-2">
              Active Announcements
            </p>
          </div>

        </div>

      </div>

      {/* Quick Actions */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <div className="flex items-center gap-3 mb-8">

            <FaChartLine className="text-3xl text-blue-600" />

            <h2 className="text-3xl font-bold">
              Quick Actions
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">

            <button className="p-6 rounded-2xl border hover:bg-slate-50">
              Manage Users
            </button>

            <button className="p-6 rounded-2xl border hover:bg-slate-50">
              Review Reports
            </button>

            <button className="p-6 rounded-2xl border hover:bg-slate-50">
              Create Announcement
            </button>

            <button className="p-6 rounded-2xl border hover:bg-slate-50">
              Platform Analytics
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}
