import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, BookOpen, Globe } from "lucide-react";
import socialInitiative from "@/assets/social-initiative.png";

const initiatives = [
  {
    title: "Lighthouse Libraries",
    description: "Establishing free lending libraries in underserved coastal communities, providing access to literature where traditional libraries don't exist.",
    icon: BookOpen,
    impact: "12 libraries · 50,000+ books distributed",
  },
  {
    title: "Young Voices Fellowship",
    description: "A mentorship program for aspiring writers aged 16–24 from marginalized communities, offering workshops, publication opportunities, and scholarships.",
    icon: Users,
    impact: "200+ fellows · 35 published authors",
  },
  {
    title: "Stories Without Borders",
    description: "A translation initiative bringing literature from underrepresented languages into English, ensuring diverse voices reach global audiences.",
    icon: Globe,
    impact: "45 books translated · 18 languages",
  },
  {
    title: "The Healing Word Project",
    description: "Partnering with hospitals and care facilities to bring literature and creative writing to patients, using storytelling as a therapeutic tool.",
    icon: Heart,
    impact: "30 facilities · 5,000+ participants",
  },
];

const SocialInitiativesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-initiatives" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
              Giving Back
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6">
              Social <span className="italic text-gradient-gold">Initiatives</span>
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Literature has the power to change lives. Through these initiatives, Pankaj works to 
              ensure that the transformative power of storytelling reaches everyone.
            </p>
            <div className="relative aspect-[16/10]">
              <img src={socialInitiative} alt="Community initiative" className="w-full h-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent dark:block hidden" />
            </div>
          </motion.div>

          <div className="space-y-6">
            {initiatives.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="group p-6 border border-border hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary flex-shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-light mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-3">
                      {item.description}
                    </p>
                    <span className="font-body text-xs text-primary">{item.impact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialInitiativesSection;
