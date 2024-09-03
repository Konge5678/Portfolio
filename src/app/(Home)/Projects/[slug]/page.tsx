import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import { Project } from "@/types/project-types";
import { client } from "@/sanity/lib/client";

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const blog: Project = await client.fetch(
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

  if (!blog) return notFound();

  return(
    <div>
      <h1 className="text-white">{blog.title}</h1>
      <p className="text-white">{blog.description}</p>
    </div>
  ) 
}