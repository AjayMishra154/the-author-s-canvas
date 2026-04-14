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
              <span className="italic text-gradient-gold">
                silence and shadow
              </span>
            </h2>

            <div className="space-y-5 text-muted-foreground font-body text-sm leading-relaxed">
              <p>
                In an era where Indian storytelling is often dominated by metropolitan narratives, Pankaj Dubey stands out as a voice rooted in the overlooked landscapes of small-town India.
              </p>

              <p>
                Born in Ranchi and shaped by life in Chaibasa, Dubey’s work captures the emotional and cultural tensions of India’s “in-between” spaces—towns that exist somewhere between tradition and aspiration. Much like how R. K. Narayan imagined Malgudi, Dubey’s fiction reclaims the small town as a powerful narrative universe for contemporary times.
              </p>

              <p>
                A former journalist with BBC World Service, Dubey transitioned into literature and cinema, crafting bestselling novels such as What a Loser!, Ishqiyapa, and One String Attached. His storytelling blends humour, romance, and socio-political insight—often embedding larger national conversations within intimate personal journeys.
              </p>

              <p>
                But Dubey’s work extends beyond the page. As the founder of the Sadak Chhaap Film Festival, he has created a unique cultural platform that brings cinema to street-connected children—redefining access to storytelling at the grassroots level. His short film Maratha Mandir Cinema has also travelled to international festivals, reinforcing his position as a cross-medium storyteller.
              </p>

              <p>
                More recently, Dubey has emerged as a cultural curator, shaping conversations around literature, youth voices, and popular culture. His role in curating the Nalanda Literature Festival reflects a larger vision: to democratize storytelling and bridge the gap between emerging voices and global audiences.
              </p>

              <p>
                At a time when global publishing is increasingly interested in diverse and authentic narratives, Dubey represents a compelling literary figure—one who not only writes about small-town India but actively builds ecosystems for its stories to be seen and heard.
              </p>
            </div>

            <div className="mt-8">
              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 block">
                Follow
              </span>
              <SocialLinks size={18} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;