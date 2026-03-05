import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";
import SocialLinks from "./SocialLinks";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Get in Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Contact <span className="italic text-gradient-gold">Us</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">General Inquiries</h3>
                <a href="mailto:hello@adrianvale.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} /> hello@adrianvale.com
                </a>
              </div>

              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Press & Media</h3>
                <a href="mailto:press@adrianvale.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} /> press@adrianvale.com
                </a>
              </div>

              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Speaking Engagements</h3>
                <a href="mailto:speaking@adrianvale.com" className="flex items-center gap-3 font-body text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail size={16} /> speaking@adrianvale.com
                </a>
              </div>

              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Literary Representation</h3>
                <p className="font-body text-sm text-muted-foreground">Sterling Lord Literistic</p>
                <p className="font-body text-sm text-muted-foreground flex items-center gap-2 mt-1">
                  <MapPin size={14} /> New York, NY
                </p>
              </div>

              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">Follow</h3>
                <SocialLinks size={20} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for your message. We'll get back to you soon.");
              }}
              className="space-y-6"
            >
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Subject</label>
                <select className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors">
                  <option value="general">General Inquiry</option>
                  <option value="press">Press & Media</option>
                  <option value="speaking">Speaking Engagement</option>
                  <option value="rights">Rights & Licensing</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-body text-xs tracking-wider uppercase text-muted-foreground mb-2 block">Message</label>
                <textarea
                  required
                  rows={5}
                  className="w-full bg-transparent border border-border px-4 py-3 font-body text-sm text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Send Message <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
