import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="gradient-text">WolfeWise Consulting</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              At WolfeWise Consulting, I guide teens and families through this important transition with clarity and purpose. With 29 years of teaching experience and the honor of being named the{" "}
              <strong className="text-primary">2021 New York State Teacher of the Year</strong>, I've seen how the right support empowers students to thrive.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              My mission is to provide both tutoring and post–high school coaching, helping students strengthen skills today while discovering passions and planning for tomorrow. I help teens align academics with future goals — so they step forward with confidence, direction, and purpose.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/book">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8"
                >
                  Book a Consultation
                </Button>
              </Link>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-accent font-semibold text-lg px-8"
              >
                Contact Us
              </Button>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <img
              src={heroImage}
              alt="Diverse teens and families engaged in learning and mentoring"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Homepage Banner */}
        <div className="mt-16 bg-gradient-to-r from-primary to-pink-500 rounded-2xl p-8 md:p-10 shadow-2xl">
          <p className="text-lg md:text-xl text-white leading-relaxed">
            <strong className="font-bold">WolfeWise Consulting</strong> helps teens build academic skills today and discover their purpose for tomorrow — combining tutoring and future coaching so every student moves forward with confidence and clarity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
