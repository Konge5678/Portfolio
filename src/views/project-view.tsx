import PortableText from "@/components/blocks/PortableText";
import { Project } from "@/types/project-types";

export default function ProjectView({project}: {project: Project}) {

    return (
        <div className="min-h-screen ">
        <div className=" mx-10 lg:mx-auto my-6 p-6 bg-indigo-900 text-white rounded-lg shadow-lg lg:w-1/3">
          <a href="/projects" className="text-sm hover:text-yellow-300 transition-colors duration-300">&larr; Back to project Archive</a>
          <h1 className="text-4xl font-bold mt-4">{project.title}</h1>
          <p className="text-sm text-purple-400 mt-2" suppressHydrationWarning>Made {project.startdate} - {project.enddate}</p>
    
          <div className="mt-6 space-y-4 portabletext">
            <PortableText value={project.content} />
          </div>
        </div>
        </div>
      );
}