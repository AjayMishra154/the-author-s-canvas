import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
// import writingDesk from "@/assets/writing-desk.png";
import SocialLinks from "./SocialLinks";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <img
                src="/author/pic3.jpg"
                alt="Writing desk with typewriter"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3 flex flex-col justify-center"
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
              About the Author
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-8 leading-tight">
              Stories born from <br />
              <span className="italic text-gradient-gold">silence and shadow</span>
            </h2>
            <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
  <p>
    Pankaj Dubey is an established literary leader and bestselling bilingual author whose work spans
    fiction, public literary discourse, and contemporary narrative culture. Over a career of more than
    two decades, he has built a sustained body of work in literature, combining commercially successful
    novels with cultural leadership through festivals, public conversations, columns, and mentorship.
  </p>

  <p>
    His primary artistic practice lies in literature, where he has created a significant body of
    storytelling that engages with contemporary society, identity, and the evolving human condition.
    Alongside his novels, Dubey has contributed extensively to literary journalism and cultural
    commentary, helping shape conversations around modern Indian literature.
  </p>

  <p>
    Beyond writing, he actively participates in the global literary ecosystem through festival
    curation, public dialogue, and cross-media storytelling. His work across journalism, audio,
    and screen-based storytelling extends the reach of his narrative practice to international audiences.
  </p>
</div>
            <div className="mt-8">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">Follow</span>
              <SocialLinks size={18} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
