import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SocialLinks from "./SocialLinks";

const FooterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const email = "carryonpd@gmail.com";

  const subject = "Website Inquiry";

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&subject=${encodeURIComponent(
    subject
  )}`;
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
              Author, filmmaker, and host of "Small Towns Big Stories"
            </p>
            <SocialLinks size={16} />
          </div>

          <div>
            <h4 className="font-body text-xs tracking-[0.2em] uppercase text-primary mb-4">Navigate</h4>
            <div className="space-y-2">
            {["Home", "About", "Contact"].map((link) => {
  const targetId = link === "Home" ? "Hero" : link;

  return (
    <button
      key={link}
      onClick={() =>
        document
          .querySelector(`#${targetId}`)
          ?.scrollIntoView({ behavior: "smooth" })
      }
      className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
    >
      {link}
    </button>
  );
})}
              <a
                href="/work/all"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                All Work
              </a>
              <a
                href="/work/books"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Books
              </a>
              <a
                href="/work/films"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Films
              </a>
              <a
                href="/work/curatorial"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Curatorial
              </a>
              <a
                href="/work/podcasts"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Podcasts
              </a>
              <a
                href="/work/festival"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Festival
              </a>
              <a
                href="/gallery"
                className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </a>
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
            <a  target="_blank" href={gmailLink} className="font-body text-sm text-primary hover:underline mt-2 inline-block">
            carryonpd@gmail.com
            </a>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-muted-foreground">
            © 2026 Pankaj Dubey. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
