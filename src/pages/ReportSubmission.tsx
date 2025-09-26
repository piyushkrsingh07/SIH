import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Camera, MapPin, AlertTriangle, Upload } from "lucide-react";

const ReportSubmission = () => {
  const { t } = useTranslation();

  const [hazardType, setHazardType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const hazardTypes = [
    { value: "tsunami", label: t("Tsunami"), icon: "🌊" },
    { value: "flooding", label: t("Coastal Flooding"), icon: "🌊" },
    { value: "high-waves", label: t("High Waves"), icon: "🌊" },
    { value: "storm-surge", label: t("Storm Surge"), icon: "⛈️" },
    { value: "oil-spill", label: t("Oil Spill"), icon: "🛢️" },
    { value: "marine-debris", label: t("Marine Debris"), icon: "🗑️" },
    { value: "unusual-activity", label: t("Unusual Ocean Activity"), icon: "⚠️" },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {t("Report Ocean Hazard")}
          </h1>
          <p className="text-muted-foreground">
            {t("Help us monitor ocean safety by reporting hazards in your area")}
          </p>
        </div>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              {t("Hazard Report Form")}
            </CardTitle>
            <CardDescription>
              {t("Provide details about the ocean hazard you've observed")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Hazard Type Selection */}
            <div className="space-y-2">
              <Label htmlFor="hazard-type">{t("Hazard Type *")}</Label>
              <Select value={hazardType} onValueChange={setHazardType}>
                <SelectTrigger>
                  <SelectValue placeholder={t("Select hazard type")} />
                </SelectTrigger>
                <SelectContent>
                  {hazardTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      <div className="flex items-center gap-2">
                        <span>{type.icon}</span>
                        <span>{type.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">{t("Location *")}</Label>
              <div className="flex gap-2">
                <Input
                  id="location"
                  placeholder={t("Current location (auto-detected)")}
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="flex-1"
                />
                <Button variant="outline" size="icon">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {t("📍 GPS coordinates will be automatically captured")}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">{t("Description *")}</Label>
              <Textarea
                id="description"
                placeholder={t("Describe what you observed (severity, time, conditions, etc.)")}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
              />
            </div>

            {/* Media Upload */}
            <div className="space-y-2">
              <Label>{t("Photo/Video Evidence")}</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground mb-2">
                  {t("Drag and drop files here, or click to browse")}
                </p>
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-2" />
                  {t("Choose Files")}
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  {t("Supports JPG, PNG, MP4 (max 10MB each)")}
                </p>
              </div>
            </div>

            {/* Interactive Map Preview */}
            <div className="space-y-2">
              <Label>{t("Location on Map")}</Label>
              <div className="h-64 bg-muted rounded-lg border flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-8 w-8 mx-auto mb-2" />
                  <p>{t("Interactive map will show here")}</p>
                  <p className="text-sm">
                    {t("Drag marker to adjust exact location")}
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" className="flex-1">
                {t("Save as Draft")}
              </Button>
              <Button className="flex-1 bg-primary hover:bg-primary-dark">
                {t("Submit Report")}
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {t("Your report will be reviewed by our verification team")}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReportSubmission;
