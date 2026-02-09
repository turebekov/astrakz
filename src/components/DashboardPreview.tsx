import { motion } from "framer-motion";
import { MessageSquare, Send, Paperclip, Smile, User, Clock, CheckCheck } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="demo" className="relative py-32 px-6 bg-background overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-icon/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-icon font-semibold text-sm uppercase tracking-wider">Интерфейс</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Удобный рабочий
            <br />
            <span className="gradient-text">кабинет оператора</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Интуитивный интерфейс для работы с обращениями. Все диалоги, 
            история и информация о клиенте — в одном окне.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="glass-card glow-coral p-2 md:p-4">
            <div className="bg-muted/50 rounded-xl overflow-hidden">
              {/* Header */}
              <div className="bg-background border-b border-border px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-icon flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Панель оператора</h3>
                    <p className="text-xs text-muted-foreground">5 активных диалогов</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-sm text-muted-foreground">Онлайн</span>
                </div>
              </div>

              {/* Content */}
              <div className="grid md:grid-cols-3 min-h-[500px]">
                {/* Conversations list */}
                <div className="border-r border-border bg-background/50">
                  <div className="p-4 border-b border-border">
                    <input 
                      type="text" 
                      placeholder="Поиск диалогов..." 
                      className="w-full px-4 py-2 rounded-lg bg-muted border border-border text-sm focus:outline-none focus:border-icon/50"
                    />
                  </div>
                  <div className="divide-y divide-border">
                    {[
                      { name: "Айжан Қасымова", message: "Сәлеметсіз бе! Жеткізу туралы айтыңызшы", time: "2 мин", unread: true, source: "WhatsApp" },
                      { name: "Нұрлан Ахметов", message: "Тапсырыс қашан дайын болады?", time: "15 мин", unread: true, source: "Telegram" },
                      { name: "Дана Бекболатова", message: "Көмегіңізге рахмет!", time: "1 час", unread: false, source: "Сайт" },
                      { name: "Бауыржан Сейітов", message: "Жеңілдіктер бар ма?", time: "2 часа", unread: false, source: "Instagram" },
                    ].map((chat, i) => (
                      <div key={i} className={`p-4 hover:bg-muted/50 cursor-pointer transition-colors ${i === 0 ? 'bg-icon/5 border-l-2 border-l-icon' : ''}`}>
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-full bg-icon/20 flex items-center justify-center">
                            <User className="w-5 h-5 text-icon" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground text-sm">{chat.name}</span>
                              <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                            <span className="text-xs text-icon mt-1 inline-block">{chat.source}</span>
                          </div>
                          {chat.unread && <span className="w-2 h-2 rounded-full bg-icon"></span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Chat area */}
                <div className="md:col-span-2 flex flex-col bg-background">
                  {/* Chat header */}
                  <div className="p-4 border-b border-border flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-icon/20 flex items-center justify-center">
                        <User className="w-5 h-5 text-icon" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Айжан Қасымова</h4>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          Онлайн • WhatsApp
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-4 h-4 text-icon" />
                      Алматы, 18:32
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                    {/* Customer message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-icon/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-icon" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3 max-w-md">
                        <p className="text-sm text-foreground">Сәлеметсіз бе! Алматыға жеткізу қанша уақыт алады?</p>
                        <span className="text-xs text-muted-foreground mt-1 block">15:30</span>
                      </div>
                    </div>

                    {/* Operator message */}
                    <div className="flex gap-3 justify-end">
                      <div className="bg-icon text-white rounded-2xl rounded-tr-md px-4 py-3 max-w-md">
                        <p className="text-sm">Сәлеметсіз бе, Айжан! Алматыға жеткізу 1-2 жұмыс күн. 5000₸-ден тапсырыс берсеңіз — тегін 🚚</p>
                        <div className="flex items-center justify-end gap-1 mt-1">
                          <span className="text-xs opacity-70">15:31</span>
                          <CheckCheck className="w-4 h-4 opacity-70" />
                        </div>
                      </div>
                    </div>

                    {/* Customer message */}
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-icon/20 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-icon" />
                      </div>
                      <div className="bg-muted rounded-2xl rounded-tl-md px-4 py-3 max-w-md">
                        <p className="text-sm text-foreground">Жақсы! Алғанда төлеуге бола ма?</p>
                        <span className="text-xs text-muted-foreground mt-1 block">15:32</span>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex gap-3 justify-end">
                      <div className="bg-icon/10 border border-icon/20 rounded-2xl px-4 py-3">
                        <div className="flex gap-1">
                          <span className="w-2 h-2 rounded-full bg-icon animate-bounce" style={{ animationDelay: '0ms' }}></span>
                          <span className="w-2 h-2 rounded-full bg-icon animate-bounce" style={{ animationDelay: '150ms' }}></span>
                          <span className="w-2 h-2 rounded-full bg-icon animate-bounce" style={{ animationDelay: '300ms' }}></span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Input area */}
                  <div className="p-4 border-t border-border">
                    <div className="flex items-center gap-3">
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Paperclip className="w-5 h-5 text-muted-foreground" />
                      </button>
                      <input 
                        type="text" 
                        placeholder="Введите сообщение..." 
                        className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:border-icon/50"
                      />
                      <button className="p-2 rounded-lg hover:bg-muted transition-colors">
                        <Smile className="w-5 h-5 text-muted-foreground" />
                      </button>
                      <button className="p-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                        <Send className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DashboardPreview;
