import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { Project } from "@/types/project-types";
import { client } from "@/sanity/lib/client";
import ProjectView from "@/views/project-view";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project: Project = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
      ...,
      "slug": slug.current,
      "tags": tags[]->{
        name, 
        "slug": slug.current
      }
    }`,
    { slug: params.slug }
  );

  if (!project) return notFound();


return <ProjectView  project={project} />;
}