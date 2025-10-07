import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PayPalPayment from "@/components/PayPalPayment";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, CheckCircle2, CreditCard } from "lucide-react";

const Book = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isPaid, setIsPaid] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTimes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePaymentSuccess = (details: any) => {
    console.log('Payment successful:', details);
    setIsPaid(true);
    
    toast({
      title: "Payment Successful! 🎉",
      description: "Your consultation has been booked. You'll receive a confirmation email shortly.",
    });

    // Send booking confirmation to backend
    sendBookingConfirmation(details);
  };

  const handlePaymentError = (error: any) => {
    console.error('Payment error:', error);
    toast({
      title: "Payment Failed",
      description: "There was an issue processing your payment. Please try again or contact support.",
      variant: "destructive"
    });
  };

  const sendBookingConfirmation = async (paymentDetails: any) => {
    try {
      const response = await fetch('/api/booking-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          paymentDetails,
          amount: 100,
          currency: 'USD'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking confirmation');
      }

      const result = await response.json();
      console.log('Booking confirmation sent:', result);
      
      setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
    } catch (error) {
      console.error('Error sending booking confirmation:', error);
      toast({
        title: "Booking Confirmed",
        description: "Payment successful! You'll receive a confirmation email shortly.",
      });
      
      setTimeout(() => {
        navigate("/thank-you");
      }, 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Booking request received!",
      description: "You'll receive an email invoice for $100 to confirm your appointment.",
    });

    setTimeout(() => {
      navigate("/thank-you");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16 bg-gradient-to-br from-pink-50 via-white to-pink-50">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                <span className="gradient-text">Book Your Consultation</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Take the first step toward clarity and confidence. Schedule your personalized session today.
              </p>
            </div>

            <Card className="border-2 border-primary/30 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-pink-100">
                <CardTitle className="text-2xl font-heading font-bold gradient-text">
                  Consultation Details
                </CardTitle>
                <CardDescription className="text-base">
                  One-on-one session to discuss your teen's goals, challenges, and create a personalized action plan.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-lg">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold text-foreground">60 minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-lg">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Format</p>
                      <p className="font-semibold text-foreground">Virtual Only</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Price</p>
                      <p className="font-semibold text-primary text-xl">$100</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-6">
                    Schedule Your Session
                  </h3>

                  {/* PayPal Payment Notice */}
                  <div className="bg-primary/10 border-l-4 border-primary rounded-lg p-6 mb-8">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-6 h-6 text-primary" />
                      <h4 className="text-lg font-semibold text-foreground">Secure PayPal Payment</h4>
                    </div>
                    <p className="text-sm text-foreground/80">
                      Complete the form below, then pay securely with PayPal to book your consultation. 
                      Your payment is processed safely through PayPal's secure platform.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your full name"
                        className="border-2 border-input focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="border-2 border-input focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="border-2 border-input focus:border-primary"
                      />
                    </div>

                    <div>
                      <label htmlFor="preferredTimes" className="block text-sm font-medium text-foreground mb-2">
                        Preferred Date & Time *
                      </label>
                      <Input
                        id="preferredTimes"
                        name="preferredTimes"
                        value={formData.preferredTimes}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Monday 3-5pm, Wednesday 10am-12pm"
                        className="border-2 border-input focus:border-primary"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Please list 2-3 date/time options that work for you.
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                        <h5 className="font-semibold text-foreground mb-2">Complete Payment</h5>
                        <p className="text-sm text-muted-foreground mb-4">
                          Fill out the form above, then complete your payment with PayPal to secure your consultation.
                        </p>
                        <PayPalPayment
                          amount={100}
                          currency="USD"
                          description="Teen Life Coaching Consultation"
                          onSuccess={handlePaymentSuccess}
                          onError={handlePaymentError}
                          disabled={!formData.name || !formData.email || !formData.phone || !formData.preferredTimes}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Book;
