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

        {/* Heading */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* LEFT — Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            {/* Email */}
            <div className="flex items-start gap-4">
              <Mail className="text-primary" size={20} />
              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                  Email
                </h3>
                <a
                  href="mailto: carryonpd@gmail.com"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                   carryonpd@gmail.com
                </a>
              </div>
            </div>

            {/* Press */}
            <div className="flex items-start gap-4">
              <Mail className="text-primary" size={20} />
              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                  Press & Media
                </h3>
                <a
                  href="mailto: carryonpd@gmail.com"
                  className="font-body text-muted-foreground hover:text-primary transition-colors"
                >
                  carryonpd@gmail.com
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <MapPin className="text-primary" size={20} />
              <div>
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2">
                  Location
                </h3>
                <p className="font-body text-muted-foreground">
                  Mumbai, IND
                </p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4">
                Follow
              </h3>
              <SocialLinks size={22} />
            </div>
          </motion.div>

          {/* RIGHT — CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-muted/20 border border-border p-12"
          >
            <h3 className="font-display text-3xl font-light mb-6">
              Let's Start a Conversation
            </h3>

            <p className="text-muted-foreground mb-8 font-body">
              Whether it's about speaking engagements, press inquiries,
              collaborations, or literary rights — feel free to reach out.
              We'd love to hear from you.
            </p>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ajaymishra8885@gmail.com&su=Website Inquiry"
              target="_blank"
              className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"

            >
              Email Us <Send size={14} />
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;