"use client";

import React from "react";
interface ExperienceCardTagProps {
  tag: string;
  link: string;
}

const ExperienceTag = ({ tag, link }: ExperienceCardTagProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-2 border-yellow-400 font-medium leading-5 text-purple- rounded-full px-4 py-1">
      {tag}
    </a>
  );
};

export default ExperienceTag;
