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
        title: 'How to Create an Awesome Portfolio',
        date: '27.08.24',
        tags: ['Blog', 'Development', 'Tips'],
        link: '/Blogs/TestBlog',
      },
      {
        id: 2,
        title: 'Top 5 Web Development Trends for 2024',
        date: '29.08.24',
        tags: ['Web Development', 'Trends', 'Technology'],
        link: '/Blogs/2',
      },
      {
        id: 3,
        title: 'Boosting Your Productivity: A Developer’s Guide',
        date: '02.09.24',
        tags: ['Productivity', 'Development', 'Guides'],
        link: '/Blogs/3',
      },
      {
        id: 4,
        title: 'Understanding Cloud Computing: The Basics',
        date: '05.09.24',
        tags: ['Cloud Computing', 'Basics', 'Technology'],
        link: '/Blogs/4',
      },
      {
        id: 5,
        title: 'The Future of AI in Web Development',
        date: '10.09.24',
        tags: ['AI', 'Web Development', 'Future'],
        link: '/Blogs/5',
      },
      {
        id: 6,
        title: 'A Beginner’s Guide to Version Control with Git',
        date: '12.09.24',
        tags: ['Git', 'Version Control', 'Beginner'],
        link: '/Blogs/6',
      },
      
  ];

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="container mx-auto py-8 px-4 ">
      <h1 className="text-center text-4xl text-white mb-8">My Blogs</h1>
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
