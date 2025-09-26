import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Users, Activity, Database } from "lucide-react";
import { useTranslation } from "react-i18next";

const AdminPanel = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Users,
      title: t("User Management"),
      description: t("Manage roles and permissions"),
      color: "text-primary",
    },
    {
      icon: Activity,
      title: t("Activity Logs"),
      description: t("Monitor system activity"),
      color: "text-accent",
    },
    {
      icon: Database,
      title: t("Data Management"),
      description: t("Database administration"),
      color: "text-success",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">{t("Admin Panel")}</h1>
          <p className="text-muted-foreground">{t("System administration and user management")}</p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              {t("System Administration")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-background rounded-lg border">
                  <feature.icon className={`h-8 w-8 mx-auto mb-2 ${feature.color}`} />
                  <h3 className="font-medium">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
