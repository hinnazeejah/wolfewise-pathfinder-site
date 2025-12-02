import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, CheckCircle2 } from "lucide-react";

const Book = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const sendBookingRequest = async () => {
    try {
      const response = await fetch('/api/booking-confirmation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          amount: 0,
          currency: 'USD',
          isFreeConsultation: true
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send booking request');
      }

      const result = await response.json();
      console.log('Booking request sent:', result);
    } catch (error) {
      console.error('Error sending booking request:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await sendBookingRequest();
    
    toast({
      title: "Thank you!",
      description: "Your request has been submitted. You'll receive a confirmation email with your consultation time.",
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
                  One-on-one 30-minute session to discuss your teen's goals, challenges, and create a personalized action plan.
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
                      <p className="font-semibold text-foreground">30 minutes</p>
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
                      <p className="font-semibold text-primary text-xl">Free</p>
                      <p className="text-xs text-muted-foreground">Limited-time offer</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border pt-8">
                  <h3 className="text-xl font-heading font-bold text-secondary mb-4">
                    Schedule Your Session
                  </h3>
                  <p className="text-foreground/80 mb-6">
                    Complete the form below to request your free 30-minute consultation. You'll receive a follow-up email to confirm your appointment time.
                  </p>

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
                      <Textarea
                        id="preferredTimes"
                        name="preferredTimes"
                        value={formData.preferredTimes}
                        onChange={handleChange}
                        required
                        placeholder="e.g., Monday 3-5pm, Wednesday 10am-12pm"
                        className="border-2 border-input focus:border-primary min-h-[100px]"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        Please list 2–3 date/time options that work for you.
                      </p>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.preferredTimes}
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Request Consultation"}
                    </Button>
                  </form>

                  {/* TODO: Re-enable PayPal payment when consultations are paid again */}
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
