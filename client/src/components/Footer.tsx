import { MessageCircle, MapPin } from "lucide-react";
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-brand">
              {config.brand.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md" data-testid="text-footer-description">
              {config.brand.description}
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-footer-location">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{config.brand.location}</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3" data-testid="text-footer-contact-heading">Contact Us</h3>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center gap-2 text-sm hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                data-testid="button-footer-whatsapp"
              >
                <MessageCircle className="h-4 w-4 text-[#25D366]" data-testid="icon-whatsapp" />
                <span className="text-foreground" data-testid="text-footer-phone">{config.contact.whatsappFormatted}</span>
              </button>

              <p className="text-xs text-muted-foreground" data-testid="text-footer-availability">
                We're available on WhatsApp for orders and inquiries
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground" data-testid="text-copyright">
            © {currentYear} {config.brand.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
