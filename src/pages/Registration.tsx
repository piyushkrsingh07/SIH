import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Waves, ArrowLeft } from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";
import { useTranslation } from "react-i18next";

const Registration = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    aadhar: "",
  });

  const handleInputChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Location:", position.coords.latitude, position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    } else {
      alert(t("Geolocation is not supported by this browser."));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <img src={incoLogo} alt="INCOIS" className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">{t("INCOIS")}</h1>
          <p className="text-white/80">{t("Citizen Registration")}</p>
        </div>

        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              {t("Register as Citizen")}
            </CardTitle>
            <CardDescription className="text-center">
              {t("Join the Ocean Hazard Reporting Platform")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">{t("Full Name *")}</Label>
              <Input
                id="fullName"
                type="text"
                placeholder={t("Enter your full name")}
                value={formData.fullName}
                onChange={handleInputChange("fullName")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">{t("Email Address *")}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t("Enter your email")}
                value={formData.email}
                onChange={handleInputChange("email")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t("Phone Number *")}</Label>
              <Input
                id="phone"
                type="tel"
                placeholder={t("Enter your phone number")}
                value={formData.phone}
                onChange={handleInputChange("phone")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t("Location Access")}</Label>
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                onClick={handleGetLocation}
              >
                {t("Get Current Location")}
              </Button>
              <p className="text-xs text-muted-foreground">
                {t("We'll automatically detect your location for better service")}
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="aadhar">{t("Aadhar Number *")}</Label>
              <Input
                id="aadhar"
                type="text"
                placeholder={t("Enter your 12-digit Aadhar number")}
                value={formData.aadhar}
                onChange={handleInputChange("aadhar")}
                maxLength={12}
                pattern="[0-9]{12}"
                required
              />
            </div>

            <div className="space-y-2">
              <Button 
                type="button" 
                variant="outline" 
                className="w-full"
                disabled
              >
                {t("Verify with DigiLocker")}
              </Button>
            </div>

            <Button className="w-full mt-6 bg-primary hover:bg-primary-dark" disabled>
              {t("Complete Registration")}
            </Button>

            <div className="text-center mt-4">
              <Link to="/login">
                <Button variant="ghost" className="flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  {t("Back to Sign In")}
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Registration;
