import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import ReportSubmission from "./pages/ReportSubmission";
import CitizenPortal from "./pages/CitizenPortal";
import Dashboard from "./pages/Dashboard";
import HotspotAnalytics from "./pages/HotspotAnalytics";
import ReportVerification from "./pages/ReportVerification";
import SocialAnalytics from "./pages/SocialAnalytics";
import AdminPanel from "./pages/AdminPanel";
import SearchFilter from "./pages/SearchFilter";
import NotificationsAlerts from "./pages/NotificationsAlerts";
import HelpContact from "./pages/HelpContact";
import NotFound from "./pages/NotFound";
import { Navigation } from "./components/Navigation";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/report" element={<ReportSubmission />} />
          <Route path="/my-reports" element={<CitizenPortal />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/hotspots" element={<HotspotAnalytics />} />
          <Route path="/verification" element={<ReportVerification />} />
          <Route path="/social-analytics" element={<SocialAnalytics />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/search" element={<SearchFilter />} />
          <Route path="/alerts" element={<NotificationsAlerts />} />
          <Route path="/help" element={<HelpContact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
