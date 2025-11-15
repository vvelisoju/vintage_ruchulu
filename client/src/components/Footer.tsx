import { MessageCircle, MapPin, Mail, Phone, Clock, Facebook, Instagram } from "lucide-react";
import { config } from "../config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
      `Hi! I'd like to know more about your pickles.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-muted border-t-2 border-primary/20 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Vintage Ruchulu Logo" 
                className="h-16 w-16 object-contain"
              />
              <h3 className="text-2xl font-bold text-primary" style={{ fontFamily: 'Poppins, sans-serif' }}>{config.brand.name}</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{config.brand.tagline}</p>
            <div className="flex gap-2 pt-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">🌶️</div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">🏠</div>
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-lg">✨</div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get in Touch</h3>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-[#25D366]/10 group-hover:bg-[#25D366]/20 flex items-center justify-center transition-colors">
                  <MessageCircle className="h-5 w-5" style={{ color: '#25D366' }} />
                </div>
                <span className="font-medium">{config.contact.whatsapp}</span>
              </button>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <span>{config.brand.location}</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Our Promise</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span> Authentic homemade recipes
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span> Premium fresh ingredients
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span> Traditional cooking methods
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-lg">✓</span> Made with love in Warangal
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-foreground">{config.brand.name}</span>. Crafted with ❤️ in Warangal.
          </p>
        </div>
      </div>
    </footer>
  );
}