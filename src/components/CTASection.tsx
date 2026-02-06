import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-12 md:p-16 glow-coral"
        >
          <div className="inline-flex items-center gap-2 bg-icon/10 border border-icon/30 rounded-full px-4 py-2 mb-8">
            <MessageCircle className="w-4 h-4 text-icon" />
            <span className="text-sm text-icon font-medium">Начните бесплатно прямо сейчас</span>
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Готовы увеличить
            <br />
            <span className="gradient-text">продажи с сайта?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Присоединяйтесь к 300 000+ компаний, которые уже используют Astra 
            для общения с клиентами. Установка за 5 минут.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" className="group">
              Попробовать бесплатно
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="glass" size="xl">
              Связаться с нами
            </Button>
          </div>

          <p className="text-sm text-muted-foreground mt-8">
            ✓ Бесплатный тариф навсегда &nbsp;&nbsp; ✓ Без банковской карты &nbsp;&nbsp; ✓ Техподдержка 24/7
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
