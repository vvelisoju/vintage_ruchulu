
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
    <footer className="bg-muted/50 border-t border-border mt-12" data-testid="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="./logo.png" 
                alt={config.brand.name}
                className="h-12 w-auto object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-brand">
              {config.brand.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4" data-testid="text-footer-description">
              {config.brand.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-foreground transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }} className="text-muted-foreground hover:text-foreground transition-colors">
                  Order Now
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-contact-heading">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>{config.brand.location}</span>
              </div>
              
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-sm hover-elevate active-elevate-2 p-2 rounded-md -ml-2 w-full text-left"
                data-testid="button-footer-whatsapp"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366] shrink-0" data-testid="icon-whatsapp" />
                <span className="text-foreground" data-testid="text-footer-phone">{config.contact.whatsappFormatted}</span>
              </button>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 text-primary shrink-0" />
                <span>Available 9 AM - 8 PM</span>
              </div>
            </div>
          </div>

          {/* Business Hours & Social */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Follow Us</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay updated with our latest products and offers
            </p>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-foreground" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-muted/70 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-foreground" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground mt-4" data-testid="text-footer-availability">
              💚 We're available on WhatsApp for orders and inquiries
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground text-center sm:text-left" data-testid="text-copyright">
              © {currentYear} {config.brand.name}. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
