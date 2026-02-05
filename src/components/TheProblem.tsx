import {
  PhoneOff,
  Clock,
  CalendarX,
  StarOff,
  UserX,
  AlertTriangle,
} from "lucide-react";

const leaks = [
  {
    icon: PhoneOff,
    title: "Missed calls",
    desc: "Customer calls, nobody picks up. They call your competitor instead.",
  },
  {
    icon: Clock,
    title: "Slow follow-up",
    desc: "Lead comes in at 9pm. You call back at 9am. They already booked someone else.",
  },
  {
    icon: CalendarX,
    title: "No-shows",
    desc: "No reminder goes out. Customer forgets. You waste a time slot and a drive.",
  },
  {
    icon: StarOff,
    title: "No reviews",
    desc: "Happy customers never get asked. Your competitor has 200 reviews. You have 12.",
  },
  {
    icon: UserX,
    title: "Dead past customers",
    desc: "Hundreds of past jobs. Nobody reaches out. They Google it fresh and find someone else.",
  },
  {
    icon: AlertTriangle,
    title: "No system",
    desc: "Five apps, no process. Leads fall through the cracks every single week.",
  },
];

export default function TheProblem() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            The Problem
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            You&apos;re bleeding money and don&apos;t even know it
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {leaks.map((leak, i) => {
            const Icon = leak.icon;
            return (
              <div
                key={i}
                className="flex gap-4 bg-surface border border-border rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-11 h-11 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon size={22} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text mb-1">
                    {leak.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {leak.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Money lost callout */}
        <div className="bg-dark rounded-2xl p-8 text-center">
          <p className="text-3xl sm:text-4xl font-serif font-bold text-white mb-2">
            $2,000+<span className="text-primary">/mo</span>
          </p>
          <p className="text-white/60 text-base max-w-md mx-auto">
            The average home service business loses this much to missed calls alone.
            That&apos;s $24,000 a year walking out the door.
          </p>
        </div>
      </div>
    </section>
  );
}
