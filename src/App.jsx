import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <main className="flex-grow flex items-center justify-center">
          <div className="w-full max-w-5xl px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}
