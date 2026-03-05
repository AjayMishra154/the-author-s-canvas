import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import awardsDisplay from "@/assets/awards-display.png";

const awards = [
  { title: "National Book Award", category: "Fiction", year: "2024", work: "The Weight of Tides" },
  { title: "Booker Prize Longlist", category: "Fiction", year: "2024", work: "The Weight of Tides" },
  { title: "PEN/Faulkner Award", category: "Fiction", year: "2018", work: "What the River Knows" },
  { title: "National Book Award Finalist", category: "Poetry", year: "2021", work: "Nocturne in Salt" },
  { title: "Venice Film Festival", category: "Official Selection", year: "2023", work: "The Weight of Tides (Film)" },
  { title: "Sundance Film Festival", category: "Official Selection", year: "2021", work: "Saltwater Elegy" },
  { title: "TIFF Best Short Film", category: "Winner", year: "2017", work: "First Light" },
  { title: "Guggenheim Fellowship", category: "Literature", year: "2020", work: "" },
  { title: "MacArthur Fellowship", category: "Genius Grant", year: "2022", work: "" },
  { title: "PEN/Hemingway Award Finalist", category: "Debut Fiction", year: "2015", work: "First Light" },
];

const AwardsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Recognition
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8">
              Awards & <span className="italic text-gradient-gold">Honors</span>
            </h2>
            <div className="relative aspect-[16/10] mb-6">
              <img src={awardsDisplay} alt="Awards and accreditations" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="space-y-0">
              {awards.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                  className="group flex items-start gap-4 py-4 border-t border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
                >
                  <Trophy size={14} className="text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-lg font-light group-hover:text-primary transition-colors">
                        {award.title}
                      </h3>
                      <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground">
                        {award.category}
                      </span>
                    </div>
                    {award.work && (
                      <span className="font-body text-xs text-muted-foreground italic">{award.work}</span>
                    )}
                  </div>
                  <span className="font-body text-xs text-primary">{award.year}</span>
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

export default AwardsSection;
