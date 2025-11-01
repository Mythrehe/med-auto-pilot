import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [role, setRole] = useState<"patient" | "provider" | "admin">("patient");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Logged in successfully.",
    });
    
    // Navigate based on role
    if (role === "patient") navigate("/dashboard/patient");
    else if (role === "provider") navigate("/dashboard/provider");
    else navigate("/dashboard/admin");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Account created!",
      description: "Welcome to MedSched AI.",
    });
    
    if (role === "patient") navigate("/dashboard/patient");
    else if (role === "provider") navigate("/dashboard/provider");
    else navigate("/dashboard/admin");
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Link to="/" className="inline-flex items-center gap-2 text-primary-foreground mb-6 hover:opacity-80 transition-opacity">
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <Card className="shadow-large border-2">
          <CardHeader className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-hero flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Welcome to MedSched AI</CardTitle>
            <CardDescription>Sign in or create an account to continue</CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <div className="mb-6">
                <Label className="mb-3 block">I am a:</Label>
                <div className="grid grid-cols-3 gap-2">
                  <Button
                    type="button"
                    variant={role === "patient" ? "default" : "outline"}
                    onClick={() => setRole("patient")}
                    className="w-full"
                  >
                    Patient
                  </Button>
                  <Button
                    type="button"
                    variant={role === "provider" ? "default" : "outline"}
                    onClick={() => setRole("provider")}
                    className="w-full"
                  >
                    Provider
                  </Button>
                  <Button
                    type="button"
                    variant={role === "admin" ? "default" : "outline"}
                    onClick={() => setRole("admin")}
                    className="w-full"
                  >
                    Admin
                  </Button>
                </div>
              </div>

              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Sign In</Button>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSignup} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" type="text" placeholder="John Doe" required />
                  </div>
                  <div>
                    <Label htmlFor="signup-email">Email</Label>
                    <Input id="signup-email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>
                  <div>
                    <Label htmlFor="signup-password">Password</Label>
                    <Input id="signup-password" type="password" placeholder="••••••••" required />
                  </div>
                  <Button type="submit" className="w-full">Create Account</Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;
