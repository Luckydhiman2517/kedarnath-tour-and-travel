"use client";

import { CarSvg, VanSvg } from "./AnimatedCar";

/**
 * A full-bleed animated strip: layered Himalayan ridges, a winding road and
 * vehicles driving across it. Used to separate major sections.
 */
export function RoadDivider({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div
      className={`relative h-40 w-full overflow-hidden sm:h-52 ${
        dark ? "bg-navy-950" : "bg-gradient-to-b from-white to-navy-50"
      }`}
      aria-hidden="true"
    >
      {/* sun / moon */}
      <div
        className={`absolute left-[12%] top-6 size-14 rounded-full blur-[1px] ${
          dark ? "bg-slate-200/80" : "bg-gradient-to-br from-saffron-300 to-saffron-500"
        } animate-[float_7s_ease-in-out_infinite]`}
      />
      {/* ridges */}
      <svg
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-10 h-32 w-full sm:h-40"
      >
        <path
          d="M0 180 L160 90 L260 140 L380 60 L500 150 L620 70 L760 160 L880 100 L1020 150 L1160 80 L1300 140 L1440 90 L1440 220 L0 220Z"
          fill={dark ? "#111c45" : "#d8e1f6"}
        />
        <path
          d="M0 200 L140 140 L300 185 L430 120 L560 180 L700 130 L840 190 L980 140 L1120 185 L1280 135 L1440 180 L1440 220 L0 220Z"
          fill={dark ? "#16255a" : "#b2c3ea"}
        />
        <path d="M380 60 L420 90 L400 95 L380 86 L360 95 L340 90Z" fill="#ffffff" opacity=".9" />
        <path d="M620 70 L660 100 L640 104 L620 96 L600 104 L580 100Z" fill="#ffffff" opacity=".9" />
        <path d="M1160 80 L1200 110 L1180 114 L1160 106 L1140 114 L1120 110Z" fill="#ffffff" opacity=".9" />
      </svg>

      {/* tree line */}
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-[38px] h-8 w-full sm:bottom-[46px]"
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 40 + 8} 60 L${i * 40 + 20} ${22 + (i % 4) * 6} L${i * 40 + 32} 60Z`}
            fill={dark ? "#0a1130" : "#2f4aa3"}
            opacity={dark ? 1 : 0.35}
          />
        ))}
      </svg>

      {/* road */}
      <div className={`absolute inset-x-0 bottom-0 h-10 ${dark ? "bg-navy-900" : "bg-navy-800"}`}>
        <div className="absolute inset-x-0 top-0 h-px bg-white/25" />
        <div className="road-dashes absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-70" />
      </div>

      {/* traffic */}
      <div className="absolute bottom-[14px] left-0 w-28 animate-[drive_16s_linear_infinite] sm:w-36">
        <CarSvg variant={dark ? "saffron" : "navy"} className="h-auto w-full" />
      </div>
      <div
        className="absolute bottom-[12px] left-0 w-32 animate-[drive_26s_linear_infinite] sm:w-44"
        style={{ animationDelay: "-13s" }}
      >
        <VanSvg className="h-auto w-full" />
      </div>
      <div
        className="absolute bottom-[16px] left-0 w-24 animate-[drive_20s_linear_infinite] sm:w-28"
        style={{ animationDelay: "-6s" }}
      >
        <CarSvg variant="red" className="h-auto w-full" />
      </div>
    </div>
  );
}
