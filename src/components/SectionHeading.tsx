import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
              dark
                ? "bg-white/10 text-saffron-300 ring-1 ring-white/15"
                : "bg-saffron-50 text-saffron-700 ring-1 ring-saffron-200"
            }`}
          >
            <span className="size-1.5 rounded-full bg-saffron-500" />
            {eyebrow}
          </span>
        </Reveal>
      ) : null}
      <Reveal delay={0.08}>
        <h2
          className={`mt-4 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
            dark ? "text-white" : "text-navy-900"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {subtitle ? (
        <Reveal delay={0.14}>
          <p
            className={`mt-4 text-base leading-relaxed text-pretty sm:text-lg ${
              dark ? "text-navy-100/80" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={0.2}>
        <div
          className={`mt-6 flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}
        >
          <span className="h-[3px] w-10 rounded-full bg-saffron-500" />
          <span className="h-[3px] w-20 rounded-full bg-navy-600/30" />
          <span className="h-[3px] w-4 rounded-full bg-saffron-400" />
        </div>
      </Reveal>
    </div>
  );
}
