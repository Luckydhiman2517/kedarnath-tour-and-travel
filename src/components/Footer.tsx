import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { navItems, packages, site, telHref } from "@/lib/site";
import { CarSvg } from "./AnimatedCar";

const socials = [
  {
    name: "Facebook",
    href: "https://facebook.com",
    path: "M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.52 1.5-3.91 3.77-3.91 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.9h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94",
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16m0 6.19a3.65 3.65 0 1 0 0 7.3 3.65 3.65 0 0 0 0-7.3m0 6.02a2.37 2.37 0 1 1 0-4.74 2.37 2.37 0 0 1 0 4.74m4.65-6.17a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0",
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.51A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.51 9.38.51 9.38.51s7.5 0 9.38-.51a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8M9.6 15.6V8.4l6.2 3.6z",
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-navy-100">
      {/* ridge top edge */}
      <svg viewBox="0 0 1440 90" preserveAspectRatio="none" className="h-12 w-full fill-white">
        <path d="M0 0h1440v22L1180 70 940 28 700 74 460 30 220 72 0 26z" />
      </svg>

      {/* driving car accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-2 h-14 opacity-20" aria-hidden="true">
        <div className="absolute bottom-0 left-0 w-28 animate-[drive_30s_linear_infinite]">
          <CarSvg variant="white" className="h-auto w-full" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-10 sm:px-6 lg:pt-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-block rounded-2xl bg-white p-3 shadow-xl">
              <Image
                src="/images/logo.webp"
                alt={`${site.name} logo`}
                width={320}
                height={180}
                className="h-12 w-auto"
              />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-navy-200/80">
              A Haridwar-based family travel house arranging Char Dham Yatra, Himalayan holidays and
              India tours with AC transport, verified hotels and genuine care — since {site.established}.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="grid size-10 place-items-center rounded-xl bg-white/5 text-navy-100 ring-1 ring-white/10 transition hover:-translate-y-1 hover:bg-saffron-500 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="size-4.5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="inline-flex items-center gap-2 text-navy-200/80 transition hover:translate-x-1 hover:text-saffron-300"
                  >
                    <span className="text-saffron-500">›</span>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Top Packages
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {packages.slice(0, 5).map((p) => (
                <li key={p.slug}>
                  <Link
                    href="/packages"
                    className="inline-flex items-center gap-2 text-navy-200/80 transition hover:translate-x-1 hover:text-saffron-300"
                  >
                    <span className="text-saffron-500">›</span>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Reach Us
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-saffron-400" />
                <span className="text-navy-200/80">{site.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-saffron-400" />
                <span className="flex flex-col">
                  <a href={telHref(site.phonePrimary)} className="transition hover:text-saffron-300">
                    +91 {site.phonePrimary}
                  </a>
                  <a href={telHref(site.phoneSecondary)} className="transition hover:text-saffron-300">
                    +91 {site.phoneSecondary}
                  </a>
                </span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-saffron-400" />
                <a
                  href={`mailto:${site.email}`}
                  className="break-all text-navy-200/80 transition hover:text-saffron-300"
                >
                  {site.email}
                </a>
              </li>
            </ul>
            <p className="mt-5 text-xs text-navy-300/70">
              Proprietor: <span className="font-semibold text-white">{site.owner}</span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-300/70 sm:flex-row">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <p>Har Har Mahadev · Jai Badri Vishal 🙏</p>
        </div>
      </div>
    </footer>
  );
}
