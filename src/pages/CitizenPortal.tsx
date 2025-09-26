import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Calendar, Filter, Eye, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";

const CitizenPortal = () => {
  const { t } = useTranslation();

  const reports = [
    {
      id: "REP-001",
      type: t("Tsunami"),
      status: "verified",
      date: "2024-01-15",
      location: t("Marina Beach, Chennai"),
      description: t("Unusual wave patterns observed"),
    },
    {
      id: "REP-002", 
      type: t("High Waves"),
      status: "pending",
      date: "2024-01-14",
      location: t("Visakhapatnam Port"),
      description: t("Waves reaching 3-4 meters height"),
    },
    {
      id: "REP-003",
      type: t("Oil Spill"),
      status: "rejected",
      date: "2024-01-12",
      location: t("Kochi Harbor"),
      description: t("Small oil patch near fishing boats"),
    },
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      verified: "bg-success text-success-foreground",
      pending: "bg-warning text-warning-foreground", 
      rejected: "bg-destructive text-destructive-foreground",
    };
    return variants[status as keyof typeof variants] || "bg-muted";
  };

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">{t("My Reports")}</h1>
          <p className="text-muted-foreground">
            {t("Track your ocean hazard reports and their verification status")}
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              {t("Filter Reports")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Input placeholder={t("Search by location...")} />
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t("Hazard Type")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("All Types")}</SelectItem>
                    <SelectItem value="tsunami">{t("Tsunami")}</SelectItem>
                    <SelectItem value="flooding">{t("Flooding")}</SelectItem>
                    <SelectItem value="high-waves">{t("High Waves")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t("Status")} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t("All Status")}</SelectItem>
                    <SelectItem value="verified">{t("Verified")}</SelectItem>
                    <SelectItem value="pending">{t("Pending")}</SelectItem>
                    <SelectItem value="rejected">{t("Rejected")}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports List */}
        <div className="space-y-4">
          {reports.map((report) => (
            <Card key={report.id} className="shadow-card hover:shadow-ocean transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-lg">{t("Report")} {report.id}</h3>
                      <Badge className={getStatusBadge(report.status)}>
                        {t(report.status.charAt(0).toUpperCase() + report.status.slice(1))}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        {report.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {report.date}
                      </div>
                      <div className="flex items-center gap-1 md:col-span-2">
                        <MapPin className="h-4 w-4" />
                        {report.location}
                      </div>
                    </div>
                    
                    <p className="text-sm text-foreground">{report.description}</p>
                  </div>

                  <div className="flex flex-col gap-2 md:w-48">
                    {/* Mini Map Thumbnail */}
                    <div className="h-24 bg-muted rounded border flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Eye className="h-4 w-4 mr-2" />
                      {t("View Details")}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">5</div>
              <div className="text-sm text-muted-foreground">{t("Total Reports")}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">3</div>
              <div className="text-sm text-muted-foreground">{t("Verified")}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">2</div>
              <div className="text-sm text-muted-foreground">{t("Pending Review")}</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CitizenPortal;
