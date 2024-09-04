"use client"; 

import React, { useState } from 'react';
import BlogPageLayout from './BlogPageLayout';
import SearchBar from './SearchBar';
import BlogCard from './BlogCard';
import { useRouter } from 'next/navigation';
import { Blog } from '@/types/blog-types';

export default function BlogPage({ blogs }: { blogs: Blog[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags?.some(tag => tag.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-center text-4xl text-white mb-8">My Blogs</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogPageLayout>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <BlogCard
              key={blog.id} // Ensure each BlogCard has a unique key
              {...blog}
            />
          ))
        ) : (
          <p className="text-center text-xl text-gray-500">No blogs found.</p>
        )}
      </BlogPageLayout>
    </div>
  );
}