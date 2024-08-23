import React from "react";
import { FaHome, FaFolderOpen, FaBlog, FaFileAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 right-0 p-6 bg-indigo-950 rounded-bl-lg shadow-lg text-white flex space-x-6 z-50">
      <a
        href="/"
        className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2"
      >
        <FaHome className="text-2xl" />
        <span>Home</span>
      </a>
      <a
        href="/Projects"
        className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2"
      >
        <FaFolderOpen className="text-2xl" />
        <span>Project Archive</span>
      </a>
      <a
        href="/Blogs"
        className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2"
      >
        <FaBlog className="text-2xl" />
        <span>Blogs</span>
      </a>
      <a
        href="/Resume"
        className="text-indigo-300 hover:text-yellow-300 transition-colors duration-300 flex items-center space-x-2"
      >
        <FaFileAlt className="text-2xl" />
        <span>Resume</span>
      </a>
    </div>
  );
};

export default Header;
