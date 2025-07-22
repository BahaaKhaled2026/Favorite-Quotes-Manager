// /components/FilterBar.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../features/quotes/quotesSlice';

const categories = ['all', 'Motivation', 'Humor', 'Wisdom'];

export default function FilterBar() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.quotes.filter);

  return (
    <div className="mb-6">
      <h2 className="mb-2 font-semibold">Filter by Category:</h2>
      <div className="flex gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setFilter(cat))}
            className={`px-3 py-1 rounded border text-sm ${
              active === cat ? 'bg-blue-500 text-white' : 'bg-white text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
