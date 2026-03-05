import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Books", href: "#books" },
  { label: "Films", href: "#films" },
  { label: "Writing", href: "#writing" },
  { label: "Podcasts", href: "#podcasts" },
  { label: "Awards", href: "#awards" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLight, setIsLight] = useState(() => {
    return localStorage.getItem("theme") === "light";
  });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("light", isLight);
    localStorage.setItem("theme", isLight ? "light" : "dark");
  }, [isLight]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
          <button onClick={() => scrollTo("#hero")} className="font-display text-2xl font-light tracking-wider text-foreground hover:text-primary transition-colors">
            Pankaj dubey
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => setIsLight(!isLight)}
              className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary hover:bg-secondary transition-colors duration-300"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={16} /> : <Sun size={16} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsLight(!isLight)}
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {isLight ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-6"
          >
            {navItems.map((item, i) => (
              <motion.button
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => scrollTo(item.href)}
                className="font-display text-2xl font-light text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
