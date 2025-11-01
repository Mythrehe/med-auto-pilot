import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, LogOut, Settings, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
  role: "patient" | "provider" | "admin";
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <span className="text-xl font-bold">MedSched AI</span>
                <span className="ml-2 text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </span>
              </div>
            </Link>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <LayoutDashboard className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
