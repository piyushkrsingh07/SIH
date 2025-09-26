import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

const ReportVerification = () => {
  const { t } = useTranslation();

  const reports = [
    { id: "REP-2024-001", type: t("Tsunami warning"), location: t("Chennai Coast") },
    { id: "REP-2024-002", type: t("High Waves alert"), location: t("Visakhapatnam") },
    { id: "REP-2024-003", type: t("Oil Spill report"), location: t("Kochi Harbor") },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {t("Report Verification")}
          </h1>
          <p className="text-muted-foreground">
            {t("Review and verify citizen-submitted hazard reports")}
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              {t("Pending Verification Queue")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reports.map((report) => (
                <div
                  key={report.id}
                  className="flex items-center justify-between p-4 bg-background rounded-lg border"
                >
                  <div className="flex-1">
                    <h3 className="font-medium">{t("Report")} {report.id}</h3>
                    <p className="text-sm text-muted-foreground">
                      {report.type} - {report.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-success border-success"
                    >
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {t("Verify")}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-destructive border-destructive"
                    >
                      <XCircle className="h-4 w-4 mr-1" />
                      {t("Reject")}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportVerification;
