import { Clock3, Mail, MapPin, Phone, UserRound } from "lucide-react";
import { site, telHref } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ContactCards() {
  const items = [
    {
      icon: UserRound,
      label: "Speak to",
      lines: [site.owner],
      href: undefined,
    },
    {
      icon: Phone,
      label: "Call us",
      lines: [`+91 ${site.phonePrimary}`, `+91 ${site.phoneSecondary}`],
      href: telHref(site.phonePrimary),
    },
    {
      icon: Mail,
      label: "Email",
      lines: [site.email],
      href: `mailto:${site.email}`,
    },
    {
      icon: MapPin,
      label: "Office",
      lines: [site.address],
      href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapsQuery)}`,
    },
    {
      icon: Clock3,
      label: "Open",
      lines: ["Mon – Sun · 7:00 am to 9:00 pm"],
      href: undefined,
    },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => {
        const inner = (
          <div className="group flex h-full items-start gap-4 rounded-2xl border border-navy-100 bg-white p-5 transition hover:-translate-y-1 hover:border-saffron-200 hover:shadow-lg">
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-navy-50 text-navy-700 transition group-hover:bg-saffron-500 group-hover:text-white">
              <item.icon className="size-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {item.label}
              </p>
              {item.lines.map((l) => (
                <p key={l} className="truncate font-display text-[14.5px] font-bold text-navy-900">
                  {l}
                </p>
              ))}
            </div>
          </div>
        );
        return (
          <Reveal key={item.label} delay={i * 0.06} className={i === 4 ? "sm:col-span-2" : ""}>
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="block h-full"
              >
                {inner}
              </a>
            ) : (
              inner
            )}
          </Reveal>
        );
      })}
    </div>
  );
}
