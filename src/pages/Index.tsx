import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Stethoscope, ShieldCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Choose Your Dashboard</h2>
            <p className="text-muted-foreground text-lg">Access your personalized healthcare portal</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link to="/dashboard/patient" className="group">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Patient Portal</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Book appointments, view medical records, and chat with AI assistant
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-primary font-semibold group-hover:underline">Access Portal →</span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/dashboard/doctor" className="group">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Stethoscope className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Doctor Portal</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Manage schedule, view patient appointments, and access AI insights
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-primary font-semibold group-hover:underline">Access Portal →</span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/dashboard/admin" className="group">
              <Card className="border-2 hover:border-primary transition-all hover:shadow-lg h-full">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">Admin Portal</CardTitle>
                  <CardDescription className="text-base mt-2">
                    Monitor system metrics, manage users, and view AI analytics
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <span className="text-primary font-semibold group-hover:underline">Access Portal →</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
      
      <Features />
      <Footer />
    </div>
  );
};

export default Index;
