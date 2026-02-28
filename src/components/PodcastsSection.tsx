import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, ExternalLink } from "lucide-react";
import podcastStudio from "@/assets/podcast-studio.png";

const episodes = [
  { number: "042", title: "The Art of the Unreliable Narrator", guest: "Ottessa Moshfegh", duration: "58 min" },
  { number: "041", title: "Writing Across Centuries", guest: "Hilary Mantel", duration: "62 min" },
  { number: "040", title: "Poetry in the Age of Attention", guest: "Ocean Vuong", duration: "45 min" },
  { number: "039", title: "Adapting the Unadaptable", guest: "Denis Villeneuve", duration: "71 min" },
  { number: "038", title: "The Sound of Prose", guest: "Rachel Cusk", duration: "52 min" },
];

const PodcastsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="podcasts" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info + image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Podcast
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Between the <span className="italic text-gradient-gold">Lines</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Intimate conversations with the writers, filmmakers, and thinkers who shape 
              our understanding of the world. New episodes every Tuesday.
            </p>

            <div className="relative aspect-[16/10] mb-8">
              <img src={podcastStudio} alt="Podcast recording studio" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>

            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Headphones size={14} /> Apple Podcasts
              </a>
              <a href="#" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Spotify <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* Episodes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Recent Episodes
            </h3>
            <div className="space-y-0">
              {episodes.map((ep, i) => (
                <motion.a
                  key={ep.number}
                  href="#"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group flex items-center gap-6 py-5 border-t border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
                >
                  <span className="font-body text-xs text-primary w-8">#{ep.number}</span>
                  <div className="flex-1">
                    <h4 className="font-display text-lg font-light group-hover:text-primary transition-colors">
                      {ep.title}
                    </h4>
                    <span className="font-body text-xs text-muted-foreground">with {ep.guest}</span>
                  </div>
                  <span className="font-body text-xs text-muted-foreground">{ep.duration}</span>
                </motion.a>
              ))}
              <div className="border-t border-border" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;
