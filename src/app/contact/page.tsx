import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BookingForm } from "@/components/BookingForm";
import { ContactCards } from "@/components/ContactCards";
import { TermsCard } from "@/components/TermsCard";
import { SectionHeading } from "@/components/SectionHeading";
import { FAQ } from "@/components/FAQ";
import { RoadDivider } from "@/components/RoadDivider";
import { Reveal } from "@/components/Reveal";
import { img, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description: `Call ${site.owner} on +91 ${site.phonePrimary} or send an enquiry to plan your Char Dham Yatra from Haridwar.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumb="Contact"
        title="Tell us when you want to travel"
        subtitle="Call, WhatsApp or send the form below. We reply with a day-by-day itinerary and an honest, all-in quote."
        image={img.river}
      />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-6">
              <SectionHeading
                align="left"
                eyebrow="Get in touch"
                title={
                  <>
                    We are in <span className="text-saffron-600">Haridwar</span>, where every
                    Yatra begins
                  </>
                }
                subtitle="Most travellers reach us on WhatsApp — it is the quickest way to get an itinerary and photographs of the hotels."
              />
              <ContactCards />
              <TermsCard />
            </div>

            <div className="lg:pt-4">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>

      {/* map */}
      <section className="bg-navy-50/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-navy-100 shadow-xl">
              <iframe
                title="Our location in Haridwar"
                src="https://www.google.com/maps?q=Haridwar,Uttarakhand,India&output=embed"
                className="h-[380px] w-full border-0 sm:h-[440px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </section>

      <RoadDivider />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Good to know"
            title="Before you call us"
            subtitle="A few answers that save everyone a phone call — though we are always happy to take one."
          />
          <FAQ />
        </div>
      </section>
    </>
  );
}
