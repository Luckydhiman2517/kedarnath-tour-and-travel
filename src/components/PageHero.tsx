import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CarSvg } from "./AnimatedCar";

export function PageHero({
  title,
  subtitle,
  image,
  crumb,
}: {
  title: string;
  subtitle: string;
  image: string;
  crumb: string;
}) {
  return (
    <section className="relative isolate flex min-h-[62vh] items-end overflow-hidden bg-navy-950 pb-16 pt-40 sm:min-h-[66vh] sm:pb-20">
      <div className="absolute inset-0 -z-10 animate-[kenburns_22s_ease-in-out_infinite_alternate]">
        <Image src={image} alt="" fill priority sizes="100vw" className="object-cover" />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/80" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs font-semibold text-white/60">
            <Link href="/" className="transition hover:text-saffron-300">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-saffron-300">{crumb}</span>
          </nav>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-4 max-w-3xl font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-100/85 text-pretty sm:text-lg">
            {subtitle}
          </p>
        </Reveal>
      </div>

      <div className="absolute inset-x-0 bottom-0" aria-hidden="true">
        <div className="relative h-9 bg-navy-950/80">
          <div className="road-dashes absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-50" />
          <div className="absolute bottom-2 left-0 w-24 animate-[drive_17s_linear_infinite] sm:w-32">
            <CarSvg variant="saffron" className="h-auto w-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
