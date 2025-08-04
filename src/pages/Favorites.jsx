import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../features/favorites/favoritesSlice";
import { Link } from "react-router-dom";

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 w-100">
        💖 Your Favorite Quotes
      </h2>
      <div className="max-w-4xl mx-auto px-4 py-8 d-flex">
        {favorites.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-16">
            <p>No favorites yet.</p>
            <p className="text-sm mt-2">
              Go back and add some from the{" "}
              <Link to="/" className="text-blue-600 underline">
                home page
              </Link>
              !
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {favorites.map((quote) => (
              <div
                key={quote.id}
                className="bg-white border rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-200"
              >
                <p className="text-lg text-gray-800 italic mb-2">
                  "{quote.text}"
                </p>
                <p className="text-sm text-gray-500">– {quote.author}</p>
                <p className="text-xs text-indigo-500 mt-1">
                  #{quote.category}
                </p>
                <button
                  onClick={() => dispatch(removeFavorite(quote))}
                  className="mt-3 inline-block text-sm text-red-500 hover:underline"
                >
                  ❌ Remove from Favorites
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
