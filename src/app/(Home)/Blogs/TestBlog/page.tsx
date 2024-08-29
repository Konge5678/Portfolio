"use client";

import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function TestBlog() {


  const blogPost = {
    title: 'How to Create an Awesome Portfolio',
    author: 'Kristian Haugsrud',
    date: '27.08.24',
    content: `
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
      Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
      Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.
    `,
    
    imageUrl: 'https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/02/Best-free-portfolio-webiste-3.jpg',
  };

  return (
    <div className="flex flex-col mx-auto py-8 px-4 ">
      <a href='/Blogs' className="text-gray-400 text-left hover:text-yellow-300 transition-colors duration-300 mb-4 cursor-pointer">
        ← Back to Blog Archive
      </a>

      <div className='bg-indigo-950 rounded-lg p-10 '>
      <h1 className="text-4xl font-bold text-white mb-2">{blogPost.title}</h1>
      <p className="text-lg text-gray-400 mb-6">{blogPost.author}</p>
      <div className="flex space-x-4 mb-6">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
        >
          <FaGithub className="w-6 h-6" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
        >
          <FaLinkedin className="w-6 h-6" />
        </a>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-300 transition-colors duration-300"
        >
          <FaInstagram className="w-6 h-6" />
        </a>
      </div>
      <div className="mb-6">
        <img
          src={blogPost.imageUrl}
          alt={blogPost.title}
          className="flex flex-grow w-screen object-contain justify-around rounded-md shadow-lg lg:pr-20"
        />
      </div>
      <div className="text-gray-300 text-lg leading-relaxed gap-4">
        {blogPost.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>
        </div>
    </div>
  );
}
