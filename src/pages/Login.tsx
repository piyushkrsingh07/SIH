import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Shield, Users, BarChart } from "lucide-react";
import incoLogo from "@/assets/incois-logo.png";
import { useTranslation } from "react-i18next";

const Login = () => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const { t } = useTranslation();

  const roles = [
    { value: "citizen", label: t("Citizen"), icon: Users, description: t("Report ocean hazards") },
    { value: "analyst", label: t("Analyst"), icon: BarChart, description: t("Advanced analytics") },
    { value: "official", label: t("Official"), icon: Shield, description: t("Monitor and analyze data") },
  ];

  return (
    <div className="min-h-screen bg-gradient-ocean flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <img src={incoLogo} alt="INCOIS" className="h-16 w-16 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-white mb-2">{t("INCOIS")}</h1>
          <p className="text-white/80">{t("Ocean Hazard Reporting Platform")}</p>
        </div>

        {/* Card */}
        <Card className="shadow-ocean">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Waves className="h-5 w-5 text-primary" />
              {t("Sign In")}
            </CardTitle>
            <CardDescription className="text-center">
              {t("Access the Ocean Hazard Reporting & Analytics Platform")}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs defaultValue="email" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="email">{t("Email")}</TabsTrigger>
                <TabsTrigger value="phone">{t("Phone")}</TabsTrigger>
              </TabsList>
              
              {/* Email Tab */}
              <TabsContent value="email" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">{t("Email Address")}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={t("Enter your email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </TabsContent>
              
              {/* Phone Tab */}
              <TabsContent value="phone" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">{t("Phone Number")}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder={t("Enter your phone number")}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </TabsContent>

              {/* Role Select */}
              <div className="space-y-2 mt-4">
                <Label htmlFor="role">{t("Role")}</Label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger>
                    <SelectValue placeholder={t("Select your role")} />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((roleOption) => (
                      <SelectItem key={roleOption.value} value={roleOption.value}>
                        <div className="flex items-center gap-2">
                          <roleOption.icon className="h-4 w-4" />
                          <div>
                            <div className="font-medium">{roleOption.label}</div>
                            <div className="text-sm text-muted-foreground">{roleOption.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full mt-6 bg-primary hover:bg-primary-dark">
                {t("Send OTP")}
              </Button>
            </Tabs>

            {/* Citizen Register Link */}
            {role === "citizen" && (
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  {t("First time user?")}{" "}
                  <Link to="/register">
                    <Button variant="link" className="p-0 h-auto text-primary">
                      {t("Register here")}
                    </Button>
                  </Link>
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
