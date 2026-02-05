const industries = [
  "Plumbers",
  "HVAC Pros",
  "Electricians",
  "Roofers",
  "Landscapers",
  "Junk Removal",
];

export default function TrustBar() {
  return (
    <section className="py-8 border-y border-border bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-xs uppercase tracking-widest text-text-muted mb-5">
          Trusted by contractors across 37 states
        </p>
        <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
          {industries.map((name) => (
            <span
              key={name}
              className="text-base font-semibold text-text-secondary/60"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
