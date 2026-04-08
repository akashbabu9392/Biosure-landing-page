import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/products/sample-management" element={<ProductPage slug="sample-management" />} />
          <Route path="/products/reporting" element={<ProductPage slug="reporting" />} />
          <Route path="/products/client-portal" element={<ProductPage slug="client-portal" />} />
          <Route path="/products/analytics" element={<ProductPage slug="analytics" />} />
          <Route path="/company" element={<CompanyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
