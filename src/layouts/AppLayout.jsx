import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function AppLayout() {
  const location = useLocation();

  // Auto Scroll To Top
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">

      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-blue-600 via-sky-500 to-yellow-400 text-white text-center py-2 text-sm font-medium">

        ✨ Welcome to Rift Phrase — Explore Infinite Worlds ✨

      </div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">

        <Outlet />

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
