import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mic, ExternalLink } from "lucide-react";

const talks = [
  // 🔥 Highlighted / Featured
  {
    title: "Digital Storytelling Masterclass",
    event: "Dubai",
    year: "2025",
    type: "Masterclass",
    coverage: {
      headline:
        "Pankaj Dubey’s digital storytelling masterclass inspires Dubai’s next-gen creators",
      link: "https://thebrewnews.com/brew-circle/pankaj-dubey-storytelling-workshop-dubai/",
    },
  },

  // 🇮🇳 India – Literary Festivals
  // { title: "Panel Discussion", event: "Jaipur Literature Festival", year: "2024", type: "Panel" },
  // { title: "Session", event: "Lit Chowk, Indore", year: "2024", type: "Talk" },
  { title: "Hindi in Contemporary Culture", event: "Sahityotsav, Raipur", year: "2024", type: "Talk" },
  // { title: "Literary Session", event: "Shimla Literature Festival", year: "2023", type: "Panel" },
  // { title: "Literary Session", event: "Jim Corbett Literature Festival", year: "2023", type: "Panel" },
  { title: "Panel Discussion", event: "Lit-O-Fest, Mumbai", year: "2023", type: "Panel" },
  { title: "Literary Session", event: "Patna Literature Festival", year: "2023", type: "Panel" },
  // { title: "Literary Session", event: "Kerala Literature Festival", year: "2023", type: "Panel" },

  // 🎓 Academic & Institutional
  // { title: "Author Talk", event: "IIM Bangalore", year: "2024", type: "Lecture" },
  // { title: "Interactive Session", event: "Parul University, Gujarat", year: "2023", type: "Talk" },
  { title: "Interactive Session", event: "Reserve Bank of India, Mumbai", year: "2023", type: "Talk" },

  // 🌍 International
  { title: "Literary Session", event: "Lit-O-Fest, London", year: "2024", type: "Panel" },
  { title: "Talk", event: "Seoul Art Space, South Korea", year: "2020", type: "Talk" },
  { title: "Interactive Session", event: "Coventry University, UK", year: "2024", type: "Lecture" },

  // 🎯 Workshops / Masterclasses
  { title: "Popular Fiction Masterclass", event: "Katha Kahan, Jaipur", year: "2023", type: "Masterclass" },
  { title: "Creative Writing Workshop", event: "Brookstone, Dubai", year: "2025", type: "Workshop" },
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
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[16/10] mb-6">
              <img
                src="/images/speaker.jpg"
                alt="Pankaj Dubey speaking"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent dark:block hidden" />
            </div>

            {/* 🔥 UPDATED CONTENT */}
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Across geographies, languages, and audiences, Pankaj Dubey’s talks
              are rooted in storytelling that bridges literature, cinema, and
              the lived realities of contemporary India. His sessions bring
              together the insight of a bestselling bilingual author, the
              sensibility of a cultural commentator, and the lived experience of
              a storyteller shaped by small-town India with a global outlook.
            </p>

            <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4">
              From literary festivals and premier academic institutions to
              international platforms and curated masterclasses, his engagements
              are known for being thought-provoking, interactive, and deeply
              relatable.
            </p>

            <a
              href="mailto: carryonpd@gmail.com"
              className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors mt-6"
            >
              Book a Speaking Engagement <ExternalLink size={12} />
            </a>
          </motion.div>

          {/* Right Section */}
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

                    <span className="font-body text-xs text-muted-foreground block">
                      {talk.event}
                    </span>

                    {talk.coverage && (
                      <a
                        href={talk.coverage.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-primary mt-1 hover:underline"
                      >
                        {talk.coverage.headline}
                        <ExternalLink size={10} />
                      </a>
                    )}
                  </div>

                  <div className="text-right">
                    <span className="font-body text-[10px] tracking-wider uppercase text-primary block">
                      {talk.type}
                    </span>
                    <span className="font-body text-xs text-muted-foreground">
                      {talk.year}
                    </span>
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