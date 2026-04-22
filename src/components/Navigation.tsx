import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "Books", to: "/work/books" },
  { label: "Films", to: "/work/films" },
  { label: "Festivals", to: "/work/curatorial" },
  { label: "Podcasts", to: "/work/podcasts" },
  { label: "Talks & Awards", to: "/work/talks-awards" },
  { label: "Writing & Media", to: "/work/writing-media" },
  { label: "Gallery", to: "/gallery" },
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

  const isActive = (item: any) => {
    if (item.to) {
      return location.pathname.startsWith(item.to);
    }
    // Home active when on root
    if (item.href === "#hero") {
      return location.pathname === "/";
    }
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-4">
          <button
            onClick={() => scrollTo("#hero")}
            className="font-display text-2xl font-light tracking-wider text-foreground hover:text-primary transition-colors"
          >
            Pankaj Dubey
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) =>
              item.to ? (
                <Link
                  key={item.label}
                  to={item.to}
                  className="relative font-body text-[14px] tracking-[0.15em] uppercase"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive(item)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>

                  {isActive(item) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary"
                    />
                  )}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href!)}
                  className="relative font-body text-[14px] tracking-[0.15em] uppercase"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive(item)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </span>

                  {isActive(item) && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-primary"
                    />
                  )}
                </button>
              )
            )}

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
            {navItems.map((item, i) =>
              item.to ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={`font-display text-2xl font-light transition-colors ${
                      isActive(item)
                        ? "text-primary"
                        : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.href!)}
                  className={`font-display text-2xl font-light transition-colors ${
                    isActive(item)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                </motion.button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;