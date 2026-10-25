import {
  Coins,
  Globe,
  IdCard,
  Mountain,
  Package,
  Plane,
  SlidersHorizontal,
  TrainFront,
  Users,
} from "lucide-react";
import { services } from "@/lib/site";
import { Stagger, StaggerItem } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons = {
  mountain: Mountain,
  globe: Globe,
  users: Users,
  sliders: SlidersHorizontal,
  plane: Plane,
  train: TrainFront,
  idcard: IdCard,
  coins: Coins,
  package: Package,
} as const;

export function Services() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      {/* subtle grid + glow */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="pointer-events-none absolute left-1/2 top-0 size-[32rem] -translate-x-1/2 rounded-full bg-saffron-600/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          tone="dark"
          eyebrow="Our services"
          title={
            <>
              One desk for <span className="gold-text">every travel need</span>
            </>
          }
          subtitle="Beyond the Yatra, we handle tickets, documents and forex so your whole journey is arranged in one place."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = icons[s.icon as keyof typeof icons];
            return (
              <StaggerItem key={s.title}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:border-saffron-400/40 hover:bg-white/[0.07]">
                  <div className="absolute -right-10 -top-10 size-28 rounded-full bg-saffron-500/10 blur-2xl transition duration-500 group-hover:bg-saffron-500/25" />
                  <div className="relative flex items-start gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-navy-700 to-navy-900 ring-1 ring-white/10 transition duration-500 group-hover:from-saffron-500 group-hover:to-saffron-700">
                      <Icon className="size-5.5 text-saffron-300 transition duration-500 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{s.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-navy-100/70">{s.desc}</p>
                    </div>
                  </div>
                  <span className="absolute inset-x-6 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-saffron-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
