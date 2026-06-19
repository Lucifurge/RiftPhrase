import {
  FaFlag,
  FaComments,
  FaBook,
  FaCheckCircle,
  FaUserShield
} from "react-icons/fa";

export default function ModeratorDashboard() {
  const stats = {
    pendingReports: 24,
    reviewedToday: 18,
    flaggedComments: 9,
    flaggedNovels: 3
  };

  const recentReports = [
    {
      id: 1,
      type: "Comment",
      reason: "Spam",
      reporter: "Reader123",
      status: "Pending"
    },
    {
      id: 2,
      type: "Novel",
      reason: "Inappropriate Content",
      reporter: "VoidReader",
      status: "Pending"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">

            <FaUserShield className="text-5xl text-purple-600" />

            <div>

              <h1 className="text-5xl font-bold">
                Moderator Dashboard
              </h1>

              <p className="text-slate-500 mt-2">
                Keep Rift Phrase safe and welcoming.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Statistics */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaFlag className="text-4xl text-red-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.pendingReports}
            </h2>

            <p className="text-slate-500 mt-2">
              Pending Reports
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaCheckCircle className="text-4xl text-green-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.reviewedToday}
            </h2>

            <p className="text-slate-500 mt-2">
              Reviewed Today
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaComments className="text-4xl text-blue-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.flaggedComments}
            </h2>

            <p className="text-slate-500 mt-2">
              Flagged Comments
            </p>

          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm">

            <FaBook className="text-4xl text-yellow-500 mb-4" />

            <h2 className="text-4xl font-bold">
              {stats.flaggedNovels}
            </h2>

            <p className="text-slate-500 mt-2">
              Flagged Novels
            </p>

          </div>

        </div>

      </div>

      {/* Recent Reports */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <h2 className="text-3xl font-bold mb-8">
            Recent Reports
          </h2>

          <div className="space-y-5">

            {recentReports.map((report) => (
              <div
                key={report.id}
                className="border rounded-2xl p-6"
              >

                <div className="flex flex-col md:flex-row md:justify-between gap-4">

                  <div>

                    <h3 className="font-bold text-lg">
                      {report.type} Report
                    </h3>

                    <p className="text-slate-500 mt-1">
                      Reason: {report.reason}
                    </p>

                    <p className="text-slate-500">
                      Reported by: {report.reporter}
                    </p>

                  </div>

                  <div>

                    <span className="px-4 py-2 rounded-full bg-yellow-100 text-yellow-700">
                      {report.status}
                    </span>

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
