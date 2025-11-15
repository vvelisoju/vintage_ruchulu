import { Home, Sparkles, MapPin, Flame } from "lucide-react";
import { config } from "../config";

const trustIndicators = [
  { icon: Home, text: "Homemade" },
  { icon: Sparkles, text: "Authentic" },
  { icon: MapPin, text: config.brand.location },
  { icon: Flame, text: "Fresh" },
];

export function TrustBanner() {
  return (
    <section className="py-4 bg-muted/30 border-y border-border" data-testid="section-trust-banner">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 overflow-x-auto scrollbar-hide" data-testid="div-trust-indicators">
          {trustIndicators.map((indicator, index) => (
            <div
              key={index}
              className="flex items-center gap-2 shrink-0"
              data-testid={`div-trust-indicator-${index}`}
            >
              <indicator.icon className="h-4 w-4 sm:h-5 sm:w-5 text-primary" data-testid={`icon-trust-${index}`} />
              <span className="text-xs sm:text-sm font-medium text-foreground whitespace-nowrap" data-testid={`text-trust-${index}`}>
                {indicator.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
