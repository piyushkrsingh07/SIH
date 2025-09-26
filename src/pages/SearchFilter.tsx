import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

const SearchFilter = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-ocean-subtle p-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8 pt-8">
          <h1 className="text-3xl font-bold text-primary mb-2">
            {t("Search & Filter")}
          </h1>
          <p className="text-muted-foreground">
            {t("Search and filter ocean hazard reports")}
          </p>
        </div>
        
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5 text-primary" />
              {t("Global Search")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-6">
              <Input placeholder={t("Search reports, locations, hazards...")} className="flex-1" />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                {t("Search")}
              </Button>
            </div>
            <div className="h-96 bg-muted rounded-lg border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <Filter className="h-12 w-12 mx-auto mb-4" />
                <p>{t("Search results will appear here")}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchFilter;
