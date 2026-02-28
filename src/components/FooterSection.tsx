import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          <div>
            <h3 className="font-display text-2xl font-light mb-4">Adrian Vale</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Author, filmmaker, and host of "Between the Lines."
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Connect</h4>
            <div className="space-y-2">
              {["Twitter/X", "Instagram", "Substack", "Letterboxd"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Contact</h4>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              For press inquiries, speaking engagements, and rights information:
            </p>
            <a href="mailto:press@adrianvale.com" className="font-body text-sm text-primary hover:underline mt-2 inline-block">
              press@adrianvale.com
            </a>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-muted-foreground">
            © 2026 Adrian Vale. All rights reserved.
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
