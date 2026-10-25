import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/PageHero";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { RoadDivider } from "@/components/RoadDivider";
import { CTABanner } from "@/components/CTABanner";
import { Reveal } from "@/components/Reveal";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Kedarnath Tour & Travels is a Haridwar-based family travel house running Char Dham Yatra and India tours since 2012.",
};

const timeline = [
  {
    year: "2012",
    title: "One vehicle, one promise",
    text: "Abhishek started driving pilgrims from Haridwar to Kedarnath in a single hired Sumo, handling every booking himself.",
  },
  {
    year: "2016",
    title: "The full Char Dham circuit",
    text: "A small fleet and tie-ups with hotels in Barkot, Uttarkashi and Guptkashi made the complete four-Dham circuit possible.",
  },
  {
    year: "2019",
    title: "Helicopter & senior-friendly Yatras",
    text: "Helicopter shuttles and palki support opened the Yatra to elderly pilgrims who could not make the trek.",
  },
  {
    year: "2023",
    title: "Beyond the Himalayas",
    text: "Golden Triangle, Kerala, Goa and international holidays joined the roster, along with ticketing and forex services.",
  },
  {
    year: "Today",
    title: "25,000 journeys later",
    text: "Hundreds of departures a season, and still the same phone number answered by the same family.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About"
        title="A Haridwar family in the Yatra business"
        subtitle={`Since ${site.established}, ${site.name} has been getting pilgrims up the mountain and home again — safely, comfortably and without surprises.`}
        image={img.heroGhat}
      />

      <Stats />

      {/* story */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our story"
            title={
              <>
                It began with a single car and a <span className="text-saffron-600">full tank</span>
              </>
            }
            subtitle="Every milestone below came from travellers who sent their families and friends back to us."
          />

          <div className="relative mt-16">
            <div className="absolute left-[21px] top-2 h-[calc(100%-2rem)] w-0.5 bg-gradient-to-b from-saffron-400 via-navy-300 to-transparent md:left-1/2 md:-translate-x-1/2" />
            <ul className="space-y-8">
              {timeline.map((t, i) => {
                const left = i % 2 === 0;
                return (
                  <li
                    key={t.year}
                    className="relative pl-16 md:grid md:grid-cols-2 md:gap-12 md:pl-0"
                  >
                    <span className="absolute left-0 top-1 z-10 grid size-11 place-items-center rounded-full bg-gradient-to-br from-navy-700 to-navy-900 font-display text-[11px] font-extrabold text-white shadow-lg ring-4 ring-white md:left-1/2 md:-translate-x-1/2">
                      {t.year === "Today" ? "Now" : t.year}
                    </span>
                    <Reveal
                      direction={left ? "left" : "right"}
                      className={left ? "md:col-start-1 md:text-right" : "md:col-start-2"}
                    >
                      <div className="rounded-2xl border border-navy-100 bg-white p-6 shadow-[0_16px_40px_-32px_rgba(17,28,69,.7)] transition hover:-translate-y-1 hover:border-saffron-200 hover:shadow-lg">
                        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-saffron-600">
                          {t.year}
                        </p>
                        <h3 className="mt-1.5 font-display text-lg font-extrabold text-navy-900">
                          {t.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">{t.text}</p>
                      </div>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <RoadDivider />
      <WhyUs />

      {/* owner note */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-50px_rgba(17,28,69,.8)] md:grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="relative h-64 md:h-auto">
              <Image
                src={img.heroPeaks}
                alt="The Himalayan range at sunrise"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 to-transparent" />
            </div>
            <div className="p-7 sm:p-10">
              <Reveal>
                <p className="font-display text-xl font-bold leading-relaxed text-navy-900 text-pretty sm:text-2xl">
                  &ldquo;The mountain does not care how big your company is. It cares whether your
                  driver is rested, your hotel is warm and someone picks up the phone at 2 am.
                  That is the whole job.&rdquo;
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <div className="mt-7 flex items-center gap-4 border-t border-navy-100 pt-6">
                  <span className="grid size-12 place-items-center rounded-full bg-gradient-to-br from-saffron-500 to-saffron-700 font-display text-base font-extrabold text-white">
                    AD
                  </span>
                  <div>
                    <p className="font-display text-base font-extrabold text-navy-900">
                      {site.owner}
                    </p>
                    <p className="text-sm text-slate-500">Founder · {site.name}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Services />

      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Traveller stories"
            title="What our pilgrims say"
            subtitle="Unedited words from families who travelled with us this season and the last."
          />
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
