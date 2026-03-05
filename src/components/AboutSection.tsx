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
                Pankaj Dubey is an internationally acclaimed author and filmmaker whose work spans the 
                liminal spaces between literary fiction and cinematic storytelling. With ten published novels, 
                three feature films, and a body of essays that has appeared in The New Yorker, The Atlantic, 
                and The Paris Review, Dubey has established himself as one of the most distinctive voices 
                of contemporary literature.
              </p>
              <p>
                Born in coastal Maine, Dubey draws deeply from landscapes of isolation and the quiet dramas 
                of ordinary lives. His debut novel, "The Weight of Tides," won the National Book Award and 
                was adapted into a critically acclaimed film. He holds an MFA from the Iowa Writers' Workshop 
                and has been a fellow at Yaddo, MacDowell, and the American Academy in Rome.
              </p>
              <p>
                When not writing, Dubey can be found recording his podcast "Between the Lines," hosting 
                masterclasses in narrative structure, or wandering the salt marshes near his home with 
                his two wolfhounds.
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
