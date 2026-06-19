```jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { supabase } from "../lib/supabase";

export default function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    setError("");
    setMessage("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      const { error } =
        await supabase.auth.updateUser({
          password
        });

      if (error) throw error;

      setMessage(
        "Password updated successfully."
      );

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-6">

      <div className="w-full max-w-md">

        <div className="bg-white rounded-3xl shadow-xl p-8">

          <h1 className="text-4xl font-bold text-center">
            Reset Password
          </h1>

          <p className="text-slate-500 text-center mt-3">
            Enter your new password.
          </p>

          {error && (
            <div className="mt-6 p-4 rounded-2xl bg-red-100 text-red-600">
              {error}
            </div>
          )}

          {message && (
            <div className="mt-6 p-4 rounded-2xl bg-green-100 text-green-600">
              {message}
            </div>
          )}

          <form
            onSubmit={handleReset}
            className="space-y-5 mt-8"
          >

            <div>

              <label className="font-medium">
                New Password
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

            <div>

              <label className="font-medium">
                Confirm Password
              </label>

              <div className="flex items-center mt-2 border rounded-2xl px-4 py-3">

                <FaLock className="text-slate-400" />

                <input
                  type="password"
                  placeholder="••••••••"
                  className="flex-1 ml-3 outline-none"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(
                      e.target.value
                    )
                  }
                  required
                />

              </div>

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-2xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading
                ? "Updating..."
                : "Update Password"}
            </button>

          </form>

          <div className="text-center mt-8">

            <Link
              to="/login"
              className="text-blue-600"
            >
              Back to Login
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
}
```
