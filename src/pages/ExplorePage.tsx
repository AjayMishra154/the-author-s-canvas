import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import BooksSection from "@/components/BooksSection";
import FilmsSection from "@/components/FilmsSection";
import WritingWorkSection from "@/components/WritingWorkSection";
import NewsRoomSection from "@/components/NewsRoomSection";
import PodcastsSection from "@/components/PodcastsSection";
import AwardsSection from "@/components/AwardsSection";
import TalksSection from "@/components/TalksSection";
import CuratorialSection from "@/components/CuratorialSection";
import MediaSection from "@/components/MediaSection";
import SocialInitiativesSection from "@/components/SocialInitiativesSection";

const sectionMap = {
  books: { id: "work-books", label: "Books", section: <BooksSection /> },
  films: { id: "work-films", label: "Films", section: <FilmsSection /> },
  writing: { id: "work-writing", label: "Writing", section: <WritingWorkSection /> },
  newsroom: { id: "work-newsroom", label: "Newsroom", section: <NewsRoomSection /> },
  podcasts: { id: "work-podcasts", label: "Podcasts", section: <PodcastsSection /> },
  awards: { id: "work-awards", label: "Awards", section: <AwardsSection /> },
  talks: { id: "work-talks", label: "Talks", section: <TalksSection /> },
  curatorial: { id: "work-curatorial", label: "Curatorial", section: <CuratorialSection /> },
  media: { id: "work-media", label: "Media", section: <MediaSection /> },
  social: { id: "work-social", label: "Social", section: <SocialInitiativesSection /> },
} as const;

const viewSections = {
  all: ["books", "films", "writing", "newsroom", "podcasts", "awards", "talks", "curatorial", "media", "social"],
  "books-films": ["books", "films"],
  "writing-media": ["writing", "newsroom", "media"],
  "talks-awards": ["talks", "awards", "curatorial"],
  "podcasts-social": ["podcasts", "social"],
} as const;

type ExplorePageProps = {
  view: "all" | "books-films" | "writing-media" | "talks-awards" | "podcasts-social";
};

const ExplorePage = ({ view }: ExplorePageProps) => {
  const currentSections = viewSections[view] ?? viewSections.all;
  const visibleSections = currentSections.map((key) => sectionMap[key as keyof typeof sectionMap]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="pt-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {visibleSections.map((item) => (
              <section key={item.id} id={item.id} className="scroll-mt-36">
                {item.section}
              </section>
            ))}
          </div>
        </div>
      </div>

      <FooterSection />
    </div>
  );
};

export default ExplorePage;
