import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, X, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { galleryImages } from "@/data/galleryImages";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";

const categories = ["All", ...Array.from(new Set(galleryImages.map((i) => i.category)))];

const GalleryPage = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? galleryImages : galleryImages.filter((i) => i.category === filter);

  const handleDownload = (src: string, alt: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = decodeURIComponent(
      src.split("/").pop() ?? `${alt.replace(/\s+/g, "-").toLowerCase()}.jpeg`
    );
    a.click();
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevImage = () => {
    if (lightboxIndex === null || filtered.length === 0) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === 0 ? filtered.length - 1 : prev - 1;
    });
  };

  const nextImage = () => {
    if (lightboxIndex === null || filtered.length === 0) return;
    setLightboxIndex((prev) => {
      if (prev === null) return null;
      return prev === filtered.length - 1 ? 0 : prev + 1;
    });
  };

  useEffect(() => {
    if (lightboxIndex !== null && lightboxIndex >= filtered.length) {
      setLightboxIndex(filtered.length > 0 ? 0 : null);
    }
  }, [filter, filtered.length, lightboxIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filtered.length]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      <div className="section-padding pt-28">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h1 className="font-display text-4xl md:text-6xl font-light">
              Media <span className="italic text-gradient-gold">Gallery</span>
            </h1>
          </motion.div>

          {/* ✅ GRID FIXED */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
            {filtered.map((img, i) => (
        <motion.div
        key={img.alt + i}
        initial={i === 4 ? false : { opacity: 0, scale: 0.95 }}
        animate={i === 4 ? false : { opacity: 1, scale: 1 }}
        transition={i === 4 ? { duration: 0 } : { duration: 0.4, delay: i * 0.05 }}
        className={`relative group cursor-pointer overflow-hidden
          ${i === 4 ? "lg:col-span-2 lg:row-span-2" : ""}
        `}
        onClick={() => setLightboxIndex(i)}
      >
<img
  src={img.src}
  alt={img.alt}
  className={`w-full h-full transition-transform duration-700
    ${i === 4
      ? "object-contain" 
      : "object-cover group-hover:scale-110"
    }
  `}
  loading="lazy"
/>
                {/* Overlay */}
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-300" />

                {/* Bottom Info */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="block font-body text-[10px] text-primary uppercase tracking-wider">
                    {img.category}
                  </span>

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
      {lightboxIndex !== null && filtered[lightboxIndex] && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <X size={32} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 sm:left-6 p-3 bg-background/70 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div
            className="flex flex-col items-center max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].alt}
              className="max-w-full max-h-[80vh] object-contain"
            />

            <div className="mt-4 text-center">
              <p className="text-xs uppercase tracking-wider text-primary">
                {filtered[lightboxIndex].category}
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 sm:right-6 p-3 bg-background/70 hover:bg-primary text-foreground hover:text-primary-foreground rounded-full transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            <ChevronRight size={28} />
          </button>
        </motion.div>
      )}

      <FooterSection />
    </div>
  );
};

export default GalleryPage;