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
        className="p-4 w-full max-w-lg bg-zinc-900 text-white rounded-lg outline-none focus:border-yellow-300"
      />
    </div>
  );
}
