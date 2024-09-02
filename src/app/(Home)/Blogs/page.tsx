import BlogPage from "@/components/Blog/BlogPage";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Blogs() {
  const blogs = await client.fetch(
    groq`*[_type == "blog"] {
      ...,
      "slug": slug.current,
      "tags": tags[]->{
        name, 
        "slug": slug.current,
    }
  }`)

  return (
    <div className="min-h-screen ">
      <div className="">
      <BlogPage blogs={blogs} />
      </div>
    </div>
  );
}
