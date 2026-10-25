import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { PackagesExplorer } from "@/components/PackagesExplorer";
import { SectionHeading } from "@/components/SectionHeading";
import { Inclusions } from "@/components/Inclusions";
import { RoadDivider } from "@/components/RoadDivider";
import { FAQ } from "@/components/FAQ";
import { CTABanner } from "@/components/CTABanner";
import { TermsCard } from "@/components/TermsCard";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tour Packages",
  description:
    "Char Dham, Do Dham and Ek Dham Yatra packages from Haridwar, plus hill station and India tours — with AC transport, hotels, meals and darshan assistance.",
};

export default function PackagesPage() {
  return (
    <>
      <PageHero
        crumb="Packages"
        title="Yatra & holiday packages"
        subtitle="Fixed departures and private tours, all starting from Haridwar. Prices are indicative — share your dates for the current rate card."
        image={img.heroTemple}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Choose your journey"
            title={
              <>
                Pick a Dham, a hill or a <span className="text-saffron-600">whole new state</span>
              </>
            }
            subtitle="Filter by the kind of trip you have in mind. Every package can be customised for your group size, budget and pace."
          />
          <div className="mt-12">
            <PackagesExplorer />
          </div>
        </div>
      </section>

      <RoadDivider />
      <Inclusions />

      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Before you book"
                title="Questions pilgrims ask us most"
              />
              <div className="[&>div]:mx-0 [&>div]:max-w-none">
                <FAQ />
              </div>
            </div>
            <div className="lg:pt-20">
              <TermsCard />
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
