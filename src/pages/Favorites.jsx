// /pages/Favorites.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFavorite } from '../features/favorites/favoritesSlice';

export default function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Your Favorite Quotes</h2>
      <div className="grid gap-4">
        {favorites.length === 0 ? (
          <p>No favorites yet.</p>
        ) : (
          favorites.map((quote) => (
            <div
              key={quote.id}
              className="border p-4 rounded shadow-sm bg-white"
            >
              <p className="italic">"{quote.text}"</p>
              <p className="text-sm text-gray-500">- {quote.author}</p>
              <button
                onClick={() => dispatch(removeFavorite(quote))}
                className="mt-2 text-red-500"
              >
                Remove from Favorites
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}