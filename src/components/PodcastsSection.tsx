import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Play, Pause, Youtube } from "lucide-react";

const getYoutubeId = (url: string) => {
  const regExp = /v=([^&]+)/;
  const match = url.match(regExp);
  return match ? match[1] : url;
};

const episodes = [
  {
    title: "Small Towns Big Stories",
    episode: "1",
    duration: "45 min",
    guest: "Faisal Malik",
    description:
      "Actor and producer Faisal Malik shares his inspiring journey from small-town roots to becoming a familiar face in Indian cinema and web series.",
    youtubeId: "https://www.youtube.com/watch?v=P3Hf7IFT8FE",
    appleEmbed: "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000001",
  },
  {
    title: "Small Towns Big Stories",
    episode: "2",
    duration: "48 min",
    guest: "Akshat Gupta",
    description:
      "Bestselling mythology author Akshat Gupta talks about spirituality, storytelling and the journey behind The Hidden Hindu.",
    youtubeId: "https://www.youtube.com/watch?v=yXjH3ekxjcI",
    appleEmbed: "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000002",
  },
  {
    title: "Small Towns Big Stories",
    episode: "3",
    duration: "46 min",
    guest: "Sumona Chakravarti",
    description:
      "Television actor Sumona Chakravarti opens up about her journey in entertainment and life behind the camera.",
    youtubeId: "https://www.youtube.com/watch?v=3DiZevKWMic",
    appleEmbed: "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000003",
  },
  {
    title: "Small Towns Big Stories",
    episode: "4",
    duration: "47 min",
    guest: "Amit Sial",
    description:
      "Actor Amit Sial shares his journey from theatre to powerful performances in films and web series.",
    youtubeId: "https://www.youtube.com/watch?v=hVCZU0JAQHI",
    appleEmbed: "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000004",
  },
  {
    title: "Small Towns Big Stories",
    episode: "5",
    duration: "44 min",
    guest: "Sugandha Mishra",
    description:
      "Singer and comedian Sugandha Mishra reflects on her journey from classical music roots to national fame.",
    youtubeId: "https://www.youtube.com/watch?v=cZ0o9psi-Ts",
    appleEmbed: "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000005",
  },
  {
    title: "Small Towns Big Stories",
    episode: "6",
    duration: "46 min",
    guest: "Shivani Raghuvanshi",
    description:
      "Actor Shivani Raghuvanshi talks about her journey from theatre and independent films to gaining recognition through web series like Made in Heaven. In this episode, she reflects on growing up in a small town, discovering acting, and navigating the challenges of the entertainment industry. A heartfelt conversation about ambition, persistence, and staying true to one’s artistic voice.",
    youtubeId: "https://www.youtube.com/watch?v=VhF0N9FQXxM",
    appleEmbed:
      "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000006",
  },
  {
    title: "Small Towns Big Stories",
    episode: "7",
    duration: "49 min",
    guest: "Sharib Hashmi",
    description:
      "In this episode, actor Sharib Hashmi shares his inspiring story from working behind the scenes in the film industry to becoming a beloved actor known for his performances in The Family Man and other acclaimed projects. He discusses perseverance, the value of patience, and how small-town dreams can lead to big achievements in the world of cinema.",
    youtubeId: "https://www.youtube.com/watch?v=3kR6kL7L7x8",
    appleEmbed:
      "https://embed.podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683?i=1000663000007",
  }
];

const PodcastsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [showVideo, setShowVideo] = useState<string | null>(null);
  const [showAudio, setShowAudio] = useState<string | null>(null);

  return (
    <section id="podcasts" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* LEFT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Podcast
            </span>

            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Small Towns
              <span className="italic text-gradient-gold"> Big Stories</span>
            </h2>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Small Towns, Big Stories brings inspiring journeys from small-town achievers.
              Join host Pankaj Dubey as he explores how people overcome challenges and achieve
              big success across different fields.
            </p>

            <div className="relative aspect-[16/10] mb-8">
              <img
                src="/media/media3.jpg"
                alt="Podcast recording studio"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.youtube.com/@SmallTownsBigStories"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <Youtube size={14} /> YouTube
              </a>

              <a
                href="https://podcasts.apple.com/in/podcast/small-towns-big-stories/id1828150683"
                className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 border border-border"
              >
                Apple Podcasts <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>

          {/* EPISODES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              Recent Episodes
            </h3>

            {episodes.map((ep) => (
              <div key={ep.episode} className="border-t border-border">

                {/* Episode row */}
                <div className="flex items-center gap-4 py-5 px-4 hover:bg-secondary/20">

                  <span className="text-primary text-xs w-8">
                    #{ep.episode}
                  </span>

                  {/* Play Audio */}
                  <button
                    onClick={() => {
                      setShowAudio(showAudio === ep.episode ? null : ep.episode);
                      setShowVideo(null);
                    }}
                    className="w-8 h-8 rounded-full border flex items-center justify-center"
                  >
                    {showAudio === ep.episode ? <Pause size={12}/> : <Play size={12}/>}
                  </button>

                  <div className="flex-1">
                    <h4 className="font-display text-lg">{ep.title}</h4>
                    <span className="text-xs text-muted-foreground">
                      with {ep.guest}
                    </span>
                  </div>

                  {/* YouTube */}
                  <button
                    onClick={() => {
                      setShowVideo(showVideo === ep.episode ? null : ep.episode);
                      setShowAudio(null);
                    }}
                  >
                    <Youtube size={16}/>
                  </button>

                  <span className="text-xs text-muted-foreground hidden sm:block">
                    {ep.duration}
                  </span>
                </div>

                {/* Apple Audio */}
                {showAudio === ep.episode && (
                  <div className="px-4 pb-6">
                    <iframe
                      allow="autoplay *; encrypted-media *;"
                      height="175"
                      style={{ width: "100%", border: "none" }}
                      src={ep.appleEmbed}
                    />
                  </div>
                )}

                {/* YouTube Video */}
                {showVideo === ep.episode && (
                  <div className="px-4 pb-6">
                    <div className="relative w-full aspect-video">
                      <iframe
                        src={`https://www.youtube.com/embed/${getYoutubeId(ep.youtubeId)}`}
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                      />
                    </div>
                  </div>
                )}

              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PodcastsSection;