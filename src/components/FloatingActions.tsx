"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Phone } from "lucide-react";
import { site, telHref, waHref } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.22 3.08c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35M12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.37l-.36-.21-3.71.97.99-3.62-.23-.37a9.78 9.78 0 0 1-1.5-5.23c0-5.4 4.4-9.8 9.82-9.8 2.62 0 5.08 1.03 6.93 2.88a9.74 9.74 0 0 1 2.87 6.93c0 5.41-4.4 9.82-9.81 9.82M20.52 3.45A11.74 11.74 0 0 0 12.05 0C5.5 0 .18 5.32.18 11.86c0 2.09.55 4.13 1.59 5.93L.08 24l6.35-1.66a11.83 11.83 0 0 0 5.62 1.43h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.23-6.15-3.4-8.39" />
    </svg>
  );
}

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-16 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
        <AnimatePresence>
          {showTop ? (
            <motion.button
              type="button"
              initial={{ opacity: 0, scale: 0.6, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.6, y: 12 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to top"
              className="grid size-11 place-items-center rounded-full bg-navy-900 text-white shadow-xl ring-1 ring-white/10 transition hover:bg-navy-800"
            >
              <ArrowUp className="size-5" />
            </motion.button>
          ) : null}
        </AnimatePresence>

        <a
          href={telHref(site.phonePrimary)}
          aria-label={`Call ${site.name}`}
          className="group relative hidden size-13 place-items-center rounded-full bg-navy-800 text-white shadow-xl transition hover:scale-110 sm:grid sm:size-14"
        >
          <span className="absolute inset-0 animate-[pulse-ring_2.6s_infinite] rounded-full bg-navy-500/60" />
          <Phone className="relative size-5 transition group-hover:rotate-12" />
        </a>

        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="group relative hidden size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition hover:scale-110 sm:grid sm:size-14"
        >
          <span className="absolute inset-0 animate-[pulse-ring_2.6s_infinite] rounded-full bg-[#25D366]/70" />
          <WhatsAppIcon className="relative size-6" />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg transition group-hover:opacity-100 sm:block">
            Chat with us
          </span>
        </a>
      </div>

      {/* mobile sticky call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy-800 bg-navy-900/95 backdrop-blur sm:hidden">
        <a
          href={telHref(site.phonePrimary)}
          className="flex items-center justify-center gap-2 py-3.5 text-sm font-bold text-white"
        >
          <Phone className="size-4 text-saffron-400" /> Call Now
        </a>
        <a
          href={waHref()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 py-3.5 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="size-4" /> WhatsApp
        </a>
      </div>
    </>
  );
}
