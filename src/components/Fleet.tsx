"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Briefcase, Check, Phone, Snowflake, UserRound } from "lucide-react";
import { site, telHref, vehicles, waHref, type Vehicle } from "@/lib/site";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

function VehicleCard({ v, index }: { v: Vehicle; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-navy-100 bg-white shadow-[0_18px_50px_-30px_rgba(17,28,69,.5)] transition-shadow duration-500 hover:shadow-[0_34px_70px_-28px_rgba(17,28,69,.55)]"
    >
      {/* photograph, on a strip of road */}
      <div className="relative">
        <div className="relative aspect-16/10 overflow-hidden">
          <Image
            src={v.image}
            alt={`${v.maker} ${v.name} — ${v.type}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-108"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent" />

          {v.badge ? (
            <span className="absolute left-5 top-5 rounded-full bg-gradient-to-r from-saffron-500 to-saffron-600 px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
              {v.badge}
            </span>
          ) : null}

          {v.credit ? (
            <a
              href={v.credit.href}
              target="_blank"
              rel="noopener noreferrer license"
              className="absolute bottom-2 right-3 text-[9px] font-medium text-white/60 transition hover:text-white"
            >
              Photo: {v.credit.author} / {v.credit.licence}
              {v.credit.modified ? ", edited" : null}
            </a>
          ) : null}
        </div>

        {/* road */}
        <div className="relative h-7 bg-navy-800">
          <div className="road-dashes absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 opacity-70" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-saffron-600">
          {v.maker}
        </p>
        <h3 className="mt-1 font-display text-2xl font-extrabold text-navy-900">{v.name}</h3>
        <p className="mt-1 text-sm text-slate-500">{v.type}</p>

        <dl className="mt-5 grid grid-cols-3 gap-2 rounded-2xl bg-navy-50/70 p-3 text-center">
          {[
            { icon: UserRound, label: "Seats", value: v.seats },
            { icon: Briefcase, label: "Luggage", value: v.luggage },
            { icon: Snowflake, label: "Climate", value: "AC throughout" },
          ].map((spec) => (
            <div key={spec.label} className="px-1">
              <spec.icon className="mx-auto size-4 text-saffron-500" />
              <dt className="mt-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                {spec.label}
              </dt>
              <dd className="mt-0.5 text-[12px] font-bold leading-tight text-navy-900">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-5 space-y-2">
          {v.features.map((f) => (
            <li key={f} className="flex gap-2 text-[13.5px] leading-snug text-slate-600">
              <Check className="mt-0.5 size-4 shrink-0 text-saffron-500" />
              {f}
            </li>
          ))}
        </ul>

        <p className="mt-5 rounded-xl bg-saffron-50 px-4 py-3 text-[13px] leading-relaxed text-saffron-900 ring-1 ring-saffron-100">
          <span className="font-bold">Best for: </span>
          {v.bestFor}
        </p>

        <div className="mt-auto flex items-center gap-2 border-t border-navy-50 pt-5">
          <a
            href={waHref(`Hi, I would like to book the ${v.maker} ${v.name} for a Yatra. Please share the rates.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-navy-900 px-4 py-3 text-center text-[13px] font-bold text-white transition hover:bg-saffron-600"
          >
            Book this vehicle
          </a>
          <a
            href={telHref(site.phonePrimary)}
            aria-label={`Call about the ${v.name}`}
            className="grid size-11 shrink-0 place-items-center rounded-full bg-navy-50 text-navy-800 transition hover:bg-saffron-500 hover:text-white"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export function Fleet() {
  return (
    <section id="vehicles" className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="pointer-events-none absolute -left-24 top-32 size-80 rounded-full bg-navy-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 size-80 rounded-full bg-saffron-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Our vehicles"
          title={
            <>
              The cars that take you <span className="text-saffron-600">up the mountain</span>
            </>
          }
          subtitle="Clean, air-conditioned and serviced before every departure, driven by men who have run these roads for years."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {vehicles.map((v, i) => (
            <VehicleCard key={v.slug} v={v} index={i} />
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-sm text-slate-500">
            Need something larger? We also arrange Tempo Travellers and buses for groups —{" "}
            <a
              href={telHref(site.phonePrimary)}
              className="font-bold text-navy-900 underline decoration-saffron-400 decoration-2 underline-offset-4 transition hover:text-saffron-600"
            >
              call +91 {site.phonePrimary}
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
