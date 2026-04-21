import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import BookDetail from "./pages/BookDetail";
import GalleryPage from "./pages/GalleryPage";
import ExplorePage from "./pages/ExplorePage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work/all" element={<ExplorePage view="all" />} />
          <Route path="/work/books-films" element={<ExplorePage view="books-films" />} />
          <Route path="/work/writing-media" element={<ExplorePage view="writing-media" />} />
          <Route path="/work/talks-awards" element={<ExplorePage view="talks-awards" />} />
          <Route path="/work/podcasts-social" element={<ExplorePage view="podcasts-social" />} />
          <Route path="/explore" element={<Navigate to="/work/all" replace />} />
          <Route path="/books/:slug" element={<BookDetail />} />
          <Route path="/gallery" element={<GalleryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
