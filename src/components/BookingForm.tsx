"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CircleCheckBig, Loader2, Send } from "lucide-react";
import { packages, site } from "@/lib/site";

type Status = "idle" | "sending" | "sent";

const fieldBase =
  "w-full rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition placeholder:text-slate-400 focus:border-saffron-400 focus:ring-4 focus:ring-saffron-100";

export function BookingForm() {
  const [status, setStatus] = useState<Status>("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const lines = [
      `*New enquiry — ${site.name}*`,
      ``,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      data.get("email") ? `Email: ${data.get("email")}` : "",
      `Package: ${data.get("package")}`,
      `Travel date: ${data.get("date") || "Flexible"}`,
      `Travellers: ${data.get("pax")}`,
      data.get("message") ? `` : "",
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ].filter(Boolean);

    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;

    setStatus("sending");
    window.setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setStatus("sent");
      form.reset();
      window.setTimeout(() => setStatus("idle"), 6000);
    }, 700);
  }

  return (
    <div className="relative overflow-hidden rounded-3xl border border-navy-100 bg-white p-6 shadow-[0_30px_80px_-45px_rgba(17,28,69,.8)] sm:p-8">
      <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-saffron-100/60 blur-3xl" />

      <div className="relative">
        <h3 className="font-display text-2xl font-extrabold text-navy-900">
          Plan my Yatra
        </h3>
        <p className="mt-2 text-sm text-slate-500">
          Fill this in and we will send you a day-by-day itinerary with the current rate card on
          WhatsApp — usually within an hour.
        </p>

        <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-1">
            <label htmlFor="name" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Full name *
            </label>
            <input id="name" name="name" required placeholder="Your name" className={fieldBase} />
          </div>

          <div className="sm:col-span-1">
            <label htmlFor="phone" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Mobile number *
            </label>
            <input
              id="phone"
              name="phone"
              required
              type="tel"
              inputMode="tel"
              pattern="[0-9+ ]{10,15}"
              placeholder="10-digit mobile"
              className={fieldBase}
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Email (optional)
            </label>
            <input id="email" name="email" type="email" placeholder="you@example.com" className={fieldBase} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="package" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Interested in
            </label>
            <select id="package" name="package" defaultValue={packages[0].title} className={fieldBase}>
              {packages.map((p) => (
                <option key={p.slug} value={`${p.title} (${p.days}D/${p.nights}N)`}>
                  {p.title} — {p.days}D / {p.nights}N
                </option>
              ))}
              <option value="Custom itinerary">Something custom — let&apos;s talk</option>
            </select>
          </div>

          <div>
            <label htmlFor="date" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Travel date
            </label>
            <input id="date" name="date" type="date" className={fieldBase} />
          </div>

          <div>
            <label htmlFor="pax" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Travellers
            </label>
            <select id="pax" name="pax" defaultValue="2" className={fieldBase}>
              {["1", "2", "3", "4", "5", "6-10", "11-20", "20+"].map((n) => (
                <option key={n} value={n}>
                  {n} {n === "1" ? "person" : "people"}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-500">
              Anything we should know?
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              placeholder="Senior citizens travelling, helicopter preferred, pickup city…"
              className={`${fieldBase} resize-none`}
            />
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={status !== "idle"}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-saffron-500 to-saffron-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-saffron-500/30 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="size-4 animate-spin" /> Opening WhatsApp…
                </>
              ) : status === "sent" ? (
                <>
                  <CircleCheckBig className="size-4" /> Enquiry ready to send
                </>
              ) : (
                <>
                  <Send className="size-4 transition group-hover:translate-x-0.5" />
                  Send enquiry on WhatsApp
                </>
              )}
            </button>
            <p className="mt-3 text-center text-[11.5px] text-slate-400">
              Your details open in WhatsApp so you can send them to us directly. No spam, ever.
            </p>
          </div>
        </form>

        <AnimatePresence>
          {status === "sent" ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-4 rounded-xl bg-green-50 px-4 py-3 text-center text-sm font-semibold text-green-700 ring-1 ring-green-200"
            >
              Thank you! If WhatsApp did not open, call us on +91 {site.phonePrimary}.
            </motion.p>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
