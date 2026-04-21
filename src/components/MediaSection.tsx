import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";

const videos = [
  {
    title: "Marketing ya Content: Kitabon ki Safalta Kispe Nirbhar Hai?",
    url: "https://youtu.be/oNovpROyHgo",
    id: "oNovpROyHgo",
  },
  {
    title: "Author Conversation / Interview",
    url: "https://youtu.be/kwCLRQ3nOCs",
    id: "kwCLRQ3nOCs",
  },
  {
    title: "Storytelling & Writing Discussion",
    url: "https://youtu.be/wR66bAZcA9U",
    id: "wR66bAZcA9U",
  },
  {
    title: "Literature & Culture Conversation",
    url: "https://youtu.be/n_1wYfHub7Q",
    id: "n_1wYfHub7Q",
  },
];

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="media" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Media
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Conversations &{" "}
            <span className="italic text-gradient-gold">Appearances</span>
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group block"
            >
              <div className="relative aspect-video overflow-hidden">
                {/* Thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-4 bg-white/90 rounded-full group-hover:scale-110 transition">
                    <Play size={18} className="text-black" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-display text-lg font-light group-hover:text-primary transition-colors">
                {video.title}
              </h3>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;