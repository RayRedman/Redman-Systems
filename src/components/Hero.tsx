"use client";

import { ArrowRight, Phone, Wrench, DollarSign } from "lucide-react";

const BOOKING_URL = "#calendly-placeholder";

export default function Hero() {
  return (
    <section className="relative hero-gradient dot-grid overflow-hidden">
      <div className="relative pt-32 pb-20 lg:pt-44 lg:pb-32">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white mb-6">
            You&apos;re On the Job.{" "}
            <span className="text-primary">Who&apos;s Answering Your Phone?</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Every missed call is a job going to the next guy on Google. We make sure that doesn&apos;t happen — so you can focus on the work in front of you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href={BOOKING_URL}
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 glow-primary"
            >
              Book a Free Call
              <ArrowRight size={18} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white px-8 py-4 rounded-xl text-base font-semibold border border-white/10 hover:border-white/25 transition-all hover:-translate-y-0.5"
            >
              See How It Works
            </a>
          </div>

          {/* Value props — things we can actually promise */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <Phone size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">Missed call?</div>
                <div className="text-xs text-white/50 mt-0.5">Auto-text in 60 seconds</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <Wrench size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">We build it all</div>
                <div className="text-xs text-white/50 mt-0.5">You don&apos;t touch the tech</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-xl px-5 py-4">
              <DollarSign size={20} className="text-primary flex-shrink-0" />
              <div className="text-left">
                <div className="text-sm font-semibold text-white leading-tight">$0 to start</div>
                <div className="text-xs text-white/50 mt-0.5">No setup fees, no contracts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
