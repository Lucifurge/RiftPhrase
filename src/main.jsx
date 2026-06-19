import { createBrowserRouter } from "react-router-dom";

// Layout
import AppLayout from "../layouts/AppLayout";

// Auth
import ProtectedRoute from "../components/auth/ProtectedRoute";

// Public Pages
import Home from "../pages/Home";
import Explore from "../pages/Explore";
import Rankings from "../pages/Rankings";
import LatestUpdates from "../pages/LatestUpdates";
import Genres from "../pages/Genres";
import SearchResults from "../pages/SearchResults";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";

import NovelDetails from "../pages/NovelDetails";
import Reader from "../pages/Reader";

import Profile from "../pages/Profile";

// User Pages
import Dashboard from "../pages/Dashboard";
import Workspace from "../pages/Workspace";
import CreateNovel from "../pages/CreateNovel";
import NovelManager from "../pages/NovelManager";
import ChapterEditor from "../pages/ChapterEditor";
import AuthorAnalytics from "../pages/AuthorAnalytics";

import Library from "../pages/Library";
import Notifications from "../pages/Notifications";
import Settings from "../pages/Settings";

// Admin / Moderator
import AdminDashboard from "../pages/AdminDashboard";
import ModeratorDashboard from "../pages/ModeratorDashboard";
import ReportsManager from "../pages/ReportsManager";
import AnnouncementManager from "../pages/AnnouncementManager";

// Error
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      // ==================================================
      // PUBLIC ROUTES
      // ==================================================

      {
        index: true,
        element: <Home />
      },

      {
        path: "explore",
        element: <Explore />
      },

      {
        path: "rankings",
        element: <Rankings />
      },

      {
        path: "latest",
        element: <LatestUpdates />
      },

      {
        path: "genres",
        element: <Genres />
      },

      {
        path: "search",
        element: <SearchResults />
      },

      {
        path: "login",
        element: <Login />
      },

      {
        path: "register",
        element: <Register />
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />
      },

      {
        path: "reset-password",
        element: <ResetPassword />
      },

      {
        path: "profile/:username",
        element: <Profile />
      },

      {
        path: "novel/:slug",
        element: <NovelDetails />
      },

      {
        path: "read/:id",
        element: <Reader />
      },

      // ==================================================
      // AUTHENTICATED USER ROUTES
      // ==================================================

      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        )
      },

      {
        path: "workspace",
        element: (
          <ProtectedRoute>
            <Workspace />
          </ProtectedRoute>
        )
      },

      {
        path: "workspace/create",
        element: (
          <ProtectedRoute>
            <CreateNovel />
          </ProtectedRoute>
        )
      },

      {
        path: "workspace/novel/:id",
        element: (
          <ProtectedRoute>
            <NovelManager />
          </ProtectedRoute>
        )
      },

      {
        path: "workspace/chapter/:id",
        element: (
          <ProtectedRoute>
            <ChapterEditor />
          </ProtectedRoute>
        )
      },

      {
        path: "workspace/analytics",
        element: (
          <ProtectedRoute>
            <AuthorAnalytics />
          </ProtectedRoute>
        )
      },

      {
        path: "library",
        element: (
          <ProtectedRoute>
            <Library />
          </ProtectedRoute>
        )
      },

      {
        path: "notifications",
        element: (
          <ProtectedRoute>
            <Notifications />
          </ProtectedRoute>
        )
      },

      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        )
      },

      // ==================================================
      // ADMIN ROUTES
      // ==================================================

      {
        path: "admin",
        element: (
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        )
      },

      {
        path: "moderator",
        element: (
          <ProtectedRoute>
            <ModeratorDashboard />
          </ProtectedRoute>
        )
      },

      {
        path: "admin/reports",
        element: (
          <ProtectedRoute>
            <ReportsManager />
          </ProtectedRoute>
        )
      },

      {
        path: "admin/announcements",
        element: (
          <ProtectedRoute>
            <AnnouncementManager />
          </ProtectedRoute>
        )
      },

      // ==================================================
      // 404
      // ==================================================

      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;
