import Image from "next/image";
import { Phone, Sparkles } from "lucide-react";
import { img, site, telHref, waHref } from "@/lib/site";
import { Reveal } from "./Reveal";
import { CarSvg } from "./AnimatedCar";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative isolate">
        <Image
          src={img.heroPeaks}
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-900/70" />

        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
          <div className="max-w-2xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-saffron-500/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-saffron-300 ring-1 ring-saffron-400/30">
                <Sparkles className="size-3.5" />
                Season {site.copyrightYear} bookings open
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-white text-balance sm:text-4xl lg:text-5xl">
                Dates fill fast in
                <span className="gold-text"> May, June and September</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-navy-100/85 text-pretty">
                Tell us when you want to travel and how many of you there are. We will hold your
                hotels and vehicle while you decide — no payment needed to get a quote.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={waHref("Hi! Please share your Char Dham Yatra packages and current rates.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-saffron-600/30 transition hover:-translate-y-1"
                >
                  Get a free quote
                </a>
                <a
                  href={telHref(site.phonePrimary)}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/20"
                >
                  <Phone className="size-4 text-saffron-300" />
                  Talk to {site.owner.split(" ")[0]}
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 w-32 animate-[drive_18s_linear_infinite] opacity-90 sm:w-44" aria-hidden="true">
          <CarSvg variant="white" className="h-auto w-full" />
        </div>
      </div>
    </section>
  );
}
