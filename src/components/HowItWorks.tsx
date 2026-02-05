import { PhoneCall, Wrench, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: PhoneCall,
    title: "Strategy Call",
    desc: "30 minutes. We learn your business and where you&apos;re losing leads.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "We Build It",
    desc: "Website, automations, CRM — configured for your business in 7 days.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Go Live",
    desc: "System starts capturing leads immediately. You review before launch.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Grow",
    desc: "We monitor, optimize, and support you ongoing. You focus on jobs.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            How It Works
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            Live in 7 days. Runs without you.
          </h2>
          <p className="text-lg text-text-secondary">
            We handle the setup. You handle the jobs.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-6 relative">
            {/* Connector line */}
            <div className="absolute top-8 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
            <div
              className="absolute top-8 left-[12.5%] h-0.5 timeline-connector"
              style={{ width: "75%" }}
            />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="relative text-center">
                  <div className="w-16 h-16 bg-dark text-white rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10 border-2 border-primary shadow-lg shadow-primary/20">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <div className="text-xs font-bold text-primary tracking-widest mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-dark text-white rounded-xl flex items-center justify-center border-2 border-primary shadow-lg shadow-primary/20 flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-primary/30 mt-3" />
                  )}
                </div>
                <div className="pt-2 pb-6">
                  <div className="text-xs font-bold text-primary tracking-widest mb-1">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-text mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {step.desc}
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
