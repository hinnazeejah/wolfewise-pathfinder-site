import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Jen guided both of my sons through their academic journey with remarkable insight and dedication. Despite their academic similarities, my sons have distinct interests and strengths, and Jen demonstrated exceptional sensitivity to each of their unique personalities. She provided guidance not only based on the most research but also with genuine care and concern for their individual paths. While Jen's brilliance and articulate communication are immediately apparent, what truly sets her apart is her unmatched ability to deeply connect with her students and listen to what they have to say. I cannot recommend Jen highly enough to any family seeking an educator who combines intellectual rigor with authentic personal investment in student success.",
      author: "Alisa R.",
    },
    {
      quote:
        "My daughter had such trouble narrowing down where she wanted to go to school. She had no idea how to take her strengths and apply them to her future direction. We knew almost nothing about what was out there for her college wise. Jennifer Wolfe came to my home and worked with her and showed her where and what to focus on. She showed her just how many schools are out there and which one's suited her interests and personality. She helped her really drill down on filling out the common app, clearing away the confusion. More importantly she was able to meet my daughter's many questions indecision and fears. She offered common sense, informed information and approaches to getting answers. Both myself and my daughter truly can't recommend Wolfewise Consulting and Jen enough. She helped us enter the process of choosing a career path, a direction and a focus for the future with a calm mind and success oriented approach.",
      author: "Patty A.",
    },
    {
      quote:
        "Thank you to Ms Wolfe for helping me perfect my essay. She listened to me and asked me questions that helped me really think about my goals and future self. Ms Wolfe was a pleasure to work with and I can't thank her enough.",
      author: "Billy G.",
    },
    {
      quote:
        "I watched Jen, in the course of catching up with a friend's daughter, help her figure out what she wanted at college beyond the academics. Jen was able to get to the heart of what really lit her up - playing polo - she really wanted to go somewhere that had a woman's polo team and equine studies. She was surprised herself, of what she was saying out loud - something she hadn't really said out loud before. This realization helped her pick the appropriate University and verbalize what she really saw herself doing. Jen simply asked her questions, taking cues from her responses, and helped her get at the heart of what our friend's daughter really wanted. Jen listened without judgement or agenda, and it seems to me that her approach works very well with teens.",
      author: "Sushil N.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text mb-4">
            What Families Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from parents and students who found clarity and confidence through WolfeWise Consulting.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-2 border-primary/10 bg-accent/30 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6 md:p-8">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <blockquote className="text-foreground/80 leading-relaxed mb-6 text-sm md:text-base">
                  "{testimonial.quote}"
                </blockquote>
                <footer className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <cite className="not-italic font-heading font-semibold text-foreground">
                    {testimonial.author}
                  </cite>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
