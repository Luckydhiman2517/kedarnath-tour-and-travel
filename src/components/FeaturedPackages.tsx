import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { packages } from "@/lib/site";
import { PackageCard } from "./PackageCard";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FeaturedPackages() {
  const featured = packages.filter((p) => p.featured);
  return (
    <section className="relative overflow-hidden bg-navy-50/60 py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-32 top-24 size-96 rounded-full bg-saffron-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 size-96 rounded-full bg-navy-200/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Most loved Yatras"
          title={
            <>
              Packages pilgrims <span className="text-saffron-600">book again and again</span>
            </>
          }
          subtitle="Fixed departures and private tours from Haridwar. Prices shown are indicative — share your dates and we will send the current rate card."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((p, i) => (
            <PackageCard key={p.slug} pkg={p} index={i} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 flex justify-center">
            <Link
              href="/packages"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-8 py-3.5 text-sm font-bold text-navy-900 transition hover:bg-navy-900 hover:text-white"
            >
              View all {packages.length} packages
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
