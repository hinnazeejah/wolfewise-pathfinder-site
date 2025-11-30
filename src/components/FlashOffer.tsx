import { Sparkles, Clock, Target, BookOpen, Award, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const FlashOffer = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-pink-50 border-b-4 border-primary py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-primary to-pink-500 text-white px-6 py-2 rounded-full mb-4 font-bold text-lg md:text-xl">
              <Clock className="inline w-5 h-5 mr-2" />
              COLLEGE APP CRUNCH TIME
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
              WOLFEWISE
            </h2>
            <p className="text-xl md:text-2xl text-foreground/90 mb-2">
              College, Career & Life Coaching for Teens
            </p>
            <p className="text-lg md:text-xl text-primary font-semibold italic">
              Discover. Decide. Thrive.
            </p>
          </div>

          {/* Main Alert */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 mb-8 border-4 border-primary">
            <div className="text-center mb-6">
              <p className="text-lg md:text-xl text-foreground/80 mb-4">
                COLLEGE APPLICATIONS ARE DUE IN JUST A FEW WEEKS.
              </p>
              <div className="bg-gradient-to-r from-primary to-pink-500 text-white px-8 py-4 rounded-xl inline-block">
                <p className="text-2xl md:text-3xl font-bold">FLASH OFFER</p>
                <p className="text-lg">UNTIL DECEMBER 15</p>
              </div>
            </div>

            {/* Flash Offer Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg">50% off all WolfeWise Coaching packages</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg">Priority scheduling for urgent deadlines</p>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-base md:text-lg">Fast-track support for application season</p>
              </div>
            </div>

            {/* Why the Discount */}
            <div className="bg-primary/10 rounded-xl p-6 mb-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" />
                WHY THE DISCOUNT?
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">We have less time to work together before deadlines hit.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">But that doesn't mean we can't make a HUGE impact in the time we have.</p>
                </div>
              </div>
            </div>

            {/* What Can We Accomplish */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4 flex items-center gap-2">
                <BookOpen className="w-6 h-6" />
                WHAT CAN WE ACCOMPLISH?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">Get crystal clear on the right school list</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">Write compelling essays that stand out</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">Build confidence in your choices</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">Complete applications strategically</p>
                </div>
                <div className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base md:text-lg">Or explore alternatives if college isn't the fit</p>
                </div>
              </div>
            </div>

            {/* Packages */}
            <div className="mb-8">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-6 flex items-center gap-2">
                <Award className="w-6 h-6" />
                PACKAGES AVAILABLE
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-primary/5 to-pink-100 rounded-xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Clarity Session</h4>
                  </div>
                  <p className="text-muted-foreground line-through mb-1">$497</p>
                  <p className="text-3xl font-bold text-primary mb-2">$249</p>
                  <p className="text-sm text-foreground/70">Flash Offer</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-pink-100 rounded-xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Pathfinder Program</h4>
                  </div>
                  <p className="text-muted-foreground line-through mb-1">$1,997</p>
                  <p className="text-3xl font-bold text-primary mb-2">$999</p>
                  <p className="text-sm text-foreground/70">Flash Offer</p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/5 to-pink-100 rounded-xl p-6 border-2 border-primary/30">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles className="w-5 h-5 text-primary" />
                    <h4 className="font-bold text-lg">Launch Pad</h4>
                  </div>
                  <p className="text-muted-foreground line-through mb-1">$3,497</p>
                  <p className="text-3xl font-bold text-primary mb-2">$1,749</p>
                  <p className="text-sm text-foreground/70">Flash Offer</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary to-pink-500 rounded-xl p-8 text-white">
              <h3 className="text-2xl md:text-3xl font-heading font-bold mb-6">LET'S DO THIS</h3>
              <div className="space-y-4 mb-6">
                <p className="text-lg flex items-center justify-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  DM "DEADLINES" or fill out the contact form below
                </p>
                <p className="text-lg flex items-center justify-center gap-2">
                  <Clock className="w-5 h-5" />
                  Regular pricing returns December 16
                </p>
              </div>
              <Link to="/#contact">
                <Button size="lg" variant="secondary" className="text-xl px-8 py-6 font-bold">
                  Contact Us Now
                </Button>
              </Link>
            </div>
          </div>

          {/* Bottom Question */}
          <div className="text-center bg-white rounded-xl shadow-lg p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-heading font-bold text-primary mb-4">
              Is Your Teen…
            </h3>
            <div className="space-y-3 text-left max-w-2xl mx-auto mb-4">
              <p className="text-base md:text-lg text-foreground/80">
                • Staring at a blank essay or still unsure which schools to apply to?
              </p>
              <p className="text-base md:text-lg text-foreground/80">
                • Overwhelmed by the whole process, or questioning if college is the right choice?
              </p>
            </div>
            <p className="text-2xl font-bold gradient-text">
              It's not too late.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashOffer;
