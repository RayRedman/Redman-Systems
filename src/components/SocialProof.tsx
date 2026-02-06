import { Phone, MessageSquare, Star, Calendar } from "lucide-react";

const scenarios = [
  {
    icon: Phone,
    before: "Missed call at 2pm",
    after: "Auto-text sent in 60 seconds",
  },
  {
    icon: MessageSquare,
    before: "Lead sits overnight",
    after: "Instant reply, even at midnight",
  },
  {
    icon: Calendar,
    before: "Customer no-shows",
    after: "Reminders sent automatically",
  },
  {
    icon: Star,
    before: "12 Google reviews",
    after: "Review requests after every job",
  },
];

export default function SocialProof() {
  return (
    <section className="section-dark py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {scenarios.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} className="text-center">
                <Icon size={24} className="text-primary mx-auto mb-3" />
                <div className="text-sm text-white/40 line-through mb-1">{s.before}</div>
                <div className="text-sm text-white font-semibold">{s.after}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
