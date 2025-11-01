import { Button } from "@/components/ui/button";
import { Calendar, Bot, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary-glow/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/10 backdrop-blur-sm mb-8 border border-primary-foreground/20">
            <Bot className="w-4 h-4" />
            <span className="text-sm font-medium">Powered by AI</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Smarter Healthcare
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground to-secondary-foreground">
              Scheduling
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-primary-foreground/90 max-w-2xl mx-auto">
            AI-powered appointment management that learns from your patterns to optimize scheduling, reduce no-shows, and improve patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/auth">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 shadow-large hover:shadow-medium transition-all hover:scale-105">
                <Calendar className="mr-2 h-5 w-5" />
                Get Started
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 bg-card/10 backdrop-blur-sm hover:bg-card/20 text-primary-foreground hover:text-primary-foreground">
              <Users className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
            <div className="p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-card/20 transition-all hover:scale-105">
              <Calendar className="w-12 h-12 mb-4 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Smart Scheduling</h3>
              <p className="text-primary-foreground/80">AI learns patient preferences and optimizes appointment slots automatically</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-card/20 transition-all hover:scale-105">
              <Bot className="w-12 h-12 mb-4 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold mb-2">AI Assistant</h3>
              <p className="text-primary-foreground/80">Natural language booking with conversational AI that understands context</p>
            </div>
            <div className="p-6 rounded-2xl bg-card/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-card/20 transition-all hover:scale-105">
              <Users className="w-12 h-12 mb-4 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold mb-2">Auto-Fill Slots</h3>
              <p className="text-primary-foreground/80">Automatically fill cancelled appointments with waiting patients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
