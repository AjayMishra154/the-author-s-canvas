import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Headphones, ExternalLink, Play, Pause, Youtube } from "lucide-react";
import podcastStudio from "@/assets/podcast-studio.png";

const episodes = [
  { number: "042", title: "The Art of the Unreliable Narrator", guest: "Ottessa Moshfegh", duration: "58 min", youtubeId: "dQw4w9WgXcQ" },
  { number: "041", title: "Writing Across Centuries", guest: "Hilary Mantel", duration: "62 min", youtubeId: "dQw4w9WgXcQ" },
  { number: "040", title: "Poetry in the Age of Attention", guest: "Ocean Vuong", duration: "45 min", youtubeId: "dQw4w9WgXcQ" },
  { number: "039", title: "Adapting the Unadaptable", guest: "Denis Villeneuve", duration: "71 min", youtubeId: "dQw4w9WgXcQ" },
  { number: "038", title: "The Sound of Prose", guest: "Rachel Cusk", duration: "52 min", youtubeId: "dQw4w9WgXcQ" },
];

const PodcastsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [playingEp, setPlayingEp] = useState<string | null>(null);
  const [showVideo, setShowVideo] = useState<string | null>(null);

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

            <div className="flex flex-wrap gap-4">
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Youtube size={14} /> YouTube
              </a>
              <a href="https://www.audible.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                <Headphones size={14} /> Audible
              </a>
              <a href="#" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
                Apple Podcasts <ExternalLink size={12} />
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
                <motion.div
                  key={ep.number}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group border-t border-border"
                >
                  <div className="flex items-center gap-4 py-5 px-4 -mx-4 hover:bg-secondary/20 transition-colors">
                    <span className="font-body text-xs text-primary w-8">#{ep.number}</span>
                    
                    {/* Play/Pause button */}
                    <button
                      onClick={() => setPlayingEp(playingEp === ep.number ? null : ep.number)}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    >
                      {playingEp === ep.number ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                    </button>
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg font-light group-hover:text-primary transition-colors truncate">
                        {ep.title}
                      </h4>
                      <span className="font-body text-xs text-muted-foreground">with {ep.guest}</span>
                    </div>
                    
                    <button
                      onClick={() => setShowVideo(showVideo === ep.number ? null : ep.number)}
                      className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      title="Watch on YouTube"
                    >
                      <Youtube size={16} />
                    </button>
                    
                    <span className="font-body text-xs text-muted-foreground hidden sm:block">{ep.duration}</span>
                  </div>
                  
                  {/* Audio player */}
                  {playingEp === ep.number && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 -mx-4"
                    >
                      <audio controls className="w-full h-10" autoPlay>
                        <source src="" type="audio/mpeg" />
                        Your browser does not support the audio element.
                      </audio>
                      <p className="font-body text-[10px] text-muted-foreground mt-1 italic">
                        Audio placeholder — replace with actual episode URL
                      </p>
                    </motion.div>
                  )}
                  
                  {/* YouTube embed */}
                  {showVideo === ep.number && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 -mx-4"
                    >
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${ep.youtubeId}`}
                          title={ep.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="absolute inset-0 w-full h-full border border-border"
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
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
