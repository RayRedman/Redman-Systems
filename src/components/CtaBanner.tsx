import { ArrowRight } from "lucide-react";

const BOOKING_URL = "https://calendar.app.google/FjWiV4z2TiRcc3qe7";

export default function CtaBanner() {
  return (
    <section className="relative py-20 lg:py-28 bg-navy overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
          Ready to stop losing leads?
        </h2>
        <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto leading-relaxed">
          Book a free 30-minute strategy call. We&apos;ll show you exactly where
          you&apos;re losing revenue and how to fix it — even if you don&apos;t
          work with us.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
        >
          Book Your Free Strategy Call
          <ArrowRight size={18} />
        </a>
        <p className="mt-5 text-sm text-white/40">
          No pressure. No pitch deck. Just answers.
        </p>
      </div>
    </section>
  );
}
