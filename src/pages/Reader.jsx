import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";

export default function Reader() {
  const [fontSize, setFontSize] = useState(20);

  // Temporary data
  const chapter = {
    novelTitle: "The Void Emperor",
    chapterTitle: "Chapter 1 - Awakening",
    content: `
In the endless darkness, a single light appeared.

Rhapnel slowly opened his eyes.

"Where... am I?"

He found himself standing in a strange void, surrounded by countless stars.

Suddenly, a voice echoed across the infinite space.

"Welcome, Rift Walker."

Everything changed from that moment onward.
    `
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef]">

      {/* Top Bar */}
      <div className="sticky top-0 z-50 bg-white border-b">

        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          <div>
            <h1 className="font-bold text-xl">
              {chapter.novelTitle}
            </h1>

            <p className="text-sm text-slate-500">
              {chapter.chapterTitle}
            </p>
          </div>

          {/* Reader Settings */}
          <div className="flex items-center gap-4">

            <button
              onClick={() =>
                setFontSize((prev) =>
                  Math.max(14, prev - 2)
                )
              }
              className="px-3 py-2 border rounded-xl"
            >
              A-
            </button>

            <button
              onClick={() =>
                setFontSize((prev) =>
                  Math.min(36, prev + 2)
                )
              }
              className="px-3 py-2 border rounded-xl"
            >
              A+
            </button>

            <button className="p-3 border rounded-xl">
              <FaCog />
            </button>

          </div>

        </div>

      </div>

      {/* Reading Area */}
      <div className="max-w-4xl mx-auto px-8 py-16">

        <div className="bg-white rounded-3xl shadow-sm p-10">

          <h1 className="text-4xl font-bold text-center mb-3">
            {chapter.chapterTitle}
          </h1>

          <h2 className="text-center text-slate-500 mb-12">
            {chapter.novelTitle}
          </h2>

          <div
            className="whitespace-pre-line leading-[2.5] text-slate-800"
            style={{ fontSize: `${fontSize}px` }}
          >
            {chapter.content}
          </div>

        </div>

        {/* Navigation */}
        <div className="flex justify-between mt-10">

          <button className="flex items-center gap-3 px-6 py-4 rounded-2xl border hover:bg-white">

            <FaChevronLeft />

            Previous Chapter

          </button>

          <button className="flex items-center gap-3 px-6 py-4 rounded-2xl border hover:bg-white">

            Next Chapter

            <FaChevronRight />

          </button>

        </div>

      </div>

    </div>
  );
}
