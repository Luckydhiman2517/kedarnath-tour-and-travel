import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Marquee } from "@/components/Marquee";
import { CTABanner } from "@/components/CTABanner";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photographs from the Char Dham route, Haridwar, Rishikesh and our India tours — snow lines, river valleys and temple towns.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        crumb="Gallery"
        title="The road, the peaks, the darshan"
        subtitle="A look at the places we take our travellers — and the views they come back talking about."
        image={img.mistyHills}
      />

      <Marquee />

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Photo gallery"
            title={
              <>
                Moments worth the <span className="text-saffron-600">long drive</span>
              </>
            }
            subtitle="Tap any photograph to open it full screen. Use the arrow keys to move through the set."
          />
          <div className="mt-14">
            <GalleryGrid />
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
