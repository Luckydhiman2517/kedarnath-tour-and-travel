"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "motion/react";
import { stats } from "@/lib/site";

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.9,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(
          decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("en-IN"),
        ),
    });
    return () => controls.stop();
  }, [inView, value, decimals]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative z-10 bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-100 shadow-[0_30px_70px_-35px_rgba(17,28,69,.6)] lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="group relative bg-white px-5 py-8 text-center transition hover:bg-navy-50 sm:px-8 sm:py-10"
            >
              <span className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-to-r from-saffron-400 to-saffron-600 transition-transform duration-500 group-hover:scale-x-100" />
              <p className="font-display text-3xl font-extrabold text-navy-900 sm:text-4xl lg:text-[2.6rem]">
                <Counter value={s.value} suffix={s.suffix} decimals={"decimals" in s ? s.decimals : 0} />
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 sm:text-[13px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
