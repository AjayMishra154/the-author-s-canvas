import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const pressArticles = [
  { title: "Pankaj Dubey Wins National Book Award for 'The Weight of Tides'", source: "The New York Times", date: "November 2024", url: "https://nytimes.com" },
  { title: "The Filmmaker-Author Redefining Literary Adaptation", source: "The Guardian", date: "October 2024", url: "https://theguardian.com" },
  { title: "Venice Spotlight: Dubey's Cinematic Vision", source: "Variety", date: "September 2023", url: "https://variety.com" },
  { title: "MacArthur 'Genius' Grant Recipients Announced", source: "NPR", date: "October 2022", url: "https://npr.org" },
  { title: "Why Pankaj Dubey Is the Voice of a Generation", source: "Time Magazine", date: "June 2022", url: "https://time.com" },
  { title: "Sundance Standout: 'Saltwater Elegy' Review", source: "IndieWire", date: "January 2021", url: "https://indiewire.com" },
  { title: "The Quiet Revolution of Pankaj Dubey's Prose", source: "The Atlantic", date: "March 2020", url: "https://theatlantic.com" },
  { title: "PEN/Faulkner Award Goes to 'What the River Knows'", source: "Publishers Weekly", date: "April 2018", url: "https://publishersweekly.com" },
];

const NewsRoomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="newsroom" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Press Coverage
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            In the <span className="italic text-gradient-gold">News</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {pressArticles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-6 py-5 border-t border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
            >
              <div className="flex-1">
                <h3 className="font-display text-lg md:text-xl font-light group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-body text-xs text-primary">{article.source}</span>
                  <span className="font-body text-xs text-muted-foreground">{article.date}</span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default NewsRoomSection;
