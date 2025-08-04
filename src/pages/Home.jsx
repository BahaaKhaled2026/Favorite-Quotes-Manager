// /pages/Home.jsx
import React from 'react';
import QuoteList from '../components/QuoteList';
import FilterBar from '../components/FilterBar';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <FilterBar />
      <QuoteList />
    </div>
  );
}
