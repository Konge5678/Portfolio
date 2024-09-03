import React from 'react';
import { MdOutlineArrowOutward } from 'react-icons/md';
import Link from 'next/link';

const getHostname = (url: string) => {
  try {
    return new URL(url).hostname;
  } catch {
    return url;
  }
};

const ProjectList = ({ projects = [] }: { projects: { startdate: string, enddate: string, title: string, link: string, slug: string ,madeAt: string, tags: { name: string }[] }[] }) => {

  return (
    <div className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10">
      <div className="hidden md:grid grid-cols-4 text-left gap-4 border-b border-purple-400 pb-2">
        <span className="text-gray-400">Project and Year</span>
        <span className="text-gray-400">Made at</span>
        <span className="text-gray-400">Built with</span>
        <span className="text-gray-400">Link</span>
      </div>

      {projects.length > 0 ? (
  projects.map((project, index) => {
    return (
      <Link
        key={index}
        className="block group hover:bg-indigo-900 transition-colors duration-300 no-underline"
        href={`/Projects/${project.slug}`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 text-left gap-4 border-b border-purple-400 py-4">
          <div className="col-span-1">
            <span className="text-purple-400 text-sm block group-hover:tex-purple-500">
              {project.startdate} - {project.enddate}
            </span>
            <div className="block md:hidden">
              <span className="text-gray-300 text-lg font-semibold block 0">
                {project.title}
                <MdOutlineArrowOutward className="inline-block ml-1 group-hover:transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
              </span>
            </div>
            <div className="hidden md:block text-gray-300 text-lg font-semibold">
              {project.title}
            </div>
          </div>

          <div className="hidden md:block col-span-1">
            <span className="text-gray-400 text-sm group-hover:text-gray-200">
              {project.madeAt}
            </span>
          </div>
        </div>
      </Link>
    );
  })
) : (
  <p>No projects found.</p>
)}
    </div>
  );
};

export default ProjectList;