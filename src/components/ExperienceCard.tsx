"use client";

import React from "react";
import ExperienceTag from "./ExperienceCardTag";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  tags: { tag: string; link: string }[];
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  tags,
}: ExperienceCardProps) => {
  return (
    <div className="text-white w-[600px] p-6 bg-indigo-950 rounded-lg">
      <div className="flex justify-between items-start">
        <p className="text-lg text-zinc-400">{duration}</p>
        <div className="ml-4">
          <h1 className="text-xl font-semibold">
            {title} {company}
          </h1>
        </div>
      </div>
      <p className="mt-4 text-zinc-300 text-justify">{description}</p>
      <div className="flex space-x-2 mt-6">
        {tags.map((tagItem, index) => (
          <ExperienceTag key={index} tag={tagItem.tag} link={tagItem.link} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
