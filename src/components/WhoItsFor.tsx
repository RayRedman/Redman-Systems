import {
  Droplets,
  Wind,
  Zap,
  Trash2,
  TreePine,
  Home,
  Sparkles,
  Bug,
  DoorOpen,
  Wrench,
  Fence,
  Paintbrush,
} from "lucide-react";

const trades = [
  { name: "Plumbing", icon: Droplets },
  { name: "HVAC", icon: Wind },
  { name: "Electrical", icon: Zap },
  { name: "Junk Removal", icon: Trash2 },
  { name: "Landscaping", icon: TreePine },
  { name: "Roofing", icon: Home },
  { name: "Cleaning", icon: Sparkles },
  { name: "Pest Control", icon: Bug },
  { name: "Garage Doors", icon: DoorOpen },
  { name: "Appliance Repair", icon: Wrench },
  { name: "Fencing", icon: Fence },
  { name: "Painting", icon: Paintbrush },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">
          Built For
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-text mt-3 mb-4 tracking-tight">
          Home service businesses that want more jobs, not more marketing.
        </h2>
        <p className="text-text-secondary leading-relaxed mb-8">
          If you run trucks, answer calls, and do work at people&apos;s homes — this is built for you.
        </p>

        <div className="flex flex-wrap justify-center gap-2.5">
          {trades.map((trade) => {
            const Icon = trade.icon;
            return (
              <span
                key={trade.name}
                className="inline-flex items-center gap-2 text-sm text-text-secondary px-4 py-2 border border-border rounded-full hover:border-primary/30 hover:text-text transition-colors"
              >
                <Icon size={16} className="text-primary" />
                {trade.name}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
}
