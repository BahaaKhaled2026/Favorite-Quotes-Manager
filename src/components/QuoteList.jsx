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
    <div className="grid gap-4">
      {quotes.map((quote) => (
        <div key={quote.id} className="border p-4 rounded shadow-sm bg-white">
          <p className="italic">"{quote.text}"</p>
          <p className="text-sm text-gray-500">- {quote.author}</p>
          <p className="text-xs text-blue-600 mt-1">#{quote.category}</p>
          {!isFavorite(quote) && (
            <button
              onClick={() => dispatch(addFavorite(quote))}
              className="mt-2 text-blue-500"
            >
              💖 Add to Favorites
            </button>
          )}
        </div>
      ))}
    </div>
  );
}