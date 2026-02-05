import {
  Phone,
  Clock,
  CalendarCheck,
  Star,
  LayoutDashboard,
  RefreshCw,
} from "lucide-react";

const changes = [
  {
    icon: Phone,
    title: "No more missed calls turning into lost jobs",
    desc: "Every missed call gets an automatic text within 60 seconds. They know you saw it. They wait for your callback instead of calling your competitor.",
  },
  {
    icon: Clock,
    title: "Leads followed up instantly — not tomorrow",
    desc: "9pm form submission? They get a text at 9:01pm. Your follow-up beats everyone else's, even when you're asleep.",
  },
  {
    icon: CalendarCheck,
    title: "No-shows drop by 40% or more",
    desc: "Automatic reminders 24 hours and 1 hour before every appointment. Customers show up. Your schedule stays full.",
  },
  {
    icon: Star,
    title: "5-star reviews come in on autopilot",
    desc: "After every job, customers get a simple text with your Google link. Your rating climbs without you lifting a finger.",
  },
  {
    icon: LayoutDashboard,
    title: "One place to see everything",
    desc: "All your leads, calls, texts, and jobs in a single dashboard. No more checking five different apps or losing track of who called.",
  },
  {
    icon: RefreshCw,
    title: "Past customers come back automatically",
    desc: "Seasonal reminders and offers go out to your customer list on schedule. One-time jobs turn into repeat revenue.",
  },
];

export default function WhatChanges() {
  return (
    <section className="py-20 lg:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            The Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            From chasing leads to leads chasing you
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            Here&apos;s what&apos;s different 30 days from now.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {changes.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="group flex gap-5 bg-cream border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Icon size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text mb-1.5">
                    {c.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
