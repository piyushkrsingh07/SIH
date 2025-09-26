import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart, Activity, MapPin, AlertTriangle, CheckCircle, Clock, TrendingUp } from "lucide-react";
import HazardMap from "@/components/HazardMap";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const { t } = useTranslation();

  const metrics = [
    { label: t("Total Reports"), value: "1,234", change: "+12%", icon: BarChart, color: "text-primary" },
    { label: t("Verified Reports"), value: "987", change: "+8%", icon: CheckCircle, color: "text-success" },
    { label: t("Active Hotspots"), value: "23", change: "+3", icon: AlertTriangle, color: "text-warning" },
    { label: t("Social Alerts"), value: "156", change: "+24%", icon: TrendingUp, color: "text-accent" },
  ];

  const recentReports = [
    { id: "REP-2024-001", type: t("Tsunami"), location: t("Chennai Coast"), status: "verified", time: t("2 mins ago") },
    { id: "REP-2024-002", type: t("High Waves"), location: t("Visakhapatnam"), status: "pending", time: t("5 mins ago") },
    { id: "REP-2024-003", type: t("Oil Spill"), location: t("Kochi Harbor"), status: "verified", time: t("12 mins ago") },
    { id: "REP-2024-004", type: t("Storm Surge"), location: t("Paradip Port"), status: "pending", time: t("18 mins ago") },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {t("Ocean Hazard Dashboard")}
          </h1>
          <p className="text-muted-foreground">
            {t("Real-time monitoring and analytics of ocean hazards across Indian coastline")}
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                    <p className="text-2xl font-bold mt-1">{metric.value}</p>
                    <p className="text-sm text-success mt-1">{metric.change}</p>
                  </div>
                  <metric.icon className={`h-8 w-8 ${metric.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Central Map */}
          <HazardMap />

          {/* Live Feed */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                {t("Live Report Feed")}
              </CardTitle>
              <CardDescription>
                {t("Latest citizen and verified reports")}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recentReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-3 bg-background rounded-lg border">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium">{report.id}</span>
                        <Badge
                          variant={report.status === "verified" ? "default" : "secondary"}
                          className={report.status === "verified" ? "bg-success text-success-foreground" : ""}
                        >
                          {t(report.status.charAt(0).toUpperCase() + report.status.slice(1))}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {report.type} - {report.location}
                      </p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {report.time}
                      </p>
                    </div>
                    <Button variant="ghost" size="sm">
                      {t("View")}
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section - Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">{t("Hotspot Analysis")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">23</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("Active hotspots identified")}
                </p>
                <Button variant="outline" className="w-full">
                  {t("View Analysis")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">{t("Social Media Buzz")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">156</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("Social alerts detected")}
                </p>
                <Button variant="outline" className="w-full">
                  {t("View Analytics")}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-lg">{t("Verification Queue")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">42</div>
                <p className="text-sm text-muted-foreground mb-4">
                  {t("Reports pending verification")}
                </p>
                <Button variant="outline" className="w-full">
                  {t("Start Verification")}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
