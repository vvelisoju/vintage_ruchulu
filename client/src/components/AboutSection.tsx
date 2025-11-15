import { config } from "../config";
import aboutImage from "@assets/generated_images/Authentic_Kitchen_Preparation_Scene_d39baf2c.png";

export function AboutSection() {
  return (
    <section className="py-12 bg-muted/30" data-testid="section-about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center" data-testid="text-about-heading">
          Our Story
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Authentic pickle preparation"
              className="w-full h-auto rounded-lg shadow-md"
              data-testid="img-about"
            />
          </div>

          <div className="order-1 md:order-2 space-y-4">
            <p className="text-base text-foreground leading-relaxed" data-testid="text-about-intro">
              Welcome to <strong>{config.brand.name}</strong>, where tradition meets taste. Based in the heart of {config.brand.location}, 
              we bring you authentic, homemade non-veg pickles crafted with recipes passed down through generations.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-about-quality">
              Each jar is prepared with love, using only the finest ingredients and traditional methods. 
              Our pickles capture the bold, fiery flavors of Telangana and Andhra Pradesh, delivering 
              an authentic taste that reminds you of home-cooked meals.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-about-variety">
              From tangy Gongura Chicken to spicy Prawn pickles, every variety is made fresh to order, 
              ensuring you get the best quality and taste. We take pride in maintaining hygiene standards 
              while preserving the authentic homemade touch that makes our pickles special.
            </p>
            <p className="text-base text-primary font-medium" data-testid="text-about-cta">
              Order now and experience the authentic flavors of traditional Telugu cuisine!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
