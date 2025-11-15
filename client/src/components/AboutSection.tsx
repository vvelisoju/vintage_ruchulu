import { config } from "../config";
import aboutImage from "@assets/generated_images/Authentic_Kitchen_Preparation_Scene_d39baf2c.png";

export function AboutSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30" id="about">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <img
              src={aboutImage}
              alt="Traditional pickle making"
              className="rounded-2xl shadow-2xl w-full h-auto border-4 border-primary/20"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>Our Story</h2>
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Welcome to <span className="font-bold text-primary text-xl">Vintage Ruchulu</span>, where tradition meets taste.
                Based in the heart of Warangal, we bring you authentic, homemade non-veg pickles crafted with recipes
                passed down through generations.
              </p>
              <p>
                Each jar is prepared with <span className="font-semibold text-foreground">love and care</span>, using only the finest ingredients and traditional methods.
                Our pickles capture the bold, fiery flavors of Telangana and Andhra Pradesh, delivering an
                authentic taste that reminds you of home-cooked meals.
              </p>
              <p>
                From tangy <span className="font-semibold text-foreground">Gongura Chicken</span> to spicy <span className="font-semibold text-foreground">Prawn pickle</span>, every product tells a story of our rich
                culinary heritage. We take pride in maintaining the authentic taste while ensuring the highest
                quality standards.
              </p>
              <div className="flex items-center gap-3 pt-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xl">🌶️</div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xl">🥘</div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xl">❤️</div>
                </div>
                <p className="text-sm font-medium text-foreground">Made with traditional recipes & fresh ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}