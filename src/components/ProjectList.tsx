import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

interface Project {
  year: string;
  projectName: string;
  organization: string;
  technologies: string[];
  link: string;
}

interface ProjectListProps {
  projects?: Project[];
}

const getHostname = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const ProjectList: React.FC<ProjectListProps> = ({ projects = [] }) => {
  return (
    <div className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10">
      <div className="hidden md:grid grid-cols-4 text-left gap-4 border-b border-purple-400 pb-2">
        <span className="text-gray-400">Project and Year</span>
        <span className="text-gray-400">Made at</span>
        <span className="text-gray-400">Built with</span>
        <span className="text-gray-400">Link</span>
      </div>

      {projects.length > 0 ? (
        projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:bg-indigo-900 transition-colors duration-300 no-underline">
            <div className="grid grid-cols-1 md:grid-cols-4 text-left gap-4 border-b border-purple-400 py-4">
              <div className="col-span-1">
                <span className="text-purple-400 text-sm block group-hover:tex-purple-500">
                  {project.year}
                </span>
                <div className="block md:hidden">
                  <span className="text-gray-300 text-lg font-semibold block 0">
                    {project.projectName}
                    <MdOutlineArrowOutward className="inline-block ml-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                  </span>
                </div>
                <div className="hidden md:block text-gray-300 text-lg font-semibold">
                  {project.projectName}
                </div>
              </div>

              <div className="hidden md:block col-span-1">
                <span className="text-gray-400 text-sm group-hover:text-gray-200">
                  {project.organization}
                </span>
              </div>

              <div className="hidden md:flex col-span-1 flex-wrap justify-start items-start gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-customPurple text-white text-sm px-3 py-1 rounded-full mt-2 group-hover:bg-indigo-700">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="hidden md:block col-span-1">
                <span className="text-yellow-400 text-sm block group-hover:text-yellow-300 transition-colors duration-200">
                  {getHostname(project.link)}
                  <MdOutlineArrowOutward className="inline-block ml-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </span>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div className="text-center text-gray-400 mt-4">
          No projects available.
        </div>
      )}
    </div>
  );
};

export default ProjectList;