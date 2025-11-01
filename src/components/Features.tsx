import { Calendar, Clock, Users, Bell, BarChart3, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Intelligent Booking",
      description: "Book appointments with natural language. Just say when and the AI finds the best match.",
    },
    {
      icon: Clock,
      title: "Real-Time Updates",
      description: "Instant notifications for appointments, cancellations, and schedule changes.",
    },
    {
      icon: Users,
      title: "Multi-Role Access",
      description: "Separate dashboards for patients, providers, and administrators with role-based permissions.",
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "AI-powered reminders sent at optimal times to reduce no-shows by up to 40%.",
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Comprehensive insights into booking patterns, peak hours, and provider utilization.",
    },
    {
      icon: Sparkles,
      title: "Predictive Optimization",
      description: "Learn from historical data to predict demand and optimize scheduling efficiency.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need for{" "}
            <span className="text-primary">Modern Healthcare</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with advanced AI to streamline every aspect of appointment management
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-2 hover:border-primary transition-all hover:shadow-medium group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
