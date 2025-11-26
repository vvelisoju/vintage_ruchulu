import { Button } from "@/components/ui/button";
import { config } from "../config";
import heroImage from "@assets/generated_images/Hero_Pickle_Jars_Banner_a73bd4b5.png";

interface HeroProps {
  onBrowseClick: () => void;
}

export function Hero({ onBrowseClick }: HeroProps) {
  return (
    <section className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden" data-testid="section-hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="img-hero-background"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" data-testid="div-hero-overlay" />
      
      <div className="relative h-full container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center" data-testid="div-hero-content">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight" data-testid="text-hero-title" style={{ fontFamily: 'Poppins, sans-serif', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
          {config.brand.name}
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-white/95 mb-4 sm:mb-6 max-w-2xl font-medium" data-testid="text-hero-subtitle" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.5)' }}>
          {config.brand.tagline}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium border border-white/30">
            🏠 Homemade
          </span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium border border-white/30">
            🌿 Zero Preservatives
          </span>
          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs sm:text-sm font-medium border border-white/30">
            ✨ No Artificial Ingredients
          </span>
        </div>
        <Button
          onClick={onBrowseClick}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white border-0 h-12 px-8 font-semibold shadow-lg"
          data-testid="button-browse-pickles"
        >
          Browse Our Pickles
        </Button>
      </div>
    </section>
  );
}
