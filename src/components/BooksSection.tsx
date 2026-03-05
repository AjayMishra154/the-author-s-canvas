import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { books } from "@/data/books";
import booksArrangement from "@/assets/books-arrangement.png";

const BooksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <section id="books" className="section-padding relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <img src={booksArrangement} alt="" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Bibliography
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            Ten Books, <span className="italic text-gradient-gold">One Vision</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {books.map((book, i) => (
            <motion.div
              key={book.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onMouseEnter={() => setHoveredBook(i)}
              onMouseLeave={() => setHoveredBook(null)}
              className="group border-t border-border py-6 md:py-8 transition-colors hover:bg-secondary/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
                <Link to={`/books/${book.slug}`} className="flex-1 cursor-pointer">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-body text-xs text-primary">{book.year}</span>
                    <h3 className="font-display text-xl md:text-2xl font-light group-hover:text-primary transition-colors">
                      {book.title}
                    </h3>
                    <span className="hidden md:inline font-body text-xs text-muted-foreground tracking-wider uppercase">
                      {book.genre}
                    </span>
                  </div>
                  <motion.p
                    initial={false}
                    animate={{ height: hoveredBook === i ? "auto" : 0, opacity: hoveredBook === i ? 1 : 0 }}
                    className="overflow-hidden font-body text-sm text-muted-foreground max-w-xl"
                  >
                    {book.description}
                  </motion.p>
                </Link>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={book.penguin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-4 py-2 border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    Penguin <ExternalLink size={12} />
                  </a>
                  <a
                    href={book.amazon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Amazon <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default BooksSection;
