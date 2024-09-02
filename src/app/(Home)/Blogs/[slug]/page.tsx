import { client } from "@/sanity/lib/client";
import { Blog } from "@/types/blog.types";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";

export default async function BlogPage({params}: {params: {slug: string}}) {
    const blog: Blog = await client.fetch(
        groq`*[_type == "blog" && slug.current == $slug][0] {
          ...,
          "slug": slug.current,
          "tags": tags[]->{
            name, 
            "slug": slug.current,
        }
      }`, {slug: params.slug})

      console.log(blog)

      if(!blog) return notFound();

      return <p>{blog.title}</p>
}