import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, X, Download } from "lucide-react";
import writingDesk from "@/assets/writing-desk.png";
import filmStill from "@/assets/film-still.png";
import booksArrangement from "@/assets/books-arrangement.png";
import podcastStudio from "@/assets/podcast-studio.png";
import galleryLandscape from "@/assets/gallery-landscape.png";
import awardsDisplay from "@/assets/awards-display.png";
import authorTalk from "@/assets/author-talk.png";
import festidubeyvent from "@/assets/festival-event.png";
import socialInitiative from "@/assets/social-initiative.png";

const allImages = [
  { src: "/images/556863366_25014752961482487_2145445215205061588_n.jpg", alt: "Author portrait", category: "Portrait" },
  { src: writingDesk, alt: "Writing desk", category: "Behind the Scenes" },
  { src: filmStill, alt: "Film still", category: "Films" },
  { src: booksArrangement, alt: "Books arrangement", category: "Books" },
  { src: podcastStudio, alt: "Podcast studio", category: "Behind the Scenes" },
  { src: "/images/1653917526670.jpeg", alt: "Landscape inspiration", category: "Inspiration" },
  { src: awardsDisplay, alt: "Awards display", category: "Awards" },
  { src: authorTalk, alt: "Speaking at literary festival", category: "Events" },
  { src: festidubeyvent, alt: "Film festival event", category: "Events" },
  { src: socialInitiative, alt: "Community initiative", category: "Social" },
];

const categories = ["All", ...Array.from(new Set(allImages.map((i) => i.category)))];

const GalleryPage = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? allImages : allImages.filter((i) => i.category === filter);

  const handleDownload = (src: string, alt: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = alt.replace(/\s+/g, "-").toLowerCase() + ".png";
    a.click();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-padding pt-12">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-12">
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Complete Collection
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-light">
              Media <span className="italic text-gradient-gold">Gallery</span>
            </h1>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`font-body text-xs tracking-wider uppercase px-4 py-2 border transition-colors ${
                  filter === cat
                    ? "border-primary text-primary bg-primary/10"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((img, i) => (
              <motion.div
                key={img.alt + i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="relative group cursor-pointer overflow-hidden aspect-[4/3]"
                onClick={() => setLightboxImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <div>
                    <span className="font-body text-xs tracking-wider text-foreground">{img.alt}</span>
                    <span className="block font-body text-[10px] text-primary uppercase tracking-wider mt-1">{img.category}</span>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(img.src, img.alt);
                    }}
                    className="p-2 bg-background/80 hover:bg-primary text-foreground hover:text-primary-foreground transition-colors"
                    aria-label="Download"
                  >
                    <Download size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
            <X size={32} />
          </button>
          <img src={lightboxImage} alt="Gallery image" className="max-w-full max-h-full object-contain" />
        </motion.div>
      )}
    </div>
  );
};

export default GalleryPage;
