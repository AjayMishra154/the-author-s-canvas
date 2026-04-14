import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Film, Award } from "lucide-react";
import socialInitiative from "@/assets/social-initiative.png";

const initiatives = [
  {
    title: "SPRIHA — Storytelling for Change",
    description:
      "Founded in 2002, SPRIHA (Society for the Promotion and Inculcation of Human Aspirations) is a grassroots initiative focused on nurturing empathy and imagination among young minds. Through storytelling, cinema, and participatory media, it engaged children from underserved communities to build emotional awareness, sensitivity, and confidence.",
    icon: Users,
    impact: "Workshops · Screenings · Community engagement",
  },
  {
    title: "Sadak Chhaap Film Festival (SCFF)",
    description:
      "India’s first street film festival for children living in slums and villages. Instead of bringing audiences to cinema halls, SCFF took cinema to the streets—screening meaningful films in schools, open grounds, and community spaces, often for children experiencing cinema for the first time.",
    icon: Film,
    impact: "Pan-India outreach · Community screenings",
  },
  {
    title: "Recognition — Youth Icon Award",
    description:
      "Honoured with the Youth Icon Award for Social Entrepreneurship (2010, Gulbarga) for conceptualising and executing SCFF—recognising his pioneering work in using cinema as a tool for social inclusion and cultural access.",
    icon: Award,
    impact: "National recognition · Social impact",
  },
  {
    title: "Cinema & Social Responsibility",
    description:
      "During the COVID-19 pandemic, actively contributed to awareness-driven campaigns within the creative community—reinforcing the belief that storytelling is not just an art form, but also a social responsibility.",
    icon: Heart,
    impact: "Pandemic awareness · Community support",
  },
];

const SocialInitiativesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social-initiatives" className="section-padding bg-secondary/20" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Section */}
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

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 max-w-md">
              Beyond storytelling for screen and page, Pankaj Dubey’s journey has been deeply rooted in storytelling for change—using cinema, culture, and creativity as tools to inspire empathy, imagination, and social transformation.
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
              Across decades, his work reflects a consistent commitment to democratising access to storytelling, amplifying unheard voices, and bridging the gap between art and society.
            </p>

            <div className="relative aspect-[16/10]">
              <img
                src={socialInitiative}
                alt="Social initiative"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent dark:block hidden" />
            </div>
          </motion.div>

          {/* Right Section */}
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

                    <span className="font-body text-xs text-primary">
                      {item.impact}
                    </span>
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