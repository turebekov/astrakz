import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, MessageCircle, Users, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border))_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />

      <div className="relative max-w-7xl mx-auto text-center z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-card border border-border rounded-full px-4 py-2 mb-8 shadow-sm"
        >
          <MessageCircle className="w-4 h-4 text-icon" />
          <span className="text-sm text-foreground font-medium">Онлайн-чат для сайта №1 в Казахстане</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance"
        >
          Общайтесь с клиентами
          <br />
          <span className="gradient-text">там, где им удобно</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-balance"
        >
          Astra объединяет все каналы связи в одном приложении: чат на сайте, 
          мессенджеры, соцсети и электронную почту. Отвечайте клиентам мгновенно.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button variant="hero" size="xl" className="group">
            Попробовать бесплатно
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl" className="group">
            <Play className="w-5 h-5 text-primary" />
            Смотреть демо
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { Icon: MessageCircle, value: "10М+", label: "Сообщений в день" },
            { Icon: Users, value: "300 000+", label: "Компаний" },
            { Icon: Clock, value: "24/7", label: "Техподдержка" },
          ].map((stat, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                <stat.Icon className="w-6 h-6 text-icon" />
              </div>
              <div className="text-left">
                <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
