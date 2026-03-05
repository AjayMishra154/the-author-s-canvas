import { motion } from "framer-motion";
import authorPortrait from "@/assets/author-portrait.png";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="mb-6"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary">
                Author · Filmmaker · Storyteller
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.9] mb-8"
            >
              Adrian
              <br />
              <span className="text-gradient-gold italic font-light">Vale</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1.5, delay: 0.6 }}
              className="h-px bg-primary mb-8"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="font-body text-muted-foreground text-base md:text-lg leading-relaxed max-w-md"
            >
              Exploring the boundaries between memory and truth through novels, 
              films, and the stories that haunt us long after the last page is turned.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-10 flex gap-4"
            >
              <button
                onClick={() => document.querySelector("#books")?.scrollIntoView({ behavior: "smooth" })}
                className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Explore Books
              </button>
              <button
                onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
                className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                About Me
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-10"
            >
              <SocialLinks size={16} />
            </motion.div>
          </div>

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute -inset-4 border border-primary/20" />
              <img
                src={authorPortrait}
                alt="Adrian Vale - Author portrait"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
