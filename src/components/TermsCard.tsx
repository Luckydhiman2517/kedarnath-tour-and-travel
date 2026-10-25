import { Check } from "lucide-react";
import { terms } from "@/lib/site";
import { Reveal } from "./Reveal";

export function TermsCard() {
  return (
    <Reveal delay={0.1}>
      <div className="rounded-2xl border border-navy-100 bg-navy-900 p-6 text-white">
        <h3 className="font-display text-base font-bold uppercase tracking-[0.14em] text-saffron-300">
          Terms &amp; Conditions
        </h3>
        <ul className="mt-4 space-y-2.5">
          {terms.map((t) => (
            <li key={t} className="flex gap-2.5 text-[13.5px] leading-relaxed text-navy-100/80">
              <Check className="mt-0.5 size-4 shrink-0 text-saffron-400" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
