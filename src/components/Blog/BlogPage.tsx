"use client"; 

import React, { useState } from 'react';
import BlogPageLayout from './BlogPageLayout';
import SearchBar from './SearchBar';
import BlogCard from './BlogCard';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const blogs = [
    {
      id: 1,
      title: 'Title for blog 1',
      date: 'Date when posted',
      tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
      link: '/blog/1',
    },
    {
      id: 2,
      title: 'Title for blog 2',
      date: 'Date when posted',
      tags: ['Tag1', 'Tag2', 'Tag3', 'Tag4'],
      link: '/blog/2',
    },
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-center text-4xl mb-8">My Blogs</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <BlogPageLayout>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map(blog => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              date={blog.date}
              tags={blog.tags}
              onClick={() => router.push(blog.link)}
            />
          ))
        ) : (
          <p className="text-center text-xl text-gray-500">No blogs found.</p>
        )}
      </BlogPageLayout>
    </div>
  );
}
