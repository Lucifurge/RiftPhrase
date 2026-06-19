import { useState } from "react";
import {
  FaFlag,
  FaCheck,
  FaTimes,
  FaEye
} from "react-icons/fa";

export default function ReportsManager() {

  const [reports, setReports] = useState([
    {
      id: 1,
      type: "Novel",
      target: "The Void Emperor",
      reporter: "Reader123",
      reason: "Inappropriate Content",
      status: "Pending",
      createdAt: "2 hours ago"
    },
    {
      id: 2,
      type: "Comment",
      target: "Comment #341",
      reporter: "VoidReader",
      reason: "Spam",
      status: "Pending",
      createdAt: "5 hours ago"
    }
  ]);

  const updateStatus = (id, newStatus) => {
    setReports(
      reports.map(report =>
        report.id === id
          ? { ...report, status: newStatus }
          : report
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <div className="bg-white border-b">

        <div className="max-w-7xl mx-auto px-6 py-10">

          <div className="flex items-center gap-4">

            <FaFlag className="text-5xl text-red-500" />

            <div>

              <h1 className="text-5xl font-bold">
                Reports Manager
              </h1>

              <p className="text-slate-500 mt-2">
                Review and moderate community reports.
              </p>

            </div>

          </div>

        </div>

      </div>

      {/* Reports */}
      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="space-y-6">

          {reports.map((report) => (
            <div
              key={report.id}
              className="bg-white rounded-3xl shadow-sm p-8"
            >

              <div className="flex flex-col lg:flex-row lg:justify-between gap-8">

                <div>

                  <div className="flex items-center gap-3">

                    <h2 className="text-2xl font-bold">
                      {report.type} Report
                    </h2>

                    <span
                      className={`px-4 py-1 rounded-full text-sm ${
                        report.status === "Resolved"
                          ? "bg-green-100 text-green-700"
                          : report.status === "Dismissed"
                          ? "bg-gray-100 text-gray-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {report.status}
                    </span>

                  </div>

                  <div className="mt-5 space-y-2 text-slate-600">

                    <p>
                      <strong>Target:</strong>{" "}
                      {report.target}
                    </p>

                    <p>
                      <strong>Reporter:</strong>{" "}
                      {report.reporter}
                    </p>

                    <p>
                      <strong>Reason:</strong>{" "}
                      {report.reason}
                    </p>

                    <p>
                      <strong>Submitted:</strong>{" "}
                      {report.createdAt}
                    </p>

                  </div>

                </div>

                <div className="flex flex-wrap gap-3">

                  <button
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl border hover:bg-slate-100"
                  >
                    <FaEye />
                    View
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        report.id,
                        "Resolved"
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-green-600 text-white hover:bg-green-700"
                  >
                    <FaCheck />
                    Resolve
                  </button>

                  <button
                    onClick={() =>
                      updateStatus(
                        report.id,
                        "Dismissed"
                      )
                    }
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-red-600 text-white hover:bg-red-700"
                  >
                    <FaTimes />
                    Dismiss
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
