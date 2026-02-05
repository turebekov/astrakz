import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex Thompson",
    role: "CTO at TechFlow",
    content: "Astra reduced our support ticket volume by 60% while improving customer satisfaction scores. It's been transformative for our team.",
    rating: 5,
  },
  {
    name: "Sarah Chen",
    role: "VP of Customer Success, Nexus",
    content: "The AI understands context like no other solution we've tried. Our customers love the natural, helpful conversations.",
    rating: 5,
  },
  {
    name: "Michael Roberts",
    role: "Founder, StartupXYZ",
    content: "Setup took minutes, not months. Astra integrated seamlessly with our existing tools and started delivering value immediately.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 px-6">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Trusted by Industry
            <br />
            <span className="gradient-text">Leaders Worldwide</span>
          </h2>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card p-8 relative group hover:border-primary/50 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-lg font-semibold text-primary-foreground">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
