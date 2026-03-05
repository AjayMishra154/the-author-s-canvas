import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, BookOpen, ExternalLink } from "lucide-react";
import festidubeyvent from "@/assets/festival-event.png";

const projects = [
  {
    title: "Tidal Narratives Film Festival",
    type: "Film Festival",
    year: "2023–Present",
    description: "An annual festival celebrating films that explore the relationship between water, memory, and human experience. Held in Portland, Maine.",
    icon: Film,
  },
  {
    title: "Words & Waves Literature Festival",
    type: "Literature Festival",
    year: "2021–Present",
    description: "A coastal literary gathering bringing together authors, poets, and readers for three days of readings, workshops, and conversations by the sea.",
    icon: BookOpen,
  },
  {
    title: "The Cartography Project",
    type: "Literary Exhibition",
    year: "2022",
    description: "A multimedia exhibition exploring the intersection of maps, memory, and storytelling. Featured at the Smithsonian and MoMA PS1.",
    icon: BookOpen,
  },
  {
    title: "Silent Cinema Revival",
    type: "Film Series",
    year: "2020–2022",
    description: "A touring series pairing classic silent films with live original scores by contemporary musicians and spoken word by emerging poets.",
    icon: Film,
  },
];

const CuratorialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="curatorial" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Curation
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Curatorial <span className="italic text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              <img src={festidubeyvent} alt="Festival event" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent dark:block hidden" />
              <div className="absolute bottom-6 left-6">
                <span className="font-body text-xs text-primary tracking-wider uppercase">Festivals & Exhibitions</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="group p-6 border border-border hover:border-primary/30 bg-background/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <project.icon size={16} className="text-primary" />
                  <span className="font-body text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <span className="font-body text-xs text-primary mb-3 block">{project.year}</span>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CuratorialSection;
