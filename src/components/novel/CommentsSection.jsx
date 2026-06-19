import { useState } from "react";
import { FaPaperPlane, FaHeart } from "react-icons/fa";

export default function CommentsSection() {
  const [comment, setComment] = useState("");

  // Temporary mock data
  const comments = [
    {
      id: 1,
      user: "Rhapnel",
      avatar: "https://placehold.co/50",
      content:
        "This chapter was amazing! Can't wait for the next one.",
      likes: 12,
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      user: "Luofeng",
      avatar: "https://placehold.co/50",
      content:
        "The world building is incredible.",
      likes: 8,
      createdAt: "5 hours ago"
    }
  ];

  const submitComment = (e) => {
    e.preventDefault();

    // TODO: Save comment to Supabase

    console.log(comment);

    setComment("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-sm p-8">

      {/* Header */}
      <h2 className="text-3xl font-bold mb-8">
        Comments
      </h2>

      {/* Comment Form */}
      <form
        onSubmit={submitComment}
        className="mb-10"
      >

        <textarea
          rows="4"
          placeholder="Share your thoughts..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full border rounded-2xl p-4 resize-none outline-none"
        />

        <div className="flex justify-end mt-4">

          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            <FaPaperPlane />
            Post Comment
          </button>

        </div>

      </form>

      {/* Comment List */}
      <div className="space-y-6">

        {comments.map((item) => (
          <div
            key={item.id}
            className="border rounded-2xl p-5"
          >

            <div className="flex gap-4">

              <img
                src={item.avatar}
                alt={item.user}
                className="w-12 h-12 rounded-full"
              />

              <div className="flex-1">

                <div className="flex items-center gap-3">

                  <h3 className="font-bold">
                    {item.user}
                  </h3>

                  <span className="text-sm text-slate-400">
                    {item.createdAt}
                  </span>

                </div>

                <p className="mt-3 text-slate-700">
                  {item.content}
                </p>

                <button className="flex items-center gap-2 mt-4 text-slate-500 hover:text-red-500 transition">

                  <FaHeart />

                  {item.likes}

                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}
