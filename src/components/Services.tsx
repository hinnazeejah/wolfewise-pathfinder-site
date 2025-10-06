import { Link } from "react-router-dom";
import { BookOpen, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: BookOpen,
      title: "Personalized Tutoring",
      description:
        "Strengthen academic skills with individualized support tailored to each student's learning style and goals.",
    },
    {
      icon: Compass,
      title: "Post–High School Coaching",
      description:
        "Discover passions, explore pathways, and plan a future that aligns with your teen's authentic strengths and aspirations.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-pink-50">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Our Services</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            Combining academic support with future-focused guidance to empower every student.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="border-2 border-primary/20 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 bg-white"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center mb-4 shadow-lg">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-secondary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base text-foreground/80 mb-6">
                    {service.description}
                  </CardDescription>
                  <Link to="/book">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                      Book a Consultation
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
