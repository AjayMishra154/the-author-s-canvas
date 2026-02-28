import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import authorPortrait from "@/assets/author-portrait.png";
import writingDesk from "@/assets/writing-desk.png";
import filmStill from "@/assets/film-still.png";
import booksArrangement from "@/assets/books-arrangement.png";
import podcastStudio from "@/assets/podcast-studio.png";
import galleryLandscape from "@/assets/gallery-landscape.png";

const galleryImages = [
  { src: authorPortrait, alt: "Author portrait", span: "col-span-1 row-span-2" },
  { src: writingDesk, alt: "Writing desk", span: "col-span-1 row-span-1" },
  { src: filmStill, alt: "Film still", span: "col-span-1 row-span-1" },
  { src: galleryLandscape, alt: "Landscape inspiration", span: "col-span-2 row-span-1" },
  { src: podcastStudio, alt: "Podcast studio", span: "col-span-1 row-span-1" },
  { src: booksArrangement, alt: "Books arrangement", span: "col-span-1 row-span-1" },
];

const MediaGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="section-padding bg-secondary/20" ref={ref}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Media & Press
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-light">
              Gallery & <span className="italic text-gradient-gold">Media</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] md:auto-rows-[280px]">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`${img.span} relative overflow-hidden cursor-pointer group`}
                onClick={() => setLightboxImage(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="font-body text-xs tracking-wider">{img.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
    </>
  );
};

export default MediaGallery;
