import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEnvelope, FaBookOpen } from "react-icons/fa";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    // TODO: Supabase Password Reset

    console.log("Reset email sent to:", email);

    alert(
      "If an account exists, a password reset email will be sent."
    );
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
            Forgot Password?
          </h1>

          <p className="text-slate-500 mt-2">
            Enter your email and we'll send you a reset link.
          </p>

        </div>

        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8">

          <form
            onSubmit={handleReset}
            className="space-y-6"
          >

            <div>

              <label className="font-medium">
                Email Address
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

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Send Reset Link
            </button>

          </form>

          <p className="text-center mt-8 text-slate-500">

            Remember your password?{" "}

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
