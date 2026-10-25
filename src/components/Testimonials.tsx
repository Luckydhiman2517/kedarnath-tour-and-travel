"use client";

import { Quote, Star } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/site";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[330px] shrink-0 flex-col rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(17,28,69,.6)] sm:w-[380px]">
      <Quote className="size-7 text-saffron-300" />
      <blockquote className="mt-3 flex-1 text-[14.5px] leading-relaxed text-slate-600">
        “{t.text}”
      </blockquote>
      <div className="mt-5 flex items-center gap-3 border-t border-navy-50 pt-4">
        <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-sm font-bold text-white">
          {t.name
            .split(" ")
            .map((w) => w[0])
            .slice(0, 2)
            .join("")}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate font-display text-sm font-bold text-navy-900">
            {t.name}
            <span className="ml-1.5 font-sans text-xs font-medium text-slate-400">· {t.city}</span>
          </figcaption>
          <p className="truncate text-[12px] text-slate-500">{t.trip}</p>
        </div>
        <div className="ml-auto flex shrink-0 gap-0.5">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-saffron-400 text-saffron-400" />
          ))}
        </div>
      </div>
    </figure>
  );
}

export function Testimonials() {
  const rowA = [...testimonials, ...testimonials];
  // Rotate + reverse so the second row never shows the same quote beside the first.
  const rotated = [...testimonials.slice(3), ...testimonials.slice(0, 3)].reverse();
  const rowB = [...rotated, ...rotated];

  return (
    <div className="space-y-5">
      <div className="mask-fade-x flex overflow-hidden">
        <div className="flex shrink-0 animate-marquee gap-5 pr-5 hover:[animation-play-state:paused]">
          {rowA.map((t, i) => (
            <Card key={`a-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
      <div className="mask-fade-x flex overflow-hidden">
        <div
          className="flex shrink-0 animate-marquee-slow gap-5 pr-5 hover:[animation-play-state:paused]"
          style={{ animationDirection: "reverse" }}
        >
          {rowB.map((t, i) => (
            <Card key={`b-${t.name}-${i}`} t={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
