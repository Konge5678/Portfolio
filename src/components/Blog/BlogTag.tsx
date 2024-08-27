import React from "react";

export default function Tag({ tag }) {
  return (
    <span className=" border-2 border-yellow-400 text-white text-sm px-3 py-1 rounded-full">
      {tag}
    </span>
  );
}
