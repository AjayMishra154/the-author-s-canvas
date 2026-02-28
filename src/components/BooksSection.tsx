import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import booksArrangement from "@/assets/books-arrangement.png";

const books = [
  { title: "The Weight of Tides", year: "2024", genre: "Literary Fiction", description: "A haunting exploration of memory and loss set against the backdrop of a vanishing coastal town." },
  { title: "Ember & Ash", year: "2023", genre: "Historical Fiction", description: "Two families connected across centuries by a single devastating secret." },
  { title: "The Cartographer's Daughter", year: "2022", genre: "Literary Fiction", description: "A woman traces her father's maps to uncover a hidden geography of the heart." },
  { title: "Nocturne in Salt", year: "2021", genre: "Poetry Collection", description: "Poems that chart the terrain between grief and grace." },
  { title: "The Silence Between Us", year: "2020", genre: "Novel", description: "An intimate portrait of a marriage unraveling across three continents." },
  { title: "Meridian Lines", year: "2019", genre: "Literary Fiction", description: "A physicist's quest for meaning leads him to the edges of language itself." },
  { title: "What the River Knows", year: "2018", genre: "Short Stories", description: "Twelve stories of transformation, each set along a different body of water." },
  { title: "The Glass Architect", year: "2017", genre: "Novel", description: "A visionary builder constructs impossible structures that reveal invisible truths." },
  { title: "Letters to Nowhere", year: "2016", genre: "Epistolary Novel", description: "A collection of unsent letters that tell the story of an extraordinary ordinary life." },
  { title: "First Light", year: "2015", genre: "Debut Novel", description: "The novel that started it all—a meditation on beginnings and the courage to create." },
];

const BooksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [hoveredBook, setHoveredBook] = useState<number | null>(null);

  return (
    <section id="books" className="section-padding relative" ref={ref}>
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
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
              className="group border-t border-border py-6 md:py-8 cursor-pointer transition-colors hover:bg-secondary/30"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-4">
                <div className="flex-1">
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
                </div>

                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href="https://www.penguinrandomhouse.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-xs tracking-wider uppercase px-4 py-2 border border-border hover:border-primary hover:text-primary transition-colors"
                  >
                    Penguin <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://www.amazon.com"
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
