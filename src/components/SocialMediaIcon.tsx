"use client";

import React from "react";

interface SocialMediaIconProps {
  icon: React.ReactNode;
  link: string;
  altText: string;
}


const SocialMediaIcon = ({ icon, link, altText}: SocialMediaIconProps) => {
  return (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={altText}
        className="w-16 h-16 flex items-center justify-center rounded-full bg-zinc-900 hover:bg-zinc-700 transition-colors duration-300 m-2"
        >
        {icon}
    </a>
  );
};

export default SocialMediaIcon;