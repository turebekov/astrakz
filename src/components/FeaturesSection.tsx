import { motion } from "framer-motion";
import { Brain, MessageSquare, Globe, Lock, Zap, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Engine",
    description: "Powered by state-of-the-art language models that understand context, emotion, and intent with unprecedented accuracy.",
  },
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Human-like dialogue that adapts to your brand voice. Create seamless experiences that feel personal and authentic.",
  },
  {
    icon: Globe,
    title: "100+ Languages",
    description: "Break language barriers with real-time translation and localization. Connect with customers worldwide.",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "SOC 2 Type II certified with end-to-end encryption. Your data stays protected with military-grade security.",
  },
  {
    icon: Zap,
    title: "Instant Responses",
    description: "Sub-100ms response times ensure smooth, real-time conversations that keep users engaged.",
  },
  {
    icon: BarChart3,
    title: "Deep Analytics",
    description: "Comprehensive insights into customer behavior, sentiment analysis, and conversation metrics.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-6">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Transform Support</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Astra combines cutting-edge AI with intuitive design to deliver 
            customer experiences that drive loyalty and growth.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group glass-card p-8 hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
