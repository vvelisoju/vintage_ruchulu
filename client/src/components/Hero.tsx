import { Button } from "@/components/ui/button";
import { config } from "../config";
import heroImage from "@assets/generated_images/Hero_Pickle_Jars_Banner_a73bd4b5.png";

interface HeroProps {
  onBrowseClick: () => void;
}

export function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section className="relative h-48 sm:h-56 md:h-64 overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="img-hero-background"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" data-testid="div-hero-overlay" />
      
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center" data-testid="div-hero-content">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2" data-testid="text-hero-title">
          {config.brand.name}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 sm:mb-6 max-w-2xl" data-testid="text-hero-subtitle">
          {config.brand.tagline}
        </p>
        <Button
          onClick={onBrowseClick}
          size="lg"
          className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border border-white/40 h-12 px-6"
          data-testid="button-browse-pickles"
        >
          Browse Our Pickles
        </Button>
      </div>
    </section>
  );
}
