import React from "react";
import ExperienceTag from "../Buttons/ExperienceCardTag";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: { tag: string; link: string }[];
  image: string;
  date: string;
}

const ProjectCard = ({ title, description, tags, image, date }: ProjectCardProps) => {
  return (
    <div className="text-white w-[600px] p-6 bg-indigo-950 rounded-lg group hover:bg-indigo-900 transition-colors duration-300">
      <div className="flex justify-between items-start">
        <p className="text-lg text-zinc-400">{date}</p>
        <div className="ml-4 flex items-center">
          <h1 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
            {title}
          </h1>
          <MdOutlineArrowOutward className="ml-2 text-2xl text-indigo-300 group-hover:text-yellow-300 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
        </div>
      </div>
      <div className="mt-4 flex">
        <img src={image} alt={title} className="w-1/3 rounded-lg mr-4" />
        <p className="text-zinc-300 text-justify group-hover:text-indigo-200 transition-colors duration-300">
          {description}
        </p>
      </div>
      <div className="flex space-x-2 mt-6">
        {tags.map((tagItem, index) => (
          <ExperienceTag key={index} tag={tagItem.tag} link={tagItem.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
