import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, BookOpen } from "lucide-react";

const writings = [
  { title: "On the Architecture of Silence", publication: "The New Yorker", date: "January 2026", type: "Essay", url: "https://newyorker.com" },
  { title: "Memory as Landscape", publication: "The Paris Review", date: "November 2025", type: "Essay", url: "https://theparisreview.org" },
  { title: "The Filmmaker's Notebook", publication: "Sight & Sound", date: "September 2025", type: "Journal", url: "https://bfi.org.uk" },
  { title: "Letters from the Salt Marsh", publication: "The Atlantic", date: "June 2025", type: "Dispatches", url: "https://theatlantic.com" },
  { title: "Why We Still Need Difficult Books", publication: "Literary Hub", date: "March 2025", type: "Essay", url: "https://lithub.com" },
  { title: "The Podcast as Literary Form", publication: "Granta", date: "December 2024", type: "Essay", url: "https://granta.com" },
  { title: "Notes on Adaptation: A Writer's Journal", publication: "The Believer", date: "August 2024", type: "Journal", url: "https://thebeliever.net" },
  { title: "Cartographies of Grief", publication: "Poetry Magazine", date: "April 2024", type: "Poetry", url: "https://poetryfoundation.org" },
  { title: "The Invisible Architecture of Story", publication: "Tin House", date: "January 2024", type: "Craft Essay", url: "https://tinhouse.com" },
  { title: "Walking the Meridian", publication: "Orion Magazine", date: "October 2023", type: "Nature Writing", url: "https://orionmagazine.org" },
];

const WritingWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="writing" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
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
                <span className="font-body text-xs text-muted-foreground">{item.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingWorkSection;
