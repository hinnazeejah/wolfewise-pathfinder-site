import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Zap } from "lucide-react";

const FlashOffer = () => {
  const packages = [
    {
      name: "Clarity Session",
      regular: "$497",
      flash: "$249",
    },
    {
      name: "Pathfinder Program",
      regular: "$1,097",
      flash: "$999",
    },
    {
      name: "Launch Pad",
      regular: "$3,497",
      flash: "$1,749",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <Card className="border-0 shadow-2xl bg-background overflow-hidden">
          <CardContent className="p-8 md:p-12 lg:p-16">
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                <Zap className="w-4 h-4" />
                Flash Offer • Now through December 15
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
                    College App Crunch Time
                  </h2>
                  <p className="text-lg md:text-xl text-foreground/80">
                    College applications are due in just a few weeks — it's not too late.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Is your teen…
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Staring at a blank essay or still unsure which schools to apply to?
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        Overwhelmed by the whole process, or questioning if college is even the right choice?
                      </span>
                    </li>
                  </ul>
                  <p className="mt-4 text-primary font-semibold">It's not too late.</p>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    Why the discount?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        We have less time to work together before deadlines hit.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">
                        But that doesn't mean we can't make a huge impact in the time we have.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    What can we accomplish in the next few weeks?
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Get crystal clear on a right-fit school list</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Craft compelling essays that stand out</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Build confidence in their choices</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Complete applications strategically</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80">Or explore alternatives if college isn't the right fit</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                    Packages Included in the Flash Offer
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {packages.map((pkg) => (
                      <Card key={pkg.name} className="border-2 border-primary/20 bg-accent/50 hover:border-primary/40 transition-colors">
                        <CardContent className="p-5 text-center">
                          <h4 className="font-heading font-semibold text-foreground mb-3">{pkg.name}</h4>
                          <p className="text-muted-foreground line-through text-sm">Regular: {pkg.regular}</p>
                          <p className="text-primary font-bold text-xl mt-1">Flash Offer: {pkg.flash}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <p className="text-center text-muted-foreground text-sm mt-4">
                    Regular pricing returns December 16.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-12 pt-8 border-t border-border text-center">
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Let's do this.
              </h3>
              <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
                DM "DEADLINES" or fill out the contact form on our website to claim the Flash Offer and secure support before applications are due.
              </p>
              <Link to="/book">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-10"
                >
                  Claim the Flash Offer
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FlashOffer;
