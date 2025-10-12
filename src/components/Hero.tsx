import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const testimonials = [
    {
      id: 1,
      text: "Jen guided both of my sons through their academic journey with remarkable insight and dedication. Despite their academic similarities, my sons have distinct interests and strengths, and Jen demonstrated exceptional sensitivity to each of their unique personalities. She provided guidance not only based on the most research but also with genuine care and concern for their individual paths. While Jen's brilliance and articulate communication are immediately apparent, what truly sets her apart is her unmatched ability to deeply connect with her students and listen to what they have to say. I cannot recommend Jen highly enough to any family seeking an educator who combines intellectual rigor with authentic personal investment in student success.",
      author: "Alisa R."
    },
    {
      id: 2,
      text: "My daughter had such trouble narrowing down where she wanted to go to school. She had no idea how to take her strengths and apply them to her future direction. We knew almost nothing about what was out there for her college wise. Jennifer Wolfe came to my home and worked with her and showed her where and what to focus on. She showed her just how many schools are out there and which one's suited her interests and personality. She helped her really drill down on filling out the common app, clearing away the confusion. More importantly she was able to meet my daughter's many questions indecision and fears. She offered common sense, personalized choices and unique approaches to getting answers. Both myself and my daughter truly can't recommend Wolfewise Consulting and Jen enough. She helped us enter the process of choosing a career path, a direction and a focus for the future with a calm mind and success oriented approach.",
      author: "Patty A."
    }
  ];

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
              My mission is to provide personalized post–high school coaching, helping students discover their authentic path forward while building the skills and confidence needed for tomorrow. I help teens explore their genuine interests and create a plan that reflects their true values and aspirations.
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

        {/* Testimonials Carousel */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
              What Families Say
            </h3>
          </div>
          <div className="bg-gradient-to-r from-primary to-pink-500 rounded-2xl p-6 md:p-8 lg:p-10 shadow-2xl">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                dragFree: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {testimonials.map((testimonial) => (
                  <CarouselItem key={testimonial.id} className="pl-2 md:pl-4">
                    <div className="flex flex-col space-y-4 md:space-y-6">
                      <div className="flex justify-center">
                        <Quote className="w-8 h-8 md:w-12 md:h-12 text-white/80" />
                      </div>
                      <p className="text-base md:text-lg lg:text-xl text-white/95 leading-relaxed italic text-center px-2 md:px-0">
                        "{testimonial.text}"
                      </p>
                      <div className="text-center">
                        <p className="text-base md:text-lg font-semibold text-white">
                          — {testimonial.author}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
