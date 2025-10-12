const Mission = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            <span className="text-primary">Our</span> <span className="text-white">Mission</span>
          </h2>

          <div className="prose prose-lg max-w-none space-y-6 text-white/90">
            <p className="text-lg md:text-xl leading-relaxed">
              Wolfewise Coaching empowers teenagers to discover their authentic path forward and make confident decisions about their future. We believe every teen deserves to be heard, understood, and supported as they navigate the critical transition from high school to adulthood.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              Our mission is to partner with students and families to transform confusion into clarity and anxiety into confidence. Through personalized coaching grounded in 28 years of educational expertise, we help teens explore their genuine interests, develop essential life skills, and create a post-graduation plan that reflects their true values and aspirations—not external pressures or expectations.
            </p>

            <p className="text-lg md:text-xl leading-relaxed">
              We are committed to honoring every path—whether college, vocational training, gap year, or alternative routes—because we believe success looks different for every individual. By fostering self-discovery, building decision-making confidence, and strengthening family communication, we prepare teens not just for their next step, but for a lifetime of purposeful choices.
            </p>

            <p className="text-lg md:text-xl leading-relaxed font-semibold text-primary bg-white/10 p-6 rounded-xl border-l-4 border-primary">
              At Wolfewise Coaching, we don't tell students where to go. We help them discover where they want to be—and give them the tools to get there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
