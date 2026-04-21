import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const writings = [
  {
    title: "A Letter to Sooraj Barjatya",
    publication: "DailyO",
    date: "2020",
    type: "Essay",
    url: "https://www.dailyo.in/",
  },
  {
    title: "The Creative Economy: How Authorpreneurs Are Shaping Cultures and Businesses",
    publication: "The Economic Times",
    date: "2021",
    type: "Essay",
    url: "https://economictimes.indiatimes.com/",
  },
  {
    title: "South Korea: The Bizarre, the Beautiful, and the Power of Storytelling",
    publication: "The Quint",
    date: "2020",
    type: "Essay",
    url: "https://www.thequint.com/",
  },
  {
    title: "Cine Sohbat — Cinema & Culture Column",
    publication: "Column Series",
    date: "Ongoing",
    type: "Column",
    url: "https://www.youtube.com/@SmallTownsBigStories",
  },
  {
    title: "Diaspora, Identity & Storytelling",
    publication: "Pravasi Today",
    date: "Editorial Work",
    type: "Editorial",
    url: "https://www.pravasitoday.com/",
  },
];

const WritingWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Journals & Essays
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-light">
            Writing <span className="italic text-gradient-gold">Work</span>
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mb-12"
        >
          Beyond fiction, Pankaj Dubey engages with contemporary culture, cinema,
          identity, and society through essays and columns across platforms. His
          non-fiction voice blends storytelling with sharp socio-cultural
          observation—rooted in small-town India yet resonating globally.
        </motion.p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {writings.map((item, i) => (
            <motion.a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group block p-6 border border-border hover:border-primary/30 bg-background/50 transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <BookOpen size={14} className="text-primary" />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary">
                    {item.publication}
                  </span>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <div className="flex items-center gap-3">
                <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground border border-border px-2 py-0.5">
                  {item.type}
                </span>
                <span className="font-body text-xs text-muted-foreground">
                  {item.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-xs text-muted-foreground mt-10">
          + Additional essays across cinema, culture, diaspora, and storytelling platforms
        </p>
      </div>
    </section>
  );
};

export default WritingWorkSection;
