"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: 60, suffix: "s", label: "Average response time" },
  { value: 50, suffix: "+", label: "Businesses served" },
  { value: 3, suffix: "x", label: "More reviews generated" },
  { value: 40, suffix: "%", label: "Fewer no-shows" },
];

function Counter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const steps = 40;
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
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="section-dark py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {metrics.map((m, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-primary leading-none mb-2">
                <Counter target={m.value} suffix={m.suffix} inView={inView} />
              </div>
              <div className="text-sm text-white/50">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
