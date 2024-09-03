import { client } from "@/sanity/lib/client";
import { Blog } from "@/types/blog-types";
import { groq } from "next-sanity";
import { notFound } from "next/navigation";
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);

function urlFor(source: string) {
  return builder.image(source);
}

export default async function BlogPage({ params }: { params: { slug: string } }) {
  const blog: Blog = await client.fetch(
    groq`*[_type == "blog" && slug.current == $slug][0] {
      ...,
      "slug": slug.current,
      "tags": tags[]->{
        name, 
        "slug": slug.current,
      }
    }`, { slug: params.slug }
  );

  if (!blog) return notFound();

  return (
    <div className=" mx-10 lg:mx-auto my-6 p-6 bg-indigo-900 text-white rounded-lg shadow-lg lg:w-1/3">
      <a href="/Blogs" className="text-sm hover:text-yellow-300 transition-colors duration-300">&larr; Back to Blog Archive</a>
      <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
      <p className="text-sm text-purple-400 mt-2">By {blog.author} - {new Date(blog.date).toLocaleDateString()}</p>

      {blog.image && (
        <div className="my-6">
          <img
            className="w-full h-auto rounded-lg"
            src={urlFor(blog.image).url()}
            alt={blog.title}
          />
        </div>
      )}

      <div className="mt-6 space-y-4">
        {Array.isArray(blog.content) ? blog.content.map((item, index) => (
          <div key={index}>
            {Array.isArray(item.children) ? item.children.map((child: any, childIndex: number) => (
              <p key={childIndex} className="text-lg leading-relaxed text-white">{child.text}</p>
            )) : <p>{item.children}</p>}
          </div>
        )) : <p>{blog.content}</p>}
      </div>
    </div>
  );
}
