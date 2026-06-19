import { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaSave,
  FaPaperPlane,
  FaArrowLeft
} from "react-icons/fa";

export default function ChapterEditor() {
  const { id } = useParams();

  const [chapterTitle, setChapterTitle] = useState("");
  const [chapterContent, setChapterContent] = useState("");

  const saveDraft = () => {
    // TODO: Save draft to Supabase
    console.log("Draft Saved");
  };

  const publishChapter = () => {
    // TODO: Publish chapter
    console.log("Chapter Published");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Top Bar */}
      <div className="bg-white border-b sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <button
              onClick={() => window.history.back()}
              className="p-3 rounded-xl border hover:bg-slate-50"
            >
              <FaArrowLeft />
            </button>

            <div>
              <h1 className="text-2xl font-bold">
                Chapter Editor
              </h1>

              <p className="text-sm text-slate-500">
                Novel ID: {id}
              </p>
            </div>

          </div>

          <div className="flex gap-3">

            <button
              onClick={saveDraft}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl border hover:bg-slate-50"
            >
              <FaSave />
              Save Draft
            </button>

            <button
              onClick={publishChapter}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700"
            >
              <FaPaperPlane />
              Publish
            </button>

          </div>

        </div>

      </div>

      {/* Editor */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-white rounded-3xl p-8 shadow-sm">

          {/* Chapter Title */}
          <input
            type="text"
            placeholder="Chapter Title..."
            value={chapterTitle}
            onChange={(e) =>
              setChapterTitle(e.target.value)
            }
            className="w-full text-4xl font-bold border-none outline-none mb-8"
          />

          {/* Chapter Content */}
          <textarea
            value={chapterContent}
            onChange={(e) =>
              setChapterContent(e.target.value)
            }
            placeholder="Start writing your story..."
            className="w-full min-h-[700px] resize-none outline-none text-lg leading-9"
          />

        </div>

      </div>

    </div>
  );
}
