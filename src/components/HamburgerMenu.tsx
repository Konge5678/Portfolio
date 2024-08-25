"use client";

import { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaFileAlt,
  FaProjectDiagram,
} from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 right-0 z-50 p-4">
      <button
        onClick={toggleMenu}
        className="text-white text-3xl focus:outline-none transition-transform duration-300 transform hover:scale-110">
        <div className="transition-opacity duration-300">
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-indigo-950 rounded-lg shadow-xl">
          <a
            href="/"
            className="flex items-center px-4 py-2 text-white hover:bg-indigo-800 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            <FaHome className="mr-2" /> Home
          </a>
          <a
            href="/Resume"
            className="flex items-center px-4 py-2 text-white hover:bg-indigo-800 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            <FaFileAlt className="mr-2" /> Resume
          </a>
          <a
            href="/Projects"
            className="flex items-center px-4 py-2 text-white hover:bg-indigo-800 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            <FaProjectDiagram className="mr-2" /> Projects
          </a>
          <a
            href="/Blogs"
            className="flex items-center px-4 py-2 text-white hover:bg-indigo-800 hover:text-yellow-300 transition-colors duration-300"
            onClick={() => setIsOpen(false)}>
            <BiLogoBlogger className="mr-2" /> Blogs
          </a>
        </div>
      )}
    </div>
  );
}
