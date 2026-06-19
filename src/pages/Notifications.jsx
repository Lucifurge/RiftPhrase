import {
  FaBell,
  FaBook,
  FaHeart,
  FaComment
} from "react-icons/fa";

export default function Notifications() {
  // Temporary mock data
  const notifications = [
    {
      id: 1,
      icon: <FaBook className="text-blue-600" />,
      title: "New Chapter Released",
      message: "The Void Emperor Chapter 125 has been published.",
      time: "5 minutes ago"
    },
    {
      id: 2,
      icon: <FaHeart className="text-red-500" />,
      title: "New Follower",
      message: "Luofeng started following you.",
      time: "1 hour ago"
    },
    {
      id: 3,
      icon: <FaComment className="text-green-500" />,
      title: "New Comment",
      message: "Someone commented on your novel.",
      time: "3 hours ago"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-5xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">

            <FaBell className="text-4xl text-blue-600" />

            <div>
              <h1 className="text-4xl font-bold">
                Notifications
              </h1>

              <p className="text-slate-500 mt-2">
                Stay updated with everything happening on Rift Phrase.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* Notification List */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="space-y-5">

          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition"
            >

              <div className="flex gap-5">

                <div className="text-2xl">
                  {notification.icon}
                </div>

                <div className="flex-1">

                  <h2 className="font-bold text-lg">
                    {notification.title}
                  </h2>

                  <p className="text-slate-600 mt-2">
                    {notification.message}
                  </p>

                  <p className="text-sm text-slate-400 mt-3">
                    {notification.time}
                  </p>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}
