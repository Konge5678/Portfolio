import React from "react";

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <span className="bg-yellow-400 text-black font-bold text-sm px-3 py-1 rounded-full">
      {tag}
    </span>
  );
}