import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaBookOpen } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // TODO: Supabase Login

    console.log({
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-white p-6">

      <div className="w-full max-w-md">

        {/* Logo */}
        <div className="text-center mb-8">

          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-r from-blue-600 to-yellow-400 flex items-center justify-center text-white text-3xl shadow-xl">

            <FaBookOpen />

          </div>

          <h1 className="text-4xl font-bold mt-6">
            Welcome Back
          </h1>

          <p className="text-slate-500 mt-2">
            Continue your journey through infinite stories.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <form
            onSubmit={handleLogin}
            className="space-y-6"
          >

            {/* Email */}
            <div>

              <label className="font-medium">
                Email
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaEnvelope className="text-slate-400" />

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 ml-3 outline-none"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
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
                  placeholder="••••••••"
                  className="flex-1 ml-3 outline-none"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                  required
                />

              </div>

            </div>

            {/* Forgot Password */}
            <div className="text-right">

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">

            <div className="flex-1 border-t"></div>

            <span className="px-4 text-slate-400">
              OR
            </span>

            <div className="flex-1 border-t"></div>

          </div>

          {/* OAuth */}
          <div className="space-y-4">

            <button className="w-full py-3 rounded-2xl border hover:bg-slate-50 transition">
              Continue with Google
            </button>

            <button className="w-full py-3 rounded-2xl border hover:bg-slate-50 transition">
              Continue with Discord
            </button>

          </div>

          {/* Register */}
          <p className="text-center mt-8 text-slate-500">

            Don't have an account?{" "}

            <Link
              to="/register"
              className="text-blue-600 font-semibold"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}
