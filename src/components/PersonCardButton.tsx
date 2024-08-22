"use client";

import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}

const Button = ({ text, onClick, className }: ButtonProps) => {
  return (
    <button
      onClick={() => onClick()}
      className={`flex items-center ${className} p-2 bg-transparent hover:text-white group`}>
      <span className="w-10 h-0.5 bg-zinc-500 mr-2 transition-all duration-300 group-hover:bg-white group-hover:w-20"></span>
      <span className="text-zinc-500 text-lg font-medium transition-all duration-300 group-hover:text-white">
        {text}
      </span>
    </button>
  );
};

export default Button;
