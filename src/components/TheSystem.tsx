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
    desc: "Every missed call gets an auto-text within 60 seconds. Leads reply instead of calling your competitor.",
  },
  {
    icon: Zap,
    title: "Instant lead follow-up",
    desc: "Form fills get a response in under a minute. Follow-up runs until they book or say stop.",
  },
  {
    icon: Bell,
    title: "Appointment reminders",
    desc: "24-hour and 1-hour text reminders. No-shows drop 40%+. Your schedule stays full.",
  },
  {
    icon: Star,
    title: "Review automation",
    desc: "After every job, customers get a text with your Google link. Reviews stack up on autopilot.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM + unified inbox",
    desc: "Every lead, call, and text in one place. Nothing falls through the cracks.",
  },
  {
    icon: Globe,
    title: "Booking website",
    desc: "Fast, mobile-first site built to convert visitors into booked jobs. Not a template.",
  },
  {
    icon: RefreshCw,
    title: "Re-engagement campaigns",
    desc: "Past customers hear from you automatically. One-time jobs turn into repeat revenue.",
  },
];

export default function TheSystem() {
  return (
    <section id="results" className="py-20 lg:py-28 section-elevated">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            What We Install
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            A complete revenue system for your business
          </h2>
          <p className="text-lg text-text-secondary">
            We build it, configure it, and run it. You focus on the work.
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
