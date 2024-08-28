"use client";

import React from "react";
import ExperienceTag from "../Buttons/ExperienceCardTag";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ExperienceCardProps {
  title: string;
  company: string;
  duration: string;
  description: string;
  tags: { tag: string; link: string }[];
  projectLink: string;
}

const ExperienceCard = ({
  title,
  company,
  duration,
  description,
  tags,
  projectLink,
}: ExperienceCardProps) => {
  const handleCardClick = () => {
    window.open(projectLink, '_blank');
  };

  return (
    <div
      className="text-white flex flex-wrap lg:w-[600px] p-6 bg-indigo-950 rounded-lg group hover:bg-indigo-900 transition-colors duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="flex justify-between items-start">
        <p className="text-lg text-zinc-400">{duration}</p>
        <div className="ml-4 flex items-center">
          <h1 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
            {title} {company}
          </h1>
          <MdOutlineArrowOutward className="ml-2 text-2xl text-indigo-300 group-hover:text-yellow-300 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
      <p className="mt-4 text-zinc-300  group-hover:text-indigo-200 transition-colors duration-300">
        {description}
      </p>
      <div className="gap-2 mt-6 flex flex-wrap">
        {tags.map((tagItem, index) => (
          <ExperienceTag key={index} tag={tagItem.tag} link={tagItem.link} />
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;
