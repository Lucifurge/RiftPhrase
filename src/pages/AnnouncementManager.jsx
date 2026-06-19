import { useState } from "react";
import {
  FaBullhorn,
  FaPlus,
  FaTrash,
  FaEdit
} from "react-icons/fa";

export default function AnnouncementManager() {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Welcome to Rift Phrase",
      content:
        "Welcome to Rift Phrase! Begin your journey through infinite stories.",
      createdAt: "2026-06-20"
    }
  ]);

  const createAnnouncement = (e) => {
    e.preventDefault();

    if (!title || !content) return;

    const newAnnouncement = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toLocaleDateString()
    };

    setAnnouncements([
      newAnnouncement,
      ...announcements
    ]);

    setTitle("");
    setContent("");
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(
      announcements.filter(
        announcement => announcement.id !== id
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">

            <FaBullhorn className="text-5xl text-yellow-500" />

            <div>

              <h1 className="text-5xl font-bold">
                Announcement Manager
              </h1>

              <p className="text-slate-500 mt-2">
                Create and manage platform announcements.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Create Form */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl shadow-sm p-8">

          <h2 className="text-3xl font-bold mb-8">
            Create Announcement
          </h2>

          <form
            onSubmit={createAnnouncement}
            className="space-y-6"
          >

            <input
              type="text"
              placeholder="Announcement title..."
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              className="w-full border rounded-2xl p-4"
            />

            <textarea
              rows="6"
              placeholder="Announcement content..."
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              className="w-full border rounded-2xl p-4 resize-none"
            />

            <button
              type="submit"
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
            >
              <FaPlus />
              Publish Announcement
            </button>

          </form>

        </div>

      </div>

      {/* Existing Announcements */}
      <div className="max-w-7xl mx-auto px-6 pb-10">

        <div className="space-y-6">

          {announcements.map((announcement) => (

            <div
              key={announcement.id}
              className="bg-white rounded-3xl shadow-sm p-8"
            >

              <div className="flex justify-between gap-6">

                <div className="flex-1">

                  <h3 className="text-2xl font-bold">
                    {announcement.title}
                  </h3>

                  <p className="text-slate-700 mt-4">
                    {announcement.content}
                  </p>

                  <p className="text-sm text-slate-400 mt-4">
                    Posted: {announcement.createdAt}
                  </p>

                </div>

                <div className="flex gap-3">

                  <button
                    className="p-4 rounded-2xl border hover:bg-slate-100"
                  >
                    <FaEdit />
                  </button>

                  <button
                    onClick={() =>
                      deleteAnnouncement(
                        announcement.id
                      )
                    }
                    className="p-4 rounded-2xl bg-red-600 text-white hover:bg-red-700"
                  >
                    <FaTrash />
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
