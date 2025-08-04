// /components/QuoteList.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredQuotes } from '../features/quotes/quotesSlice';
import { addFavorite } from '../features/favorites/favoritesSlice';

export default function QuoteList() {
  const quotes = useSelector(selectFilteredQuotes);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const isFavorite = (quote) => favorites.some((q) => q.id === quote.id);

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {quotes.map((quote) => (
        <div
          key={quote.id}
          className="bg-white border rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-200"
        >
          <p className="text-lg text-gray-800 italic mb-2">"{quote.text}"</p>
          <p className="text-sm text-gray-500">– {quote.author}</p>
          <p className="text-xs text-indigo-500 mt-1">#{quote.category}</p>
          {!isFavorite(quote) && (
            <button
              onClick={() => dispatch(addFavorite(quote))}
              className="mt-3 inline-block text-sm text-pink-500 hover:underline"
            >
              💖 Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
