// /pages/Home.jsx
import React from 'react';
import QuoteList from '../components/QuoteList';
import FilterBar from '../components/FilterBar';

export default function Home() {
  return (
    <div>
      <FilterBar />
      <QuoteList />
    </div>
  );
}