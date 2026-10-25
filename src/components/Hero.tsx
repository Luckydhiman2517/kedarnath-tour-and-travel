"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { img, site, telHref, waHref } from "@/lib/site";
import { CarSvg } from "./AnimatedCar";
import { HeroLogo } from "./HeroLogo";

const slides = [
  { src: img.heroPeaks, caption: "Himalayan sunrise above the clouds" },
  { src: img.heroTemple, caption: "Ancient shrines on the Yatra trail" },
  { src: img.heroGhat, caption: "Ganga Aarti at Har Ki Pauri, Haridwar" },
  { src: img.heroPass, caption: "High mountain passes of Uttarakhand" },
];

const trust = [
  { icon: ShieldCheck, text: "Govt. registered operator" },
  { icon: Star, text: "4.9★ from 2,400+ travellers" },
  { icon: MapPin, text: "Based in Haridwar" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pt-28 pb-28 sm:pt-32"
    >
      {/* background slideshow */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -top-[10%] h-[120%]">
        <AnimatePresence mode="sync">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 animate-[kenburns_18s_ease-in-out_infinite_alternate]">
              <Image
                src={slides[index].src}
                alt={slides[index].caption}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950/75 via-navy-950/30 to-navy-950/92" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(10,17,48,.6)_100%)]" />

      {/* drifting snow particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white/60 blur-[1px] animate-[float_9s_ease-in-out_infinite]"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 90}%`,
              width: `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              animationDelay: `${(i % 9) * 0.7}s`,
              opacity: 0.25 + (i % 5) * 0.1,
            }}
          />
        ))}
      </div>

      {/* floating helicopter */}
      <motion.div
        aria-hidden="true"
        initial={{ x: "-25vw", opacity: 0 }}
        animate={{ x: "115vw", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear", delay: 3 }}
        className="absolute top-[18%] left-0 hidden w-28 sm:block"
      >
        <div className="animate-[bob_2.2s_ease-in-out_infinite]">
          <svg viewBox="0 0 160 80" className="h-auto w-full drop-shadow-2xl">
            <motion.g
              style={{ originX: "76px", originY: "22px" }}
              animate={{ scaleX: [1, 0.12, 1] }}
              transition={{ duration: 0.22, repeat: Infinity, ease: "linear" }}
            >
              <rect x="16" y="20" width="120" height="3.5" rx="1.75" fill="#e2e8f0" />
            </motion.g>
            <rect x="74" y="22" width="4" height="10" fill="#94a3b8" />
            <path
              d="M40 34c0-5 6-9 14-9h26c10 0 18 5 23 13l12 18c2 3 0 6-3 6H52c-8 0-12-5-12-11z"
              fill="#d33b32"
            />
            <path d="M104 36l18 20h-22z" fill="#b02a22" />
            <rect x="52" y="30" width="22" height="14" rx="3" fill="#bcd3f5" />
            <path d="M110 54h40v7h-40z" fill="#d33b32" />
            <motion.g
              style={{ originX: "152px", originY: "50px" }}
              animate={{ rotate: 360 }}
              transition={{ duration: 0.18, repeat: Infinity, ease: "linear" }}
            >
              <rect x="146" y="40" width="3" height="20" rx="1.5" fill="#e2e8f0" />
            </motion.g>
            <rect x="52" y="60" width="56" height="3.5" rx="1.75" fill="#64748b" />
            <path d="M60 56v6M100 56v6" stroke="#64748b" strokeWidth="3" />
          </svg>
        </div>
      </motion.div>

      {/* content */}
      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="relative z-10 w-full px-4 sm:px-6"
      >
        <HeroLogo />

        <div className="mx-auto mt-10 flex max-w-7xl flex-col items-center text-center sm:mt-12">

          <motion.h1
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.42 }}
            className="max-w-4xl font-display text-[2.1rem] font-extrabold leading-[1.1] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl"
          >
            Your <span className="gold-text">Char Dham Yatra</span>,
            <br className="hidden sm:block" /> planned to the last turn
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.54 }}
            className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/90 text-pretty sm:text-lg"
          >
            AC vehicles, verified hotels, pure-veg meals and darshan assistance — run by a
            Haridwar family that has guided pilgrims through the Himalayas since {site.established}.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.66 }}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
          >
            <Link
              href="/packages"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-saffron-600/40 transition hover:-translate-y-1 hover:shadow-saffron-500/50 sm:w-auto"
            >
              Explore Packages
              <ArrowRight className="size-5 transition group-hover:translate-x-1" />
            </Link>
            <a
              href={telHref(site.phonePrimary)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/20 sm:w-auto"
            >
              <Phone className="size-5 text-saffron-300" />
              +91 {site.phonePrimary}
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.82 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm text-white/75"
          >
            {trust.map((t) => (
              <li key={t.text} className="flex items-center gap-2">
                <t.icon className="size-4 text-saffron-400" />
                {t.text}
              </li>
            ))}
          </motion.ul>
        </div>
      </motion.div>

      {/* slide dots */}
      <div className="absolute bottom-28 left-1/2 z-10 flex -translate-x-1/2 gap-2.5">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}: ${s.caption}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === index ? "w-10 bg-saffron-500" : "w-4 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* road + car at the foot of the hero */}
      <div className="absolute inset-x-0 bottom-0 z-10" aria-hidden="true">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none" className="h-10 w-full">
          <path d="M0 70V34c240-26 480 14 720 6s480-40 720-14v44z" fill="#0a1130" />
        </svg>
        <div className="relative h-12 bg-navy-950">
          <div className="road-dashes absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-60" />
          <div className="absolute bottom-3 left-0 w-28 animate-[drive_14s_linear_infinite] sm:w-36">
            <CarSvg variant="saffron" className="h-auto w-full" />
          </div>
          <div
            className="absolute bottom-2 left-0 w-24 animate-[drive_22s_linear_infinite] sm:w-28"
            style={{ animationDelay: "-7s" }}
          >
            <CarSvg variant="white" className="h-auto w-full" />
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#highlights"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-[4.5rem] right-6 z-10 hidden flex-col items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-white/60 lg:flex"
      >
        Scroll
        <span className="flex h-10 w-6 justify-center rounded-full border border-white/40 p-1.5">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
            className="block size-1.5 rounded-full bg-saffron-400"
          />
        </span>
      </motion.a>

      <a
        href={waHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="sr-only"
      >
        WhatsApp enquiry
      </a>
    </section>
  );
}
