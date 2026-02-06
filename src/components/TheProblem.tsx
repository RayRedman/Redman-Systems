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
    title: "Missed calls while you're on a job",
    desc: "You're elbow-deep in a water heater. Phone rings. By the time you check, they already called somebody else.",
  },
  {
    icon: Clock,
    title: "Leads sitting in your voicemail",
    desc: "Someone fills out your form at 9pm. You see it at 7am. They booked the guy who texted back at 9:01.",
  },
  {
    icon: CalendarX,
    title: "No-shows killing your schedule",
    desc: "You drive 30 minutes to a job. Nobody home. No reminder went out. That's a wasted slot you can't get back.",
  },
  {
    icon: StarOff,
    title: "Great work, no reviews to show for it",
    desc: "Your customers are happy. But nobody asks them to leave a review, so they don't. Meanwhile the other guy has 200.",
  },
  {
    icon: UserX,
    title: "Past customers forgetting about you",
    desc: "You've done hundreds of jobs. Those people need service again. But you never reach out, so they Google it fresh.",
  },
  {
    icon: AlertTriangle,
    title: "Checking five apps, losing track",
    desc: "Texts in one place, calls in another, leads in a third. Things slip through the cracks every week.",
  },
];

export default function TheProblem() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Sound Familiar?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            You&apos;re good at the work. The phone stuff is what&apos;s costing you.
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
          <p className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
            One missed call = one lost job.
          </p>
          <p className="text-white/60 text-base max-w-lg mx-auto">
            If that&apos;s a $300 drain clearing or a $5,000 HVAC install, it adds up fast. Most guys don&apos;t realize how much is slipping through until they see the numbers.
          </p>
        </div>
      </div>
    </section>
  );
}
