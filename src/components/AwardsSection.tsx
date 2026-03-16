import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy } from "lucide-react";
import awardsDisplay from "@/assets/awards-display.png";

import { Award, BookOpen, Mic, Globe } from "lucide-react";

const awards = [
  {
    icon: Award,
    title: "Navodit Lekhak Award",
    year: "2002",
    description:
      "Awarded by the Delhi Hindi Academy for emerging literary excellence.",
  },
  {
    icon: Globe,
    title: "Youth Icon Award for Social Entrepreneurship",
    year: "2010",
    description:
      "Recognized for impactful initiatives combining literature and social entrepreneurship.",
  },
  {
    icon: BookOpen,
    title: "Lit-O-Fest Best First Published Book of an Author Award",
    year: "2014",
    description:
      "Recognized at Lit-O-Fest for the best debut published literary work.",
  },
  {
    icon: BookOpen,
    title: "Lit-O-Fest Excellence in Literature Award",
    year: "2015",
    description:
      "Awarded at Lit-O-Fest for outstanding contribution to literature.",
  },
  {
    icon: BookOpen,
    title: "Writers’ Residency — Seoul Art Space Yeonhui-dong",
    year: "2016",
    description:
      "Selected for an international writers’ residency in South Korea to develop literary work.",
  },
  {
    icon: Mic,
    title: "Best Debut Director",
    year: "2018",
    description:
      "Awarded at the Vancouver Film Festival for outstanding debut direction.",
  },
  {
    icon: Mic,
    title: "Global Innoventure Award for Literature & Storytelling",
    year: "2018",
    description:
      "Honored at the House of Lords, UK Parliament, for global contributions to storytelling and literature.",
  },
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
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent dark:block hidden" />
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
                      {/* <span className="font-body text-[10px] tracking-wider uppercase text-muted-foreground">
                        {award.category}
                      </span> */}
                    </div>
                    {award.description && (
                      <span className="font-body text-xs text-muted-foreground italic">{award.description}</span>
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
