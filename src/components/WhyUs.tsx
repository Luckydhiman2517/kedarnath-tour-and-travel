import Image from "next/image";
import { BadgeIndianRupee, HeartHandshake, Headset, ShieldCheck } from "lucide-react";
import { img, site } from "@/lib/site";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Local drivers, local knowledge",
    desc: "Our drivers live on these roads. They know the weather windows, the safe halts and the shortest darshan queues.",
  },
  {
    icon: BadgeIndianRupee,
    title: "Honest, all-in pricing",
    desc: "One quote covering vehicle, hotels, meals and permits. No surprise charges at the hotel desk or the helipad.",
  },
  {
    icon: Headset,
    title: "Someone on call, always",
    desc: "A real person on WhatsApp through your whole trip — from the moment you board till you are home safe.",
  },
  {
    icon: HeartHandshake,
    title: "Built for families & elders",
    desc: "Shorter driving days, ponies and palkis arranged, oxygen support on request and patience at every stop.",
  },
];

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* image collage */}
          <Reveal direction="right">
            <div className="relative">
              <div className="relative aspect-4/5 overflow-hidden rounded-[2rem] shadow-2xl sm:aspect-4/3 lg:aspect-4/5">
                <Image
                  src={img.river}
                  alt="A Himalayan river valley on the way to Kedarnath"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[2s] hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
              </div>

              <div className="absolute -bottom-8 -right-3 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:-right-8 sm:w-56">
                <div className="relative aspect-4/3">
                  <Image
                    src={img.mistyHills}
                    alt="Misty Himalayan foothills"
                    fill
                    sizes="224px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="absolute -left-3 top-8 rounded-2xl bg-white/95 px-5 py-4 shadow-2xl ring-1 ring-navy-100 backdrop-blur sm:-left-8 animate-float">
                <p className="font-display text-3xl font-extrabold text-navy-900">
                  {site.copyrightYear - site.established}
                  <span className="text-saffron-500">+</span>
                </p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Years on
                  <br /> the Yatra route
                </p>
              </div>
            </div>
          </Reveal>

          {/* copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-saffron-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-saffron-700 ring-1 ring-saffron-200">
                <span className="size-1.5 rounded-full bg-saffron-500" />
                Why travel with us
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.12] tracking-tight text-navy-900 text-balance sm:text-4xl lg:text-[2.6rem]">
                A Haridwar family that treats your
                <span className="text-saffron-600"> Yatra like their own</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 text-base leading-relaxed text-slate-600 text-pretty">
                {site.name} began with one vehicle and a simple promise — that no pilgrim should
                have to worry about logistics on a journey this important. Today we run hundreds of
                departures a season, and that promise has not changed.
              </p>
            </Reveal>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {reasons.map((r, i) => (
                <Reveal key={r.title} delay={0.2 + i * 0.08}>
                  <div className="group flex h-full gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition hover:border-saffron-200 hover:shadow-lg">
                    <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-saffron-500 group-hover:text-white">
                      <r.icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-[15px] font-bold text-navy-900">{r.title}</h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{r.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
