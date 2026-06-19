import { useState } from "react";
import { FaUpload } from "react-icons/fa";

const genres = [
  "Fantasy",
  "Action",
  "Adventure",
  "Romance",
  "Comedy",
  "Drama",
  "Sci-Fi",
  "Mystery",
  "Horror",
  "Isekai",
  "Cultivation",
  "System"
];

export default function CreateNovel() {
  const [formData, setFormData] = useState({
    title: "",
    synopsis: "",
    genre: "",
    status: "Ongoing",
    language: "English"
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Save to Supabase

    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          <h1 className="text-4xl font-bold mb-2">
            Create New Novel
          </h1>

          <p className="text-slate-500 mb-8">
            Begin your journey as an author.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Cover Upload */}
            <div>

              <label className="block font-semibold mb-3">
                Cover Image
              </label>

              <label className="border-2 border-dashed rounded-3xl p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50">

                <FaUpload className="text-4xl text-slate-400 mb-4" />

                <p className="text-slate-500">
                  Upload Novel Cover
                </p>

                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                />

              </label>

            </div>

            {/* Title */}
            <div>

              <label className="block font-semibold mb-2">
                Novel Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Enter novel title..."
                className="w-full border rounded-2xl p-4 outline-none"
                value={formData.title}
                onChange={handleChange}
              />

            </div>

            {/* Synopsis */}
            <div>

              <label className="block font-semibold mb-2">
                Synopsis
              </label>

              <textarea
                name="synopsis"
                rows="8"
                placeholder="Tell readers about your story..."
                className="w-full border rounded-2xl p-4 outline-none resize-none"
                value={formData.synopsis}
                onChange={handleChange}
              />

            </div>

            {/* Genre */}
            <div>

              <label className="block font-semibold mb-2">
                Genre
              </label>

              <select
                name="genre"
                className="w-full border rounded-2xl p-4"
                value={formData.genre}
                onChange={handleChange}
              >
                <option value="">
                  Select Genre
                </option>

                {genres.map((genre) => (
                  <option
                    key={genre}
                    value={genre}
                  >
                    {genre}
                  </option>
                ))}

              </select>

            </div>

            {/* Status */}
            <div>

              <label className="block font-semibold mb-2">
                Status
              </label>

              <select
                name="status"
                className="w-full border rounded-2xl p-4"
                value={formData.status}
                onChange={handleChange}
              >
                <option>Ongoing</option>
                <option>Completed</option>
                <option>Hiatus</option>
              </select>

            </div>

            {/* Language */}
            <div>

              <label className="block font-semibold mb-2">
                Language
              </label>

              <select
                name="language"
                className="w-full border rounded-2xl p-4"
                value={formData.language}
                onChange={handleChange}
              >
                <option>English</option>
                <option>Filipino</option>
                <option>Japanese</option>
                <option>Korean</option>
                <option>Chinese</option>
              </select>

            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Create Novel
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
