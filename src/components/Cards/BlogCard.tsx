import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
}

const BlogCard = ({ title, description, image, date }: BlogCardProps) => {
  return (
    <div className="text-white flex flex-wrap lg:w-[600px] p-6 bg-indigo-950 rounded-lg group hover:bg-indigo-900 transition-colors duration-300">
      <div className="flex">
        <img src={image} alt={title} className="w-1/3 rounded-lg mr-4 flex flex-wrap" />
        <div className="flex flex-col justify-between w-full">
          <div className="flex justify-between items-start">
            <p className="text-lg text-zinc-400 group-hover:text-yellow-300 transition-colors duration-300">
              {date}
            </p>
            <div className="ml-4 flex items-center">
              <h1 className="text-xl font-semibold group-hover:text-yellow-300 transition-colors duration-300">
                {title}
              </h1>
              <MdOutlineArrowOutward className="ml-2 text-2xl text-indigo-300 group-hover:text-yellow-300 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
            </div>
          </div>
          <p className="mt-2 text-zinc-300 text-justify group-hover:text-indigo-200 transition-colors duration-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
