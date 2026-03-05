import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, ExternalLink } from "lucide-react";
import authorTalk from "@/assets/author-talk.png";

const talks = [
  { title: "The Future of the Novel", event: "Edinburgh International Book Festival", year: "2025", type: "Keynote" },
  { title: "Writing Across Media", event: "TED Global", year: "2024", type: "TED Talk" },
  { title: "Memory, Landscape, and Fiction", event: "Hay Festival", year: "2024", type: "Panel" },
  { title: "From Page to Screen", event: "Venice Film Festival", year: "2023", type: "Masterclass" },
  { title: "The Architecture of Story", event: "Sydney Writers' Festival", year: "2023", type: "Keynote" },
  { title: "Poetry in the Digital Age", event: "AWP Conference", year: "2022", type: "Lecture" },
  { title: "The Art of Adaptation", event: "Sundance Film Festival", year: "2021", type: "Panel" },
  { title: "Why Difficult Books Matter", event: "Jaipur Literature Festival", year: "2020", type: "Keynote" },
];

const TalksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="talks" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Speaking
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Talks & <span className="italic text-gradient-gold">Lectures</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[16/10] mb-6">
              <img src={authorTalk} alt="Pankaj Dubey speaking" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent dark:block hidden" />
            </div>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Pankaj Dubey is a sought-after speaker at literary festivals, film events, and academic institutions worldwide. 
              His talks explore the intersection of storytelling, cinema, and the creative process.
            </p>
            <a href="mailto:speaking@Pankajdubey.com" className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-6">
              Book a Speaking Engagement <ExternalLink size={12} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-0">
              {talks.map((talk, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.06 }}
                  className="group flex items-start gap-4 py-4 border-t border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
                >
                  <Mic size={14} className="text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-light group-hover:text-primary transition-colors">
                      {talk.title}
                    </h3>
                    <span className="font-body text-xs text-muted-foreground">{talk.event}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-body text-[10px] tracking-wider uppercase text-primary block">{talk.type}</span>
                    <span className="font-body text-xs text-muted-foreground">{talk.year}</span>
                  </div>
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

export default TalksSection;
