"use client";

import { MountainSnow } from "lucide-react";

const destinations = [
  "Kedarnath",
  "Badrinath",
  "Gangotri",
  "Yamunotri",
  "Haridwar",
  "Rishikesh",
  "Mussoorie",
  "Auli",
  "Valley of Flowers",
  "Hemkund Sahib",
  "Nainital",
  "Chopta",
  "Tungnath",
  "Dehradun",
];

export function Marquee() {
  const row = [...destinations, ...destinations];
  return (
    <div className="relative overflow-hidden border-y border-navy-800 bg-navy-900 py-4">
      <div className="mask-fade-x flex">
        <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
          {row.map((d, i) => (
            <span
              key={`${d}-${i}`}
              className="flex shrink-0 items-center gap-3 text-sm font-bold uppercase tracking-[0.2em] text-navy-100/70"
            >
              <MountainSnow className="size-4 text-saffron-500" />
              {d}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
