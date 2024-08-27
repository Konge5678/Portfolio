import React from 'react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="mb-8 flex justify-center">
      <input
        type="text"
        placeholder="Search by title or tag"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="p-4 w-full max-w-lg bg-indigo-950 border-2 border-indigo-600 text-yellow-400 rounded-lg outline-none focus:border-indigo-500 transition-colors duration-200"
      />
    </div>
  );
}
