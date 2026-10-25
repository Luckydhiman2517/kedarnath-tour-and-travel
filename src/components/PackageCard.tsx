"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowRight, CalendarDays, Clock, MapPin, Check } from "lucide-react";
import type { Pkg } from "@/lib/site";
import { waHref } from "@/lib/site";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export function PackageCard({ pkg, index = 0 }: { pkg: Pkg; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 220, damping: 20 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX}% ${glareY}%, rgba(255,255,255,.22), transparent 60%)`;

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set((px - 0.5) * 9);
    rotateX.set((0.5 - py) * 9);
    glareX.set(px * 100);
    glareY.set(py * 100);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
      style={{ rotateX, rotateY, transformPerspective: 1100 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_18px_50px_-30px_rgba(17,28,69,.5)] transition-shadow duration-500 hover:shadow-[0_34px_70px_-28px_rgba(17,28,69,.55)]"
    >
      <div className="relative h-56 overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-115"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/15 to-transparent" />

        {pkg.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
            {pkg.badge}
          </span>
        ) : null}

        <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-navy-800 backdrop-blur">
          {pkg.category}
        </span>

        <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-extrabold leading-tight text-white drop-shadow">
              {pkg.title}
            </h3>
            <p className="mt-1 truncate text-[13px] text-white/80">{pkg.subtitle}</p>
          </div>
        </div>
      </div>

      <motion.div style={{ background: glare }} className="pointer-events-none absolute inset-0" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[12.5px] font-semibold text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="size-4 text-saffron-500" />
            {pkg.days} Days
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-4 text-saffron-500" />
            {pkg.nights} Nights
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-4 text-saffron-500" />
            {pkg.route.length} Stops
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {pkg.route.slice(0, 4).map((r, i) => (
            <span
              key={`${r}-${i}`}
              className="rounded-lg bg-navy-50 px-2.5 py-1 text-[11.5px] font-semibold text-navy-700"
            >
              {r}
            </span>
          ))}
          {pkg.route.length > 4 ? (
            <span className="rounded-lg bg-saffron-50 px-2.5 py-1 text-[11.5px] font-bold text-saffron-700">
              +{pkg.route.length - 4}
            </span>
          ) : null}
        </div>

        <ul className="mt-4 space-y-2">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex gap-2 text-[13px] leading-snug text-slate-600">
              <Check className="mt-0.5 size-4 shrink-0 text-saffron-500" />
              {h}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-navy-50 pt-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
              Starting from
            </p>
            <p className="flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold text-navy-900">
                {inr(pkg.price)}
              </span>
              {pkg.oldPrice ? (
                <span className="text-sm font-semibold text-slate-400 line-through">
                  {inr(pkg.oldPrice)}
                </span>
              ) : null}
            </p>
            <p className="text-[11px] text-slate-400">per person</p>
          </div>

          <a
            href={waHref(`Hi, I'm interested in the ${pkg.title} (${pkg.days} days) package. Please share details.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn inline-flex shrink-0 items-center gap-1.5 rounded-full bg-navy-900 px-4 py-2.5 text-[13px] font-bold text-white transition hover:bg-saffron-600"
          >
            Enquire
            <ArrowRight className="size-4 transition group-hover/btn:translate-x-0.5" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
