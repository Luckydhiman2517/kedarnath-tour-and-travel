"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { img } from "@/lib/site";

const shots = [
  { src: img.heroTemple, label: "Himalayan shrine on the Yatra trail", span: "md:col-span-2 md:row-span-2" },
  { src: img.heroPeaks, label: "Sunrise over the Garhwal peaks", span: "" },
  { src: img.river, label: "Mandakini valley, Rudraprayag", span: "" },
  { src: img.heroGhat, label: "Ganga Aarti, Har Ki Pauri", span: "md:col-span-2" },
  { src: img.heroPass, label: "Snow line near the high passes", span: "" },
  { src: img.mistyHills, label: "Misty foothills at dawn", span: "" },
  { src: img.tajGate, label: "Taj Mahal, Agra", span: "" },
  { src: img.jaipur, label: "Hawa Mahal, Jaipur", span: "md:col-span-2" },
  { src: img.kerala, label: "Alleppey backwaters, Kerala", span: "" },
  { src: img.goa, label: "Beaches of Goa", span: "" },
];

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % shots.length)), []);
  const prev = useCallback(
    () => setOpen((i) => (i === null ? i : (i - 1 + shots.length) % shots.length)),
    [],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="grid auto-rows-[200px] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:auto-rows-[220px]">
        {shots.map((s, i) => (
          <motion.button
            type="button"
            key={s.src + i}
            onClick={() => setOpen(i)}
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
            className={`group relative overflow-hidden rounded-2xl ${s.span}`}
            aria-label={`Open ${s.label}`}
          >
            <Image
              src={s.src}
              alt={s.label}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-80 transition group-hover:opacity-95" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 text-left">
              <span className="translate-y-2 text-[13px] font-semibold leading-snug text-white opacity-0 transition duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {s.label}
              </span>
              <span className="grid size-8 shrink-0 translate-y-2 place-items-center rounded-full bg-saffron-500 text-white opacity-0 transition duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                <Expand className="size-4" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {open !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] grid place-items-center bg-navy-950/95 p-4 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous image"
              className="absolute left-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-saffron-500 sm:left-8"
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next image"
              className="absolute right-3 grid size-12 place-items-center rounded-full bg-white/10 text-white transition hover:bg-saffron-500 sm:right-8"
            >
              <ChevronRight className="size-6" />
            </button>

            <motion.figure
              key={open}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src={shots[open].src}
                  alt={shots[open].label}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4 text-center text-sm font-semibold text-white/80">
                {shots[open].label}
                <span className="ml-3 text-white/40">
                  {open + 1} / {shots.length}
                </span>
              </figcaption>
            </motion.figure>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
