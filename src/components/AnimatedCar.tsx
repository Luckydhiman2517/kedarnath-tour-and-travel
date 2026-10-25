"use client";

import { motion } from "motion/react";

type Palette = { body: string; roof: string; glass: string; accent: string };

const palettes: Record<string, Palette> = {
  navy: { body: "#1b2d6b", roof: "#16255a", glass: "#bcd3f5", accent: "#ff8012" },
  saffron: { body: "#ff8012", roof: "#e06a05", glass: "#ffe6c4", accent: "#1b2d6b" },
  white: { body: "#f8fafc", roof: "#e2e8f0", glass: "#9bbbe8", accent: "#ff8012" },
  red: { body: "#d33b32", roof: "#b02a22", glass: "#ffd9d5", accent: "#ffd166" },
};

/** A small SUV / taxi with wheels that actually spin. */
export function CarSvg({
  variant = "navy",
  className,
  spin = true,
}: {
  variant?: keyof typeof palettes;
  className?: string;
  spin?: boolean;
}) {
  const p = palettes[variant] ?? palettes.navy;
  return (
    <svg viewBox="0 0 220 96" className={className} aria-hidden="true">
      <ellipse cx="110" cy="88" rx="86" ry="6" fill="rgba(10,17,48,.18)" />
      {/* body */}
      <path
        d="M12 68c0-6 3-10 8-12l12-4 16-23c4-6 10-9 17-9h52c7 0 13 3 17 9l13 19 30 7c8 2 13 8 13 16v10c0 4-3 7-7 7h-14a20 20 0 0 0-40 0H78a20 20 0 0 0-40 0H19c-4 0-7-3-7-7z"
        fill={p.body}
      />
      <path
        d="M12 68c0-6 3-10 8-12l12-4 16-23c4-6 10-9 17-9h52c7 0 13 3 17 9l13 19 30 7c8 2 13 8 13 16v4H12z"
        fill={p.roof}
        opacity=".35"
      />
      {/* windows */}
      <path d="M62 27h38v22H48z" fill={p.glass} />
      <path d="M106 27h17c4 0 7 2 9 5l12 17h-38z" fill={p.glass} />
      <path d="M62 27h38v22H48z" fill="#fff" opacity=".22" />
      {/* door line + handle */}
      <path d="M103 27v41" stroke={p.roof} strokeWidth="2" opacity=".6" />
      <rect x="86" y="56" width="13" height="4" rx="2" fill="#fff" opacity=".6" />
      {/* lights */}
      <rect x="180" y="56" width="18" height="9" rx="4" fill="#fff3c4" />
      <rect x="14" y="56" width="12" height="8" rx="4" fill={p.accent} />
      {/* roof carrier with luggage */}
      <rect x="56" y="18" width="62" height="5" rx="2.5" fill={p.accent} />
      <rect x="64" y="8" width="20" height="11" rx="2" fill="#e2e8f0" />
      <rect x="88" y="11" width="24" height="8" rx="2" fill={p.accent} opacity=".85" />
      {/* wheels */}
      <Wheel cx={58} cy={74} spin={spin} />
      <Wheel cx={158} cy={74} spin={spin} />
    </svg>
  );
}

function Wheel({ cx, cy, spin }: { cx: number; cy: number; spin: boolean }) {
  return (
    <g>
      <circle cx={cx} cy={cy} r="17" fill="#0a1130" />
      <circle cx={cx} cy={cy} r="9.5" fill="#cbd5e1" />
      <motion.g
        style={{ originX: `${cx}px`, originY: `${cy}px` }}
        animate={spin ? { rotate: 360 } : undefined}
        transition={{ duration: 0.75, repeat: Infinity, ease: "linear" }}
      >
        <rect x={cx - 1.6} y={cy - 9} width="3.2" height="18" rx="1.6" fill="#94a3b8" />
        <rect x={cx - 9} y={cy - 1.6} width="18" height="3.2" rx="1.6" fill="#94a3b8" />
        <rect
          x={cx - 1.6}
          y={cy - 9}
          width="3.2"
          height="18"
          rx="1.6"
          fill="#94a3b8"
          transform={`rotate(45 ${cx} ${cy})`}
        />
        <rect
          x={cx - 9}
          y={cy - 1.6}
          width="18"
          height="3.2"
          rx="1.6"
          fill="#94a3b8"
          transform={`rotate(45 ${cx} ${cy})`}
        />
      </motion.g>
      <circle cx={cx} cy={cy} r="3" fill="#ff8012" />
    </g>
  );
}

/** A tempo traveller / mini coach for variety on the road strip. */
export function VanSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 96" className={className} aria-hidden="true">
      <ellipse cx="120" cy="88" rx="96" ry="6" fill="rgba(10,17,48,.18)" />
      <path
        d="M14 26c0-6 5-11 11-11h150c7 0 13 3 17 9l20 28c3 4 5 9 5 14v10c0 4-3 7-7 7h-16a20 20 0 0 0-40 0H84a20 20 0 0 0-40 0H21c-4 0-7-3-7-7z"
        fill="#f8fafc"
      />
      <path d="M14 58h203v9H14z" fill="#ff8012" />
      <rect x="26" y="26" width="34" height="22" rx="3" fill="#9bbbe8" />
      <rect x="66" y="26" width="34" height="22" rx="3" fill="#9bbbe8" />
      <rect x="106" y="26" width="34" height="22" rx="3" fill="#9bbbe8" />
      <path d="M150 26h25c4 0 8 2 10 6l12 16h-47z" fill="#9bbbe8" />
      <rect x="14" y="26" width="203" height="6" fill="#1b2d6b" opacity=".25" />
      <Wheel cx={64} cy={74} spin />
      <Wheel cx={172} cy={74} spin />
    </svg>
  );
}
