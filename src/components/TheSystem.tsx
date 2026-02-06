import {
  Phone,
  Zap,
  Bell,
  Star,
  LayoutDashboard,
  Globe,
  RefreshCw,
} from "lucide-react";

const features = [
  {
    icon: Phone,
    title: "Missed call text-back",
    desc: "You miss a call, they get a text in 60 seconds: \"Hey, sorry I missed you — how can I help?\" Now they're waiting on you, not calling the next guy.",
  },
  {
    icon: Zap,
    title: "Instant lead follow-up",
    desc: "Website form, Google ad, Facebook — wherever the lead comes from, they hear back in under a minute. Even at 11pm on a Saturday.",
  },
  {
    icon: Bell,
    title: "Appointment reminders",
    desc: "Automatic texts go out 24 hours and 1 hour before every job. Customers actually show up. No more driving to an empty house.",
  },
  {
    icon: Star,
    title: "Review requests on autopilot",
    desc: "After every job, your customer gets a text with your Google review link. Simple ask, easy click. Reviews start stacking up without you remembering to ask.",
  },
  {
    icon: LayoutDashboard,
    title: "Everything in one place",
    desc: "Calls, texts, leads, jobs — one dashboard. Stop bouncing between five apps trying to figure out who you need to call back.",
  },
  {
    icon: Globe,
    title: "A website that actually books jobs",
    desc: "Fast, mobile-first, built for your services and your area. Not a cookie-cutter template — built to turn visitors into booked appointments.",
  },
  {
    icon: RefreshCw,
    title: "Past customers come back",
    desc: "Seasonal reminders, maintenance check-ins, and offers go out to your customer list automatically. That one-time drain job turns into a repeat customer.",
  },
];

export default function TheSystem() {
  return (
    <section id="results" className="py-20 lg:py-28 section-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            What You Get
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            We handle the phones and the follow-up. You handle the jobs.
          </h2>
          <p className="text-lg text-text-secondary">
            Everything is set up for your business. You don&apos;t touch any of the tech.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-surface border border-border rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-primary-light rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <Icon size={22} className="text-primary" />
                </div>
                <h3 className="text-base font-semibold text-text mb-1.5">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
