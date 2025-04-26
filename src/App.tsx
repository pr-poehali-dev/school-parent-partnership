import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Здесь будут маршруты для остальных страниц */}
          <Route path="/about" element={<NotFound />} />
          <Route path="/regulations" element={<NotFound />} />
          <Route path="/channels" element={<NotFound />} />
          <Route path="/etiquette" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/feedback" element={<NotFound />} />
          {/* Маршрут для несуществующих страниц */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
