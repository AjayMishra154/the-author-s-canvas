import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialLinks from "./SocialLinks";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <footer className="px-6 md:px-12 lg:px-20 py-20 border-t border-border" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <div>
            <h3 className="font-display text-2xl font-light mb-4">Pankaj Dubey</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6">
              Author, filmmaker, and host of "Between the Lines."
            </p>
            <SocialLinks size={16} />
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Explore</h4>
            <div className="space-y-2">
              {["Books", "Films", "Writing", "Podcasts", "Awards", "Talks"].map((link) => (
                <button
                  key={link}
                  onClick={() => document.querySelector(`#${link.toLowerCase()}`)?.scrollIntoView({ behavior: "smooth" })}
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Connect</h4>
            <div className="space-y-2">
              {[
                { label: "YouTube", href: "https://www.youtube.com/@SmallTownsBigStories"},
                { label: "Twitter/X", href: "https://x.com/carryonpd"},
                { label: "LinkedIn", href: "https://www.linkedin.com/in/pankaj-dubey-03a9baa/"},
                { label: "Instagram", href: "https://www.instagram.com/carryonpd/"},
                { label: "Facebook", href: "https://www.facebook.com/carryonpd" },
                { label: "Wikipedia", href: "https://en.wikipedia.org/wiki/Pankaj_Dubey"},
              ].map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {platform.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Contact</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              For press inquiries, speaking engagements, and rights information:
            </p>
            <a href="mailto: carryonpd@gmail.com" className="font-body text-sm text-primary hover:underline mt-2 inline-block">
            carryonpd@gmail.com
            </a>
            <p className="font-body text-sm text-muted-foreground mt-4">
              Literary representation by<br />Sterling Lord Literistic
            </p>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-muted-foreground">
            © 2026 Pankaj Dubey. All rights reserved.
          </span>
          <span className="font-body text-xs text-muted-foreground">
            Literary representation by Sterling Lord Literistic
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
