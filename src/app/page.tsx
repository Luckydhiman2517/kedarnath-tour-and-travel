import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Stats } from "@/components/Stats";
import { Inclusions } from "@/components/Inclusions";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { RoadDivider } from "@/components/RoadDivider";
import { WhyUs } from "@/components/WhyUs";
import { Services } from "@/components/Services";
import { GalleryGrid } from "@/components/GalleryGrid";
import { Testimonials } from "@/components/Testimonials";
import { CTABanner } from "@/components/CTABanner";
import { FAQ } from "@/components/FAQ";
import { BookingForm } from "@/components/BookingForm";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ContactCards } from "@/components/ContactCards";
import { TermsCard } from "@/components/TermsCard";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Stats />
      <Inclusions />
      <FeaturedPackages />
      <RoadDivider />
      <WhyUs />
      <Services />

      {/* gallery preview */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Moments from the road"
            title={
              <>
                Postcards from our <span className="text-saffron-600">travellers</span>
              </>
            }
            subtitle="Snow lines, river valleys, temple towns and the long drives in between."
          />
          <div className="mt-14">
            <GalleryGrid />
          </div>
          <Reveal delay={0.1}>
            <div className="mt-10 flex justify-center">
              <Link
                href="/gallery"
                className="group inline-flex items-center gap-2 rounded-full border-2 border-navy-900 px-8 py-3.5 text-sm font-bold text-navy-900 transition hover:bg-navy-900 hover:text-white"
              >
                Open full gallery
                <ArrowRight className="size-4 transition group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* testimonials */}
      <section className="overflow-hidden bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Traveller stories"
            title={
              <>
                25,000 pilgrims. <span className="text-saffron-600">One promise kept.</span>
              </>
            }
            subtitle="Reviews from families who trusted us with the most important journey of their lives."
          />
        </div>
        <div className="mt-14">
          <Testimonials />
        </div>
      </section>

      <CTABanner />

      {/* faq */}
      <section className="bg-navy-50/60 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Good to know"
            title="Questions pilgrims ask us most"
            subtitle="Still unsure about something? Call us — we would rather talk it through than have you guess."
          />
          <FAQ />
        </div>
      </section>

      <RoadDivider tone="dark" />

      {/* contact + booking */}
      <section id="enquiry" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Start your Yatra"
            title={
              <>
                Let&apos;s plan your <span className="text-saffron-600">journey together</span>
              </>
            }
            subtitle="Send us your dates and we will come back with a day-by-day itinerary and an honest, all-in price."
          />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <ContactCards />
              <TermsCard />
            </div>
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  );
}
