import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Headphones, ExternalLink, Play, Pause, Youtube } from "lucide-react";

const getYoutubeId = (url: string) => {
  const regExp = /v=([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : url;
};
const episodes = [
  {
    title: "ज़िंदगी, साहित्य और पंकज दुबे",
    episode: "10",
    duration: "60 min",
    guest: "ajay mishra",
    description: "In this episode, we sit down with acclaimed author, screenwriter, and filmmaker Pankaj Dubey, whose stories strike a deep chord with readers and viewers alike. Known for writing in both Hindi and English, Pankaj brings a unique voice that blends raw realism with powerful emotion",
    youtubeId: "https://www.youtube.com/watch?v=oNovpROyHgo",
  },
  {
    title: "Small Towns Big Stories",
    episode: "1",
    duration: "42 min",
    guest: "ajay mishra",
    description: "Explore the multifaceted career of Faisal Malik, actor, and producer, in this episode of Small Towns, Big Stories. Known for his work in Gangs of Wasseypur and Panchayat Faisal discusses his journey from producing films to captivating audiences as an actor. Hosted by Pankaj Dubey, this episode delves into the challenges of small-town life, the path to Bollywood, and the power of storytelling and friendship in shaping success.",
    youtubeId: "https://www.youtube.com/watch?v=P3Hf7IFT8FE&list=PLcEJgING6kFI8NF6S3QUnfiM0noMZLSik&index=38",
  },
  {
    title: "Small Towns Big Stories",
    episode: "38",
    duration: "48 min",
    guest: "ajay mishra",
    description: "In this episode of Small Towns Big Stories, Dibyendu Bhattacharya walks us through his journey from theatre school to streaming stardom. He talks about the values NSD instilled in him and how they still guide his performances today. From small-town roots to big-screen intensity, his story is full of conviction. Raw, real, and deeply rooted in purpose.",
    youtubeId: "https://www.youtube.com/watch?v=DtLKeg_dId4&list=PLcEJgING6kFI8NF6S3QUnfiM0noMZLSik&index=1",
  },
  {
    title: "Small Towns Big Stories",
    episode: "48",
    duration: "48 min",
    guest: "ajay mishra",
    description: "In this episode of Small Towns Big Stories, Dibyendu Bhattacharya walks us through his journey from theatre school to streaming stardom. He talks about the values NSD instilled in him and how they still guide his performances today. From small-town roots to big-screen intensity, his story is full of conviction. Raw, real, and deeply rooted in purpose.",
    youtubeId: "https://www.youtube.com/watch?v=DtLKeg_dId4&list=PLcEJgING6kFI8NF6S3QUnfiM0noMZLSik&index=1",
  },
  {
    title: "Small Towns Big Stories",
    episode: "48",
    duration: "48 min",
    guest: "ajay mishra",
    description: "In this episode of Small Towns Big Stories, Dibyendu Bhattacharya walks us through his journey from theatre school to streaming stardom. He talks about the values NSD instilled in him and how they still guide his performances today. From small-town roots to big-screen intensity, his story is full of conviction. Raw, real, and deeply rooted in purpose.",
    youtubeId: "https://www.youtube.com/watch?v=DtLKeg_dId4&list=PLcEJgING6kFI8NF6S3QUnfiM0noMZLSik&index=1",
  },
  


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
              Small Towns <span className="italic text-gradient-gold"> Big Stories</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
            Small Towns, Big Stories brings inspiring journeys from small-town achievers. Join host Pankaj Dubey as he explores how people overcome challenges and achieve big success across different fields.
            </p>

            <div className="relative aspect-[16/10] mb-8">
              <img src="/media/media3.jpg" alt="Podcast recording studio" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent dark:block hidden" />
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="https://www.youtube.com/@SmallTownsBigStories" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                <Youtube size={14} /> YouTube
              </a>
              <a href="https://podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683" className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors">
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
                  key={ep.episode}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group border-t border-border"
                >
                  <div className="flex items-center gap-4 py-5 px-4 -mx-4 hover:bg-secondary/20 transition-colors">
                    <span className="font-body text-xs text-primary w-8">#{ep.episode}</span>

                    {/* Play/Pause button */}
                    <button
                      onClick={() => setPlayingEp(playingEp === ep.episode ? null : ep.episode)}
                      className="flex-shrink-0 w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                    >
                      {playingEp === ep.episode ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
                    </button>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-display text-lg font-light group-hover:text-primary transition-colors truncate">
                        {ep.title}
                      </h4>
                      <span className="font-body text-xs text-muted-foreground">with {ep.guest}</span>
                    </div>

                    <button
                      onClick={() => setShowVideo(showVideo === ep.episode ? null : ep.episode)}
                      className="flex-shrink-0 text-muted-foreground hover:text-primary transition-colors"
                      title="Watch on YouTube"
                    >
                      <Youtube size={16} />
                    </button>

                    <span className="font-body text-xs text-muted-foreground hidden sm:block">{ep.duration}</span>
                  </div>

                  {/* Audio player */}
                  {playingEp === ep.episode && (
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

                    </motion.div>
                  )}

                  {/* YouTube embed */}
                  {showVideo === ep.episode && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-4 pb-4 -mx-4"
                    >
                      <div className="relative w-full aspect-video">
                        <iframe
                          src={`https://www.youtube.com/embed/${getYoutubeId(ep.youtubeId)}`}
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
