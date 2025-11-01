import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, TrendingUp, Activity } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

const AdminDashboard = () => {
  return (
    <DashboardLayout role="admin">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-muted-foreground">System overview and analytics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Calendar className="w-5 h-5 text-primary" />
                Total Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">1,234</div>
              <p className="text-sm text-muted-foreground">this month</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-success transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Users className="w-5 h-5 text-success" />
                Active Patients
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">856</div>
              <p className="text-sm text-muted-foreground">registered</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Activity className="w-5 h-5 text-secondary" />
                Providers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">24</div>
              <p className="text-sm text-muted-foreground">active doctors</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <TrendingUp className="w-5 h-5 text-primary" />
                AI Efficiency
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">94%</div>
              <p className="text-sm text-muted-foreground">optimization rate</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest system events</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { event: "New appointment booked", time: "2 minutes ago", type: "success" },
                  { event: "Provider schedule updated", time: "15 minutes ago", type: "info" },
                  { event: "AI auto-filled cancellation", time: "1 hour ago", type: "success" },
                  { event: "Patient registered", time: "2 hours ago", type: "info" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg border">
                    <span className="text-sm">{item.event}</span>
                    <span className="text-xs text-muted-foreground">{item.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle>AI Insights</CardTitle>
              <CardDescription>Optimization recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-gradient-hero/10 border-2 border-primary/20">
                  <h4 className="font-semibold text-primary mb-2">Peak Hour Detected</h4>
                  <p className="text-sm text-muted-foreground">Tuesday 2-4 PM shows 40% higher demand. Consider adding staff.</p>
                </div>
                <div className="p-4 rounded-lg bg-success/10 border-2 border-success/20">
                  <h4 className="font-semibold text-success mb-2">No-Show Rate Decreased</h4>
                  <p className="text-sm text-muted-foreground">AI reminders reduced no-shows by 35% this month.</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/10 border-2 border-secondary/20">
                  <h4 className="font-semibold text-secondary mb-2">Provider Utilization</h4>
                  <p className="text-sm text-muted-foreground">Dr. Johnson has 8 available slots this week.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
