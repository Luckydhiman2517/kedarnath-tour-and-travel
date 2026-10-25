"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Phone } from "lucide-react";
import { site, telHref } from "@/lib/site";

/**
 * The supplied logo is 1600x900 but the artwork only occupies x:288-1311,
 * y:73-806 — roughly 18% dead white on each side. These numbers crop the
 * image to the artwork (plus a little breathing room) so the mark fills its
 * box instead of floating in whitespace.
 */
const CROP = {
  boxW: 1063,
  boxH: 769,
  imgW: "150.52%",
  imgH: "117.04%",
  imgLeft: "-25.21%",
  imgTop: "-7.15%",
};

function BrandMark({ className }: { className?: string }) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: `${CROP.boxW} / ${CROP.boxH}` }}
    >
      <Image
        src="/images/logo.webp"
        alt={`${site.name} — Char Dham Yatra specialists`}
        width={1600}
        height={900}
        priority
        className="absolute max-w-none"
        style={{
          width: CROP.imgW,
          height: CROP.imgH,
          left: CROP.imgLeft,
          top: CROP.imgTop,
        }}
      />
    </div>
  );
}

/** Deterministic sparkle positions — no Math.random, so SSR and client agree. */
const sparkles = [
  { x: "2%", y: "-9%", size: 7, delay: 0 },
  { x: "31%", y: "106%", size: 5, delay: 1.1 },
  { x: "68%", y: "-8%", size: 8, delay: 2.3 },
  { x: "97%", y: "102%", size: 6, delay: 0.7 },
  { x: "14%", y: "104%", size: 5, delay: 1.7 },
  { x: "86%", y: "-7%", size: 6, delay: 2.9 },
];

export function HeroLogo() {
  const ref = useRef<HTMLDivElement>(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const spring = { stiffness: 150, damping: 20, mass: 0.6 };
  // A band this wide only needs a whisper of tilt, or it reads as a glitch.
  const rotateY = useSpring(useTransform(px, [0, 1], [-2.6, 2.6]), spring);
  const rotateX = useSpring(useTransform(py, [0, 1], [3, -3]), spring);
  const glareX = useTransform(px, [0, 1], ["8%", "92%"]);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  }

  function onLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative mx-auto w-full max-w-[1500px] [perspective:2200px]"
    >
      {/* rotating god-rays */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, delay: 0.5, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420%] w-[115%] -translate-x-1/2 -translate-y-1/2"
      >
        <div
          className="size-full animate-[spin_38s_linear_infinite]"
          style={{
            background:
              "repeating-conic-gradient(from 0deg, rgba(255,214,160,.16) 0deg 5deg, transparent 5deg 17deg)",
            maskImage: "radial-gradient(closest-side, #000 10%, transparent 68%)",
            WebkitMaskImage: "radial-gradient(closest-side, #000 10%, transparent 68%)",
          }}
        />
      </motion.div>

      {/* breathing saffron glow */}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [0.94, 1.04, 0.94] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[190%] w-[104%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,128,18,.5)_0%,rgba(255,128,18,.1)_48%,transparent_72%)] blur-2xl"
      />

      {/* entrance */}
      <motion.div
        initial={{ opacity: 0, y: 44, scale: 0.94, filter: "blur(14px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* idle float */}
        <div className="animate-[float_7s_ease-in-out_infinite]">
          {/* cursor tilt */}
          <motion.div
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative"
          >
            {/* rotating light edge */}
            <div className="relative overflow-hidden rounded-[26px] p-[2px] shadow-[0_34px_90px_-30px_rgba(0,0,0,.95)]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-[900%] w-[160%] -translate-x-1/2 -translate-y-1/2 animate-[spin_8s_linear_infinite]"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg 250deg, rgba(255,160,60,.9) 300deg, rgba(255,255,255,.95) 330deg, transparent 360deg)",
                }}
              />
              <div aria-hidden="true" className="absolute inset-0 rounded-[26px] ring-1 ring-white/40" />

              {/* the band */}
              <div className="relative flex flex-col items-center gap-4 overflow-hidden rounded-[24px] bg-white px-5 py-5 text-center sm:px-7 md:flex-row md:gap-7 md:text-left lg:px-10 lg:py-6">
                <BrandMark className="h-24 sm:h-28 lg:h-36" />

                <span
                  aria-hidden="true"
                  className="hidden h-28 w-px shrink-0 bg-gradient-to-b from-transparent via-navy-200 to-transparent md:block lg:h-32"
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-saffron-600 sm:text-[11px]">
                    Since {site.established} · {site.address}
                  </p>
                  <p className="mt-1.5 font-display text-xl font-extrabold leading-tight tracking-tight text-navy-900 sm:text-2xl lg:text-[1.9rem]">
                    Char Dham Yatra Specialists
                  </p>
                  <p className="mt-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-500 sm:text-xs lg:text-[13px]">
                    Yamunotri · Gangotri · Kedarnath · Badrinath
                  </p>
                </div>

                <a
                  href={telHref(site.phonePrimary)}
                  className="group/call hidden shrink-0 items-center gap-3 rounded-2xl bg-navy-50 px-5 py-3 ring-1 ring-navy-100 transition hover:bg-navy-900 lg:flex"
                >
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white">
                    <Phone className="size-4 transition group-hover/call:rotate-12" />
                  </span>
                  <span className="text-left">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 transition group-hover/call:text-navy-200">
                      Call for today&apos;s rates
                    </span>
                    <span className="block font-display text-base font-extrabold text-navy-900 transition group-hover/call:text-white">
                      +91 {site.phonePrimary}
                    </span>
                  </span>
                </a>

                {/* shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span className="absolute inset-y-0 -left-full w-1/4 bg-gradient-to-r from-transparent via-white/90 to-transparent animate-[shimmer_6s_ease-in-out_infinite]" />
                </span>

                {/* glare that tracks the cursor */}
                <motion.span
                  aria-hidden="true"
                  style={{ left: glareX }}
                  className="pointer-events-none absolute top-1/2 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,196,110,.28),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              </div>
            </div>

            {/* corner brackets */}
            {[
              "left-2 top-2 border-l-2 border-t-2 rounded-tl-xl",
              "right-2 top-2 border-r-2 border-t-2 rounded-tr-xl",
              "left-2 bottom-2 border-b-2 border-l-2 rounded-bl-xl",
              "right-2 bottom-2 border-b-2 border-r-2 rounded-br-xl",
            ].map((pos, i) => (
              <motion.span
                key={pos}
                aria-hidden="true"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 + i * 0.12, ease: "backOut" }}
                className={`pointer-events-none absolute size-7 border-saffron-400/80 ${pos}`}
                style={{ transform: "translateZ(30px)" }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* sparkles */}
      {sparkles.map((s) => (
        <motion.span
          key={`${s.x}-${s.y}`}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.15, 0.4] }}
          transition={{ duration: 3.6, repeat: Infinity, delay: s.delay, ease: "easeInOut" }}
          className="pointer-events-none absolute rounded-full bg-saffron-200 shadow-[0_0_14px_4px_rgba(255,160,60,.75)]"
          style={{ left: s.x, top: s.y, width: s.size, height: s.size }}
        />
      ))}

      {/* underline that draws itself */}
      <motion.span
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -bottom-4 left-1/2 h-[3px] w-[45%] -translate-x-1/2 origin-center rounded-full bg-gradient-to-r from-transparent via-saffron-400 to-transparent"
      />
    </div>
  );
}
