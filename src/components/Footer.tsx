import { Phone, Mail, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-secondary to-black py-12 border-t-4 border-primary">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              WolfeWise Consulting
            </h3>
            <p className="text-secondary-foreground/80">
              Empowering teens with clarity, confidence, and purpose for their future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["home", "mission", "services", "contact"].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-primary mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a
                  href="tel:516-670-5277"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  516-670-5277
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:wolfewiseconsulting@gmail.com"
                  className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  wolfewiseconsulting@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 mt-4">
                <a
                  href="https://instagram.com/wolfewiseconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com/wolfewiseconsulting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60">
            &copy; {new Date().getFullYear()} WolfeWise Consulting. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
