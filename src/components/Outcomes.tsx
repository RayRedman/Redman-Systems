const outcomes = [
  {
    stat: "312%",
    title: "Average increase in booked jobs",
    desc: "Not just more leads — more jobs on the calendar, more trucks rolling, more revenue hitting your account.",
  },
  {
    stat: "23",
    title: "Missed calls recovered per month",
    desc: "Every missed call gets an instant text back. Most become conversations. Many become paying customers.",
  },
  {
    stat: "4.8★",
    title: "Average Google rating after 90 days",
    desc: "Automated review requests turn happy customers into 5-star reviews. Your reputation grows on autopilot.",
  },
];

export default function Outcomes() {
  return (
    <section id="results" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Real Results
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-text mt-3 mb-4 tracking-tight">
            What actually changes when you work with us
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed">
            These aren&apos;t vanity metrics. This is what happens to your
            business in the first 90 days.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((o, i) => (
            <div
              key={i}
              className="group bg-surface border border-border rounded-2xl p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="text-5xl sm:text-6xl font-serif font-bold text-primary mb-3 leading-none">
                {o.stat}
              </div>
              <h3 className="text-lg font-semibold text-text mb-2">
                {o.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {o.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
