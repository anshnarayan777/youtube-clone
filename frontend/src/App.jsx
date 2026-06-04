import { useState } from "react";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import History from "./pages/History";
import WatchLater from "./pages/WatchLater";
import VideoPage from "./pages/VideoPage";
import Channel from "./pages/Channel";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";

import { Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] =
    useState("");

  return (
    <div className="bg-black min-h-screen">

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/*"
          element={
            <ProtectedRoute>

              <Navbar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              <div className="flex">

                <Sidebar />

                <div className="flex-1 p-4">

                  <Routes>

                    <Route
                      path="/"
                      element={
                        <Home
                          searchTerm={searchTerm}
                        />
                      }
                    />

                    <Route
                      path="/video/:id"
                      element={<VideoPage />}
                    />

                    <Route
                      path="/history"
                      element={<History />}
                    />

                    <Route
                      path="/watchlater"
                      element={<WatchLater />}
                    />

                    <Route
                      path="/channel"
                      element={<Channel />}
                    />

                  </Routes>

                </div>

              </div>

            </ProtectedRoute>
          }
        />

      </Routes>

    </div>
  );
}

export default App;