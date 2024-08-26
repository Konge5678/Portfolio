import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';

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

const ProjectList: React.FC<ProjectListProps> = ({ projects = [] }) => {
  return (
    <div className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10">
      <div className="hidden md:grid grid-cols-4 text-left gap-4 border-b border-gray-700 pb-2">
        <span className="text-gray-400">Project and Year</span>
        <span className="text-gray-400">Made at</span>
        <span className="text-gray-400">Built with</span>
        <span className="text-gray-400">Link</span>
      </div>

      {projects.length > 0 ? (
        projects.map((project, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-4 text-left gap-4 border-b border-gray-700 py-4"
          >
            <div className="col-span-1">
              <span className="text-[#6e56cf] text-sm block">{project.year}</span>
              <div className="block md:hidden">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffd700] text-lg font-semibold block group hover:text-[#ffcc00] transition-colors duration-200"
                >
                  {project.projectName}
                  <MdOutlineArrowOutward className="inline-block ml-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                </a>
              </div>
              <div className="hidden md:block text-[#ffd700] text-lg font-semibold">
                {project.projectName}
              </div>
            </div>

            <div className="hidden md:block col-span-1">
              <span className="text-gray-400 text-sm">{project.organization}</span>
            </div>

            <div className="hidden md:flex col-span-1 flex-wrap justify-start items-center space-x-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="bg-[#6e56cf] text-white text-sm px-3 py-1 rounded-full mt-2">
                  {tech}
                </span>
              ))}
            </div>

            <div className="hidden md:block col-span-1">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffd700] text-sm block group hover:text-[#ffcc00] transition-colors duration-200"
              >
                {new URL(project.link).hostname}
                <MdOutlineArrowOutward className="inline-block ml-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </a>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-400 mt-4">No projects available.</div>
      )}
    </div>
  );
};

export default ProjectList;
