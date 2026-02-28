import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { title: "On the Architecture of Silence", publication: "The New Yorker", date: "January 2026", excerpt: "How the spaces between words carry more meaning than the words themselves." },
  { title: "Memory as Landscape", publication: "The Paris Review", date: "November 2025", excerpt: "An essay on the topography of remembering and the art of strategic forgetting." },
  { title: "The Filmmaker's Notebook", publication: "Sight & Sound", date: "September 2025", excerpt: "Behind the adaptation of The Weight of Tides, from page to screen." },
  { title: "Letters from the Salt Marsh", publication: "The Atlantic", date: "June 2025", excerpt: "Dispatches from the liminal space where land meets sea." },
  { title: "Why We Still Need Difficult Books", publication: "Literary Hub", date: "March 2025", excerpt: "A defense of fiction that refuses to be easily consumed." },
  { title: "The Podcast as Literary Form", publication: "Granta", date: "December 2024", excerpt: "Can the spoken word achieve the density and beauty of the written?" },
];

const ArticlesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="articles" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Selected Writing
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Essays & <span className="italic text-gradient-gold">Articles</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block p-6 border border-border hover:border-primary/30 bg-background/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-primary">
                    {article.publication}
                  </span>
                  <span className="font-body text-[10px] text-muted-foreground ml-3">
                    {article.date}
                  </span>
                </div>
                <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-xl md:text-2xl font-light mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {article.excerpt}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
