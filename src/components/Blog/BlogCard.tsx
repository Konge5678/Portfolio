import React from "react";
import Tag from "./BlogTag";
import Image from 'next/image';


interface BlogCardProps {
  title: string;
  date: string;
  tags: string[];
  onClick: () => void;
}

export default function BlogCard({
  title,
  date,
  tags,
  onClick,
}: BlogCardProps) {
  return (
    <div
      className="p-6 bg-indigo-950 text-gray-300 hover:text-gray-400 rounded-lg shadow-lg hover:bg-indigo-900 transition-colors duration-300 cursor-pointer"
      onClick={onClick}>
      <div className="mb-4">
        <p className="text-sm text-purple-400">{date}</p>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Tag key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
}
