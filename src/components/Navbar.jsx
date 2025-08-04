import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom"; 
export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-5xl px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">📜 Favorite Quotes</h1>
        <div className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/favorites">Favorites</Link>
        </div>
      </div>
    </nav>
  );
};
