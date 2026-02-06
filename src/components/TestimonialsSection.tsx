import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Алексей Сидоров",
    role: "Директор, ООО «ТехноМир»",
    content: "После установки Astra конверсия сайта выросла на 40%. Клиенты получают ответы мгновенно, а менеджеры экономят часы на рутине.",
    rating: 5,
  },
  {
    name: "Елена Морозова",
    role: "Руководитель отдела продаж, ShopOnline",
    content: "Наконец-то все мессенджеры в одном окне! Операторы больше не переключаются между приложениями, а клиенты довольны скоростью ответов.",
    rating: 5,
  },
  {
    name: "Михаил Козлов",
    role: "Основатель, Startup.pro",
    content: "Установка заняла 5 минут. Без программистов, без головной боли. ИИ-бот закрывает 70% вопросов автоматически.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="relative py-32 px-6 bg-card">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-icon/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-icon font-semibold text-sm uppercase tracking-wider">Отзывы</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Нам доверяют
            <br />
            <span className="gradient-text">300 000+ компаний</span>
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
              className="glass-card p-8 relative group hover:border-icon/30 transition-all duration-500"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-icon/20" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                «{testimonial.content}»
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-icon flex items-center justify-center text-lg font-semibold text-white">
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
