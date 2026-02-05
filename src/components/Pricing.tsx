import { Check, ArrowRight } from "lucide-react";

const BOOKING_URL = "#calendly-placeholder";

const features = [
  "Missed call text-back (60-second response)",
  "Automated lead follow-up sequences",
  "Appointment reminders (cut no-shows 40%+)",
  "Review request automation",
  "CRM with unified inbox",
  "High-converting booking website",
  "Unlimited service area pages",
  "Ongoing support + optimization",
];

const comparison = [
  { item: "Website", elsewhere: "$3,000+", us: "Included" },
  { item: "CRM + Automations", elsewhere: "$300/mo", us: "Included" },
  { item: "Review Software", elsewhere: "$100/mo", us: "Included" },
  { item: "Missed Call Texting", elsewhere: "$150/mo", us: "Included" },
  { item: "Setup / Configuration", elsewhere: "$2,000+", us: "$0" },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 section-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Simple Pricing
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            One plan. Everything included.
          </h2>
          <p className="text-lg text-text-secondary">
            No setup fees. No contracts. One recovered job pays for 3 months.
          </p>
        </div>

        {/* Centered pricing card */}
        <div className="max-w-lg mx-auto mb-12">
          <div className="relative">
            <div className="absolute -inset-3 bg-primary/5 rounded-3xl blur-2xl" />
            <div className="relative bg-surface border-2 border-primary rounded-3xl p-8 shadow-xl shadow-primary/10">
              <div className="absolute -top-3.5 left-8 bg-primary text-white text-xs font-semibold uppercase tracking-wide px-4 py-1.5 rounded-full">
                Everything Included
              </div>

              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-serif text-5xl font-bold text-text">$397</span>
                <span className="text-lg text-text-muted">/month</span>
              </div>
              <p className="text-text-secondary mb-6 pb-6 border-b border-border">
                The complete system for booked-solid growth
              </p>

              <ul className="space-y-3 mb-8">
                {features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-white" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-text">{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOOKING_URL}
                className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3.5 rounded-xl font-semibold text-base hover:bg-primary-dark transition-all hover:-translate-y-0.5 glow-primary-sm"
              >
                Book Your Strategy Call
                <ArrowRight size={18} />
              </a>

              <p className="text-center text-xs text-text-muted mt-3">
                No setup fee · No contracts · Cancel anytime
              </p>
            </div>
          </div>
        </div>

        {/* ROI comparison */}
        <div className="max-w-2xl mx-auto bg-surface border border-border rounded-2xl overflow-hidden">
          <div className="p-6 border-b border-border">
            <h3 className="font-serif text-xl font-bold text-text text-center">
              What you&apos;d pay elsewhere vs. what you pay us
            </h3>
          </div>
          <div className="divide-y divide-border">
            {comparison.map((row, i) => (
              <div key={i} className="grid grid-cols-3 text-sm">
                <div className="px-6 py-3 text-text font-medium">{row.item}</div>
                <div className="px-6 py-3 text-text-muted text-center line-through">
                  {row.elsewhere}
                </div>
                <div className="px-6 py-3 text-primary font-semibold text-center">
                  {row.us}
                </div>
              </div>
            ))}
            <div className="grid grid-cols-3 text-sm bg-primary-light">
              <div className="px-6 py-3 text-text font-bold">Total</div>
              <div className="px-6 py-3 text-text-muted text-center font-bold line-through">
                $5,500+ upfront + $550/mo
              </div>
              <div className="px-6 py-3 text-primary font-bold text-center">
                $397/mo
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
