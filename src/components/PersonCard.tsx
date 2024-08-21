"use client";

import PersonCardButton from "./PersonCardButton";

export default function PersonCard() {
  return (
    <div className="bg-zinc-800 text-white w-[600px] p-4">
      <h1 className="text-6xl py-2">Kristian Haugsrud</h1>
      <h2 className="py-1 text-2xl">Junior Consoltant</h2>
      <p className="py-3 text-zinc-500 w-80">
        “A dollar won is twice as sweet as a dollar earned.” – Paul Newman
      </p>
    </div>
  );
}
