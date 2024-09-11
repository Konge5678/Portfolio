"use client";

import PortableText from "@/components/blocks/PortableText";
import { Blog } from "@/types/blog-types";

export default function BlogView({blog}: {blog: Blog}) {

    return (
      <div className="min-h-screen ">
        <div className=" mx-10 lg:mx-auto my-6 p-6 bg-indigo-900 text-white rounded-lg shadow-lg lg:w-1/3">
          <a href="/Blogs" className="text-sm hover:text-yellow-300 transition-colors duration-300">&larr; Back to Blog Archive</a>
          <h1 className="text-4xl font-bold mt-4">{blog.title}</h1>
          <p className="text-sm text-purple-400 mt-2" suppressHydrationWarning>By {blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
    
          <div className="mt-6 space-y-4 portabletext">
            <PortableText value={blog.content} />
          </div>
        </div>
        </div>
      );
}