"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { navItems, site, telHref, waHref } from "@/lib/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* contact ribbon */}
      <div
        className={`hidden overflow-hidden bg-navy-900 text-white transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-[13px]">
          <div className="flex items-center gap-6">
            <a href={telHref(site.phonePrimary)} className="group flex items-center gap-2 transition hover:text-saffron-300">
              <Phone className="size-3.5 text-saffron-400 transition group-hover:scale-110" />
              +91 {site.phonePrimary}
            </a>
            <a href={`mailto:${site.email}`} className="group flex items-center gap-2 transition hover:text-saffron-300">
              <Mail className="size-3.5 text-saffron-400 transition group-hover:scale-110" />
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-navy-100">
            <MapPin className="size-3.5 text-saffron-400" />
            {site.address}
          </div>
        </div>
      </div>

      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-white/90 shadow-[0_10px_40px_-18px_rgba(17,28,69,.5)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="group relative flex items-center" aria-label={site.name}>
            <motion.span
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 320, damping: 18 }}
              className="relative block rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-navy-900/10 sm:p-2"
            >
              <Image
                src="/images/logo.webp"
                alt={`${site.name} logo`}
                width={260}
                height={146}
                priority
                className="h-9 w-auto sm:h-11"
              />
              <span className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
                <span className="absolute inset-y-0 -left-full w-1/2 bg-gradient-to-r from-transparent via-white/70 to-transparent group-hover:animate-[shimmer_1.1s_ease-out]" />
              </span>
            </motion.span>
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                      scrolled
                        ? active
                          ? "text-navy-900"
                          : "text-slate-600 hover:text-navy-800"
                        : active
                          ? "text-white"
                          : "text-white/80 hover:text-white"
                    }`}
                  >
                    {item.label}
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-saffron-500"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={waHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-saffron-500/30 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-saffron-500/40 sm:inline-flex"
            >
              <Phone className="size-4 transition group-hover:rotate-12" />
              Book Now
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`inline-flex size-11 items-center justify-center rounded-xl transition lg:hidden ${
                scrolled || open ? "bg-navy-50 text-navy-900" : "bg-white/15 text-white backdrop-blur"
              }`}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <motion.div
          style={{ scaleX: progress }}
          className="h-[3px] origin-left bg-gradient-to-r from-saffron-400 via-saffron-500 to-navy-600"
        />
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="absolute inset-x-0 top-full origin-top border-t border-navy-100 bg-white px-4 pb-6 pt-3 shadow-2xl lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between border-b border-navy-50 py-3.5 text-base font-semibold ${
                      pathname === item.href ? "text-saffron-600" : "text-navy-900"
                    }`}
                  >
                    {item.label}
                    <span className="text-saffron-500">›</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="mt-5 grid gap-2">
              <a
                href={telHref(site.phonePrimary)}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-5 py-3 text-sm font-bold text-white"
              >
                <Phone className="size-4" /> Call +91 {site.phonePrimary}
              </a>
              <a
                href={waHref()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 px-5 py-3 text-sm font-bold text-white"
              >
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
