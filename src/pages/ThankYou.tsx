import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Mail, Calendar } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mx-auto mb-6 shadow-xl">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              <span className="gradient-text">Thank You!</span>
            </h1>
            
            <p className="text-xl text-foreground/80 mb-8">
              Your booking request has been received successfully.
            </p>

            <div className="bg-white border-2 border-primary/30 rounded-xl p-8 mb-8 text-left shadow-xl">
              <h2 className="text-2xl font-heading font-bold gradient-text mb-6">
                What's Next?
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">1. Check Your Email</h3>
                    <p className="text-foreground/80">
                      You'll receive a PayPal invoice for $100 to confirm your consultation. PayPal will also send you a payment receipt.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">2. Schedule Confirmation</h3>
                    <p className="text-foreground/80">
                      Once payment is received, we'll confirm your appointment time and send you meeting details (Zoom link or in-person address).
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">3. Prepare for Your Session</h3>
                    <p className="text-foreground/80">
                      Feel free to jot down any questions or goals you'd like to discuss. We're here to help you create a clear path forward.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-accent">
                  Return to Home
                </Button>
              </Link>
              <a href="mailto:wolfewiseconsulting@gmail.com">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
