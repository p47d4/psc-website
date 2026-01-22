import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyPSC from "./pages/WhyPSC";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Insights from "./pages/Insights";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import Login from "./pages/cms/Login";
import Dashboard from "./pages/cms/Dashboard";
import Reports from "./pages/cms/Reports";
import BlogPosts from "./pages/cms/BlogPosts";
import Submissions from "./pages/cms/Submissions";
import Users from "./pages/cms/Users";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/why-psc" element={<WhyPSC />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/cms/login" element={<Login />} />
            <Route path="/cms" element={<Dashboard />} />
            <Route path="/cms/reports" element={<Reports />} />
            <Route path="/cms/blog" element={<BlogPosts />} />
            <Route path="/cms/submissions" element={<Submissions />} />
            <Route path="/cms/users" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
