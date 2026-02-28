import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BooksSection from "@/components/BooksSection";
import FilmsSection from "@/components/FilmsSection";
import ArticlesSection from "@/components/ArticlesSection";
import PodcastsSection from "@/components/PodcastsSection";
import MediaGallery from "@/components/MediaGallery";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <FilmsSection />
      <ArticlesSection />
      <PodcastsSection />
      <MediaGallery />
      <FooterSection />
    </div>
  );
};

export default Index;
