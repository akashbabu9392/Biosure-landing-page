import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToHash from "@/components/ScrollToHash";
import Index from "./pages/Index";
import ProductPage from "./pages/ProductPage";
import CompanyPage from "./pages/CompanyPage";
import NotFound from "./pages/NotFound";
import RouteTransition from "@/components/RouteTransition";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <RouteTransition>
              <Index />
            </RouteTransition>
          }
        />
        <Route
          path="/products/sample-management"
          element={
            <RouteTransition>
              <ProductPage slug="sample-management" />
            </RouteTransition>
          }
        />
        <Route
          path="/products/reporting"
          element={
            <RouteTransition>
              <ProductPage slug="reporting" />
            </RouteTransition>
          }
        />
        <Route
          path="/products/client-portal"
          element={
            <RouteTransition>
              <ProductPage slug="client-portal" />
            </RouteTransition>
          }
        />
        <Route
          path="/products/analytics"
          element={
            <RouteTransition>
              <ProductPage slug="analytics" />
            </RouteTransition>
          }
        />
        <Route
          path="/company"
          element={
            <RouteTransition>
              <CompanyPage />
            </RouteTransition>
          }
        />
        <Route
          path="*"
          element={
            <RouteTransition>
              <NotFound />
            </RouteTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
