
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaBookOpen
} from "react-icons/fa";

import { register } from "../services/authService";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "reader"
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      await register({
        email: form.email,
        password: form.password,
        username: form.username,
        role: form.role
      });

      alert(
        "Account created successfully! Please check your email to verify your account."
      );

      navigate("/login");

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white p-6">

      <div className="w-full max-w-lg">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-yellow-400 flex items-center justify-center text-white text-3xl shadow-xl">
            <FaBookOpen />
          </div>

          <h1 className="text-4xl font-bold mt-6">
            Join Rift Phrase
          </h1>

          <p className="text-slate-500 mt-2">
            Begin your journey through infinite stories.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          {error && (
            <div className="mb-6 p-4 rounded-2xl bg-red-100 text-red-600">
              {error}
            </div>
          )}

          <form
            onSubmit={handleRegister}
            className="space-y-5"
          >

            {/* Username */}
            <div>

              <label className="font-medium">
                Username
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaUser className="text-slate-400" />

                <input
                  type="text"
                  name="username"
                  placeholder="Your username"
                  className="flex-1 ml-3 outline-none"
                  value={form.username}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Email */}
            <div>

              <label className="font-medium">
                Email
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaEnvelope className="text-slate-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  className="flex-1 ml-3 outline-none"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Password */}
            <div>

              <label className="font-medium">
                Password
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaLock className="text-slate-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="flex-1 ml-3 outline-none"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Confirm Password */}
            <div>

              <label className="font-medium">
                Confirm Password
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaLock className="text-slate-400" />

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  className="flex-1 ml-3 outline-none"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

            {/* Account Type */}
            <div>

              <label className="font-medium">
                Account Type
              </label>

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                className="w-full border rounded-2xl p-4 mt-2"
              >
                <option value="reader">
                  Reader
                </option>

                <option value="author">
                  Author
                </option>

              </select>

            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading
                ? "Creating Account..."
                : "Create Account"}
            </button>

          </form>

          <p className="text-center mt-8 text-slate-500">

            Already have an account?{" "}

            <Link
              to="/login"
              className="text-blue-600 font-semibold"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

