import { motion } from "framer-motion";
import { MessageSquare, Users, TrendingUp, Clock, Send, Sparkles } from "lucide-react";

const DashboardPreview = () => {
  return (
    <section id="demo" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Dashboard</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-4 mb-6">
            Powerful Insights at
            <br />
            <span className="gradient-text">Your Fingertips</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Monitor, analyze, and optimize your AI conversations with our 
            intuitive dashboard designed for modern teams.
          </p>
        </motion.div>

        {/* Dashboard mockup */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Glow effect behind dashboard */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-3xl opacity-50" />

          {/* Dashboard container */}
          <div className="relative glass-card p-2 glow-violet">
            <div className="bg-card rounded-xl overflow-hidden">
              {/* Dashboard header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/70" />
                <div className="w-3 h-3 rounded-full bg-accent/70" />
                <div className="w-3 h-3 rounded-full bg-primary/70" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="glass px-4 py-1 rounded-md text-xs text-muted-foreground">
                    dashboard.astra.ai
                  </div>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-6">
                {/* Stats row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { icon: MessageSquare, label: "Conversations", value: "12,847", change: "+23%" },
                    { icon: Users, label: "Active Users", value: "3,429", change: "+12%" },
                    { icon: TrendingUp, label: "Resolution Rate", value: "94.2%", change: "+5%" },
                    { icon: Clock, label: "Avg Response", value: "0.8s", change: "-15%" },
                  ].map((stat, index) => (
                    <div key={index} className="glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <stat.icon className="w-5 h-5 text-primary" />
                        <span className="text-xs text-accent">{stat.change}</span>
                      </div>
                      <div className="font-display text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chat preview */}
                <div className="grid lg:grid-cols-2 gap-6">
                  {/* Conversation list */}
                  <div className="glass-card p-4">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-primary" />
                      Recent Conversations
                    </h4>
                    <div className="space-y-3">
                      {[
                        { name: "Sarah Miller", message: "How do I reset my password?", time: "2m", status: "resolved" },
                        { name: "John Davis", message: "Need help with billing", time: "5m", status: "active" },
                        { name: "Emily Chen", message: "Product inquiry about...", time: "12m", status: "resolved" },
                      ].map((chat, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors cursor-pointer">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-semibold text-primary-foreground">
                            {chat.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-foreground text-sm">{chat.name}</span>
                              <span className="text-xs text-muted-foreground">{chat.time}</span>
                            </div>
                            <p className="text-sm text-muted-foreground truncate">{chat.message}</p>
                          </div>
                          <div className={`w-2 h-2 rounded-full ${chat.status === 'active' ? 'bg-green-400' : 'bg-muted'}`} />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chat interface */}
                  <div className="glass-card p-4 flex flex-col">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-primary" />
                      Live Chat
                    </h4>
                    <div className="flex-1 space-y-4 mb-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-semibold">SM</div>
                        <div className="glass-card px-4 py-2 max-w-[80%]">
                          <p className="text-sm">Hi! I'm having trouble accessing my account. Can you help?</p>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-2xl max-w-[80%]">
                          <p className="text-sm text-primary-foreground">Of course! I'd be happy to help you regain access. Let me verify your identity first. What email is associated with your account?</p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 bg-secondary/50 border border-border rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-primary transition-colors"
                      />
                      <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center hover:scale-105 transition-transform">
                        <Send className="w-5 h-5 text-primary-foreground" />
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
