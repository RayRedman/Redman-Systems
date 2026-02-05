"use client";

import { ArrowRight, Clock, Users, DollarSign } from "lucide-react";
import { useEffect, useState } from "react";

const BOOKING_URL = "#calendly-placeholder";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative hero-gradient dot-grid overflow-hidden">
      <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            Stop Losing Jobs.{" "}
            <span className="text-primary">Start Filling Your Calendar.</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Automated lead capture, follow-up, and booking systems built for home service businesses. More calls answered. More jobs booked. More revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 glow-primary"
            >
              Book a Free Strategy Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white px-8 py-4 rounded-xl text-base font-semibold border border-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>

          {/* Trust strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <Clock size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xl font-bold text-white leading-none">
                  <AnimatedCounter target={60} suffix="s" />
                </div>
                <div className="text-xs text-white/50 mt-0.5">Avg response time</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <Users size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xl font-bold text-white leading-none">
                  <AnimatedCounter target={50} suffix="+" />
                </div>
                <div className="text-xs text-white/50 mt-0.5">Businesses served</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <DollarSign size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-xl font-bold text-white leading-none">
                  $<AnimatedCounter target={0} />
                </div>
                <div className="text-xs text-white/50 mt-0.5">Setup fee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
