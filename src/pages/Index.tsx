import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BooksSection from "@/components/BooksSection";
import FilmsSection from "@/components/FilmsSection";
import WritingWorkSection from "@/components/WritingWorkSection";
import NewsRoomSection from "@/components/NewsRoomSection";
import PodcastsSection from "@/components/PodcastsSection";
import AwardsSection from "@/components/AwardsSection";
import TalksSection from "@/components/TalksSection";
import CuratorialSection from "@/components/CuratorialSection";
import SocialInitiativesSection from "@/components/SocialInitiativesSection";
import MediaGallery from "@/components/MediaGallery";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BooksSection />
      <FilmsSection />
      <WritingWorkSection />
      <NewsRoomSection />
      <PodcastsSection />
      <AwardsSection />
      <TalksSection />
      <CuratorialSection />
      <SocialInitiativesSection />
      <MediaGallery />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
