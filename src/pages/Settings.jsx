import { useState } from "react";

export default function Settings() {
  const [form, setForm] = useState({
    displayName: "Rhapnel Rey",
    bio: "Author, dreamer, and creator of infinite worlds.",
    email: "rhapnel@example.com",
    darkMode: false,
    emailNotifications: true
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    // TODO: Save settings to Supabase

    console.log(form);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-4xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold">
            Settings
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your account preferences.
          </p>

        </div>

      </div>

      {/* Settings Form */}
      <div className="max-w-4xl mx-auto px-6 py-10">

        <form
          onSubmit={handleSave}
          className="bg-white rounded-3xl p-8 shadow-sm space-y-8"
        >

          {/* Profile Section */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Profile
            </h2>

            <div className="space-y-5">

              <div>
                <label className="block font-semibold mb-2">
                  Display Name
                </label>

                <input
                  type="text"
                  name="displayName"
                  value={form.displayName}
                  onChange={handleChange}
                  className="w-full border rounded-2xl p-4"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">
                  Bio
                </label>

                <textarea
                  rows="5"
                  name="bio"
                  value={form.bio}
                  onChange={handleChange}
                  className="w-full border rounded-2xl p-4 resize-none"
                />
              </div>

            </div>

          </div>

          {/* Account Section */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Account
            </h2>

            <div>

              <label className="block font-semibold mb-2">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full border rounded-2xl p-4"
              />

            </div>

          </div>

          {/* Preferences */}
          <div>

            <h2 className="text-2xl font-bold mb-6">
              Preferences
            </h2>

            <div className="space-y-5">

              <label className="flex items-center justify-between">

                <span>Dark Mode</span>

                <input
                  type="checkbox"
                  name="darkMode"
                  checked={form.darkMode}
                  onChange={handleChange}
                />

              </label>

              <label className="flex items-center justify-between">

                <span>Email Notifications</span>

                <input
                  type="checkbox"
                  name="emailNotifications"
                  checked={form.emailNotifications}
                  onChange={handleChange}
                />

              </label>

            </div>

          </div>

          {/* Save Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Save Settings
          </button>

        </form>

      </div>

    </div>
  );
}
