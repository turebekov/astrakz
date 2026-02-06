import { motion } from "framer-motion";
import { MessageSquare, Users, Smartphone, Bot, BarChart3, Headphones } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Онлайн-чат для сайта",
    description: "Установите виджет чата за 5 минут. Общайтесь с посетителями в реальном времени и увеличивайте конверсию.",
  },
  {
    icon: Users,
    title: "Все мессенджеры в одном окне",
    description: "Telegram, WhatsApp, ВКонтакте, Viber — отвечайте на сообщения из всех каналов в едином интерфейсе.",
  },
  {
    icon: Smartphone,
    title: "Мобильное приложение",
    description: "Отвечайте клиентам где угодно. Приложения для iOS и Android с push-уведомлениями.",
  },
  {
    icon: Bot,
    title: "ИИ-ассистент",
    description: "Автоматизируйте ответы на частые вопросы с помощью искусственного интеллекта. Работает 24/7.",
  },
  {
    icon: BarChart3,
    title: "Аналитика и отчёты",
    description: "Отслеживайте эффективность операторов, время ответа и удовлетворённость клиентов.",
  },
  {
    icon: Headphones,
    title: "Обратный звонок",
    description: "Клиент оставляет номер — система соединяет его с оператором за 28 секунд.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32 px-6 bg-card">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-icon/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-icon font-semibold text-sm uppercase tracking-wider">Возможности</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Всё для общения
            <br />
            <span className="gradient-text">с клиентами</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Astra помогает бизнесу быть ближе к клиентам. Отвечайте быстрее, 
            продавайте больше и повышайте лояльность.
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
              className="group glass-card p-8 hover:border-icon/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-icon/10 border border-border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-icon/50 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-icon" />
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
