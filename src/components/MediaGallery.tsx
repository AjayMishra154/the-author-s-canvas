import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "@/data/galleryImages";

const galleryPreview = galleryImages.slice(0, 6).map((image, index) => {
  const spans = [
    "col-span-1 row-span-2",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
  ];

  return {
    ...image,
    span: spans[index] ?? "col-span-1 row-span-1",
  };
});

const MediaGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleDownload = (src: string, alt: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = decodeURIComponent(src.split("/").pop() ?? `${alt.replace(/\s+/g, "-").toLowerCase()}.jpeg`);
    a.click();
  };

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16 flex items-end justify-between"
          >
            <div>
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
                Media & Press
              </span>

              <h2 className="font-display text-4xl md:text-6xl font-light">
                Gallery & <span className="italic text-gradient-gold">Media</span>
              </h2>
            </div>

            <Link
              to="/gallery"
              className="hidden md:flex items-center gap-2 font-body text-xs tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors"
            >
              View All <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[140px] md:auto-rows-[280px]">
            {galleryPreview.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative overflow-hidden cursor-pointer group ${img.span ? `md:${img.span}` : ""}`}
                onClick={() => setLightboxImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-xs tracking-wider">
                    {img.alt}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDownload(img.src, img.alt);
                    }}
                    className="p-1.5 bg-background/70 hover:bg-primary text-foreground hover:text-primary-foreground transition-colors"
                    aria-label="Download"
                  >
                    <Download size={12} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile "View All" button */}
          <div className="mt-8 text-center md:hidden">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-6 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4 md:p-8 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button className="absolute top-6 right-6 text-foreground hover:text-primary transition-colors">
            <X size={32} />
          </button>

          <img
            src={lightboxImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain"
          />
        </motion.div>
      )}
    </>
  );
};

export default MediaGallery;
