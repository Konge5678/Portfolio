"use client";

import React from "react";

interface ExperienceCardTagProps {
    tag: string;
    link: string;
}

const ExperienceTag = ({ tag, link }: ExperienceCardTagProps) => {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-zinc-600 rounded-full px-4 py-1 hover:bg-zinc-500 transition-all duration-200"
        >
            {tag}
        </a>
    );
}

export default ExperienceTag;
