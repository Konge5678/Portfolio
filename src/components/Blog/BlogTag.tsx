import React from "react";

interface TagProps {
  tag: string;
}

export default function Tag({ tag }: TagProps) {
  return (
    <span className="border-2 border-yellow-400 text-white text-sm px-3 py-1 rounded-full">
      {tag}
    </span>
  );
}