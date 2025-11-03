import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, Plus, MessageSquare } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import AIChat from "@/components/AIChat";

const PatientDashboard = () => {
  const [showChat, setShowChat] = useState(false);

  const upcomingAppointments = [
    { id: 1, doctor: "Dr. Sarah Johnson", specialty: "Cardiology", date: "2025-11-05", time: "09:00 AM", status: "confirmed" },
    { id: 2, doctor: "Dr. Michael Chen", specialty: "General Practice", date: "2025-11-12", time: "02:30 PM", status: "pending" },
  ];

  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back, Patient!</h1>
            <p className="text-muted-foreground">Manage your appointments and health visits</p>
          </div>
          <Button className="shadow-soft" onClick={() => setShowChat(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Book Appointment
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                Upcoming
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">2</div>
              <p className="text-sm text-muted-foreground">appointments scheduled</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-success transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-success" />
                Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">8</div>
              <p className="text-sm text-muted-foreground">visits this year</p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-secondary transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5 text-secondary" />
                Doctors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-secondary">3</div>
              <p className="text-sm text-muted-foreground">regular doctors</p>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="flex items-center justify-between p-4 rounded-lg border-2 hover:border-primary transition-all hover:shadow-soft"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{appointment.doctor}</h3>
                      <p className="text-sm text-muted-foreground">{appointment.specialty}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Calendar className="w-4 h-4 text-primary" />
                      {appointment.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {appointment.time}
                    </div>
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      appointment.status === "confirmed" 
                        ? "bg-success/10 text-success" 
                        : "bg-muted text-muted-foreground"
                    }`}>
                      {appointment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-large hover:shadow-medium animate-pulse-glow"
          size="icon"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>

        {showChat && <AIChat onClose={() => setShowChat(false)} />}
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
