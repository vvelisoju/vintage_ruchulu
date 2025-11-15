
import { Sparkles, Award, Heart, Shield, Leaf, BadgeCheck, Flame, IndianRupee } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Flame className="h-8 w-8" />,
      title: "Best Taste",
      description: "Authentic flavors that remind you of home",
      color: "text-orange-600"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "100% Authentic",
      description: "Traditional recipes passed down generations",
      color: "text-amber-600"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "100% Hygiene",
      description: "Prepared in clean, sanitized conditions",
      color: "text-blue-600"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Homemade with Love",
      description: "Each jar crafted with care and passion",
      color: "text-red-600"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Quality Guaranteed",
      description: "Premium ingredients, superior standards",
      color: "text-purple-600"
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Always Fresh",
      description: "Made in small batches for freshness",
      color: "text-green-600"
    },
    {
      icon: <IndianRupee className="h-8 w-8" />,
      title: "Best Price Guaranteed",
      description: "Affordable without compromising quality",
      color: "text-emerald-600"
    },
    {
      icon: <BadgeCheck className="h-8 w-8" />,
      title: "Trusted Brand",
      description: "Serving Warangal with authenticity",
      color: "text-indigo-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Why Choose Vintage Ruchulu?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the perfect blend of tradition, quality, and authentic taste in every jar
          </p>
          <div className="h-1 w-24 bg-primary rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow duration-200 hover:border-primary/30"
            >
              <div className={`${feature.color} mb-4 flex justify-center`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-primary/5 border border-primary/20 rounded-2xl p-8">
          <p className="text-lg font-medium text-foreground mb-2">
            🌟 Our Commitment to Excellence 🌟
          </p>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            At Vintage Ruchulu, we don't just make pickles – we preserve traditions, create memories, 
            and deliver happiness in every jar. From our kitchen in Warangal to your table, 
            we ensure every product meets our highest standards of quality, taste, and authenticity.
          </p>
        </div>
      </div>
    </section>
  );
}
