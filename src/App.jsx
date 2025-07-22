// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

export default function App() {
  return (
    <Router>
      <div className="container mx-auto px-4 py-6">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Favorite Quotes</h1>
          <div>
            <Link className="mr-4 text-blue-500" to="/">Home</Link>
            <Link className="text-blue-500" to="/favorites">Favorites</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
}