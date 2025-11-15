import { Badge } from "@/components/ui/badge";

export function TrustBanner() {
  const badges = [
    { icon: "🏠", text: "Homemade with Love" },
    { icon: "✨", text: "100% Authentic" },
    { icon: "📍", text: "From Warangal" },
    { icon: "🌶️", text: "Always Fresh" },
  ];

  return (
    <section className="py-6 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-y border-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm rounded-full border border-primary/30 shadow-sm"
            >
              <span className="text-xl">{badge.icon}</span>
              <span className="text-sm sm:text-base font-medium text-foreground">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}