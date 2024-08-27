import React from 'react';

export default function Tag({ tag }) {
  return (
    <span className="bg-indigo-700 text-white text-sm px-3 py-1 rounded-full">
      {tag}
    </span>
  );
}
