"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto mt-14 max-w-3xl divide-y divide-navy-100 overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_20px_60px_-40px_rgba(17,28,69,.6)]">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-4 px-6 py-5 text-left transition hover:bg-navy-50/60"
            >
              <span
                className={`font-display text-base font-bold transition ${
                  isOpen ? "text-saffron-600" : "text-navy-900"
                }`}
              >
                {f.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{ duration: 0.3 }}
                className={`ml-auto grid size-8 shrink-0 place-items-center rounded-full transition ${
                  isOpen ? "bg-saffron-500 text-white" : "bg-navy-50 text-navy-700"
                }`}
              >
                <Plus className="size-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-[14.5px] leading-relaxed text-slate-600">{f.a}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
