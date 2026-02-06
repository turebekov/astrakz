import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border py-16 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-icon flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">Astra</span>
            </div>
            <p className="text-muted-foreground text-sm mb-6">
              Онлайн-чат и мессенджеры для бизнеса. Общайтесь с клиентами там, где им удобно.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: "Продукт",
              links: ["Онлайн-чат", "Мессенджеры", "ИИ-ассистент", "Аналитика"],
            },
            {
              title: "Компания",
              links: ["О нас", "Блог", "Вакансии", "Контакты"],
            },
            {
              title: "Поддержка",
              links: ["Документация", "API", "База знаний", "Статус"],
            },
          ].map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Astra. Все права защищены.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
