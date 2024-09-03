import ProjectList from "@/components/ProjectList";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Projects() {
  const projects = await client.fetch(
    groq`*[_type == "project"] {
      ...,
      "slug": slug.current,
      "tags": tags[]->{
        name, 
        "slug": slug.current,
      }
    }`
  );

  return (
    <div className="min-h-screen">
      <h1 className="max-w-6-screen mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:mx-10 text-white text-5xl">
        All Projects
      </h1>
      <ProjectList projects={projects} />
      <div></div>
    </div>
  );
}