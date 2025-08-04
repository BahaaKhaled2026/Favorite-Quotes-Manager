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
      <h2 className="mb-3 text-xl font-semibold text-gray-800">Filter by Category</h2>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => dispatch(setFilter(cat))}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              active === cat
                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}
