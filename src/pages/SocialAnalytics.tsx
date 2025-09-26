import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const SocialAnalytics = () => {
  const { t } = useTranslation();
    const [imageSrc, setImageSrc] = useState(null);
    const [imageSrc2, setImageSrc2] = useState(null);

  const getAnalyticsData=async()=>{
     const response=await fetch(`https://blue-shield-ml.onrender.com/api/source-distribution-plot`,{
      method:"GET"
     }).then(res => res.blob())
      .then(blob => setImageSrc(URL.createObjectURL(blob)));
   
   
  }

    const getSeconddata=async()=>{
     const response=await fetch(`https://blue-shield-ml.onrender.com/api/regional-distribution-plot`,{
      method:"GET"
     }).then(res => res.blob())
      .then(blob => setImageSrc2(URL.createObjectURL(blob)));
   
   
  }


  useEffect(()=>{
   getAnalyticsData()
  getSeconddata()
  },[])
  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {t("Social Media Analytics")}
          </h1>
          <p className="text-muted-foreground">
            {t("Monitor social media buzz and sentiment around ocean hazards")}
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-primary" />
           
            </CardTitle>
          </CardHeader>
          <CardContent className="mt-10">
            <div className="h-96 bg-muted rounded-lg border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
       {imageSrc && <img src={imageSrc} alt="API result" />}
              </div>
            </div>
          <div className="h-96 bg-muted rounded-lg border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="h-12 w-12 mx-auto mb-4" />
             {imageSrc2 && <img src={imageSrc2} alt="API result" />}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SocialAnalytics;
