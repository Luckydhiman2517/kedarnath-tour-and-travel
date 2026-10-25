"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { SearchX } from "lucide-react";
import { categories, packages } from "@/lib/site";
import { PackageCard } from "./PackageCard";

export function PackagesExplorer() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const list = useMemo(
    () => (active === "All" ? packages : packages.filter((p) => p.category === active)),
    [active],
  );

  return (
    <div>
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
        {categories.map((c) => {
          const isActive = c === active;
          const count = c === "All" ? packages.length : packages.filter((p) => p.category === c).length;
          return (
            <button
              key={c}
              type="button"
              onClick={() => setActive(c)}
              className={`relative shrink-0 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                isActive ? "text-white" : "text-navy-700 hover:bg-navy-50"
              }`}
            >
              {isActive ? (
                <motion.span
                  layoutId="pkg-filter"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-navy-700 to-navy-900 shadow-lg"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              ) : null}
              <span className="relative">
                {c}
                <span className={`ml-1.5 text-xs ${isActive ? "text-saffron-300" : "text-slate-400"}`}>
                  {count}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {list.map((p, i) => (
            <PackageCard key={p.slug} pkg={p} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {list.length === 0 ? (
        <div className="mt-16 flex flex-col items-center gap-3 text-slate-500">
          <SearchX className="size-10 text-navy-200" />
          <p className="font-semibold">No packages in this category yet.</p>
        </div>
      ) : null}
    </div>
  );
}
