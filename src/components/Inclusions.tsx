import { Camera, Car, Hotel, UserCheck, UtensilsCrossed } from "lucide-react";
import { inclusions } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  hotel: Hotel,
  utensils: UtensilsCrossed,
  car: Car,
  camera: Camera,
  guide: UserCheck,
} as const;

export function Inclusions() {
  return (
    <section id="highlights" className="relative bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="What's included"
          title={
            <>
              Everything taken care of,
              <br className="hidden sm:block" /> from <span className="text-saffron-600">Haridwar and back</span>
            </>
          }
          subtitle="Every package we run comes with the essentials sorted, so the only thing left for you to do is the darshan."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
          {inclusions.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <StaggerItem key={item.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-navy-100 bg-white p-6 text-center transition duration-400 hover:-translate-y-2 hover:border-saffron-200 hover:shadow-[0_24px_50px_-24px_rgba(255,128,18,.55)]">
                  <div className="absolute inset-x-0 -top-20 h-32 bg-gradient-to-b from-saffron-100/70 to-transparent opacity-0 transition duration-500 group-hover:top-0 group-hover:opacity-100" />
                  <div className="relative mx-auto grid size-14 place-items-center rounded-2xl bg-navy-50 text-navy-700 ring-1 ring-navy-100 transition duration-400 group-hover:bg-gradient-to-br group-hover:from-saffron-500 group-hover:to-saffron-600 group-hover:text-white group-hover:ring-saffron-300">
                    <Icon className="size-6 transition duration-400 group-hover:scale-110" />
                  </div>
                  <h3 className="relative mt-4 font-display text-[15px] font-bold leading-snug text-navy-900">
                    {item.title}
                  </h3>
                  <p className="relative mt-1.5 text-[13px] leading-relaxed text-slate-500">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
