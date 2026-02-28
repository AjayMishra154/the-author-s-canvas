import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import filmStill from "@/assets/film-still.png";

const films = [
  { title: "The Weight of Tides", type: "Feature Film", year: "2023", duration: "118 min", description: "Adaptation of the award-winning novel. Premiered at Venice Film Festival." },
  { title: "Saltwater Elegy", type: "Feature Film", year: "2021", duration: "96 min", description: "A fisherman's journey through grief and the sea. Official selection, Sundance." },
  { title: "The Last Letter", type: "Feature Film", year: "2019", duration: "104 min", description: "A war-time drama exploring the power of words left unspoken." },
  { title: "Meridian", type: "Short Film", year: "2022", duration: "22 min", description: "An experimental meditation on time and distance." },
  { title: "Glass Houses", type: "Short Film", year: "2020", duration: "18 min", description: "A visual poem about transparency and the walls we build." },
  { title: "First Light", type: "Short Film", year: "2017", duration: "15 min", description: "The short that launched a filmmaking career. Winner, Best Short, TIFF." },
];

const FilmsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="films" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Filmography
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Stories on <span className="italic text-gradient-gold">Screen</span>
          </h2>
        </motion.div>

        {/* Featured film */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-16 group cursor-pointer"
        >
          <div className="relative aspect-[21/9] overflow-hidden">
            <img src={filmStill} alt="Film still from The Weight of Tides" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-foreground/50 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                <Play className="text-foreground/80 group-hover:text-primary ml-1" size={28} />
              </div>
            </div>
            <div className="absolute bottom-8 left-8">
              <span className="font-body text-xs tracking-wider uppercase text-primary">Latest Release</span>
              <h3 className="font-display text-3xl md:text-4xl font-light mt-2">The Weight of Tides</h3>
              <p className="font-body text-sm text-muted-foreground mt-1">Feature Film · 118 min · 2023</p>
            </div>
          </div>
        </motion.div>

        {/* Film grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {films.slice(1).map((film, i) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
              className="group bg-gradient-card p-6 border border-border hover:border-primary/30 transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-body text-[10px] tracking-[0.2em] uppercase px-3 py-1 border border-border text-muted-foreground">
                  {film.type}
                </span>
                <span className="font-body text-xs text-primary">{film.year}</span>
              </div>
              <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors">
                {film.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground mb-3">{film.description}</p>
              <span className="font-body text-xs text-muted-foreground">{film.duration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmsSection;
