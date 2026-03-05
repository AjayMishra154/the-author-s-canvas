import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { books } from "@/data/books";

const BookDetail = () => {
  const { slug } = useParams();
  const book = books.find((b) => b.slug === slug);

  if (!book) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl mb-4">Book Not Found</h1>
          <Link to="/" className="text-primary hover:underline font-body text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="section-padding pt-12">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors mb-12"
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-16">
            {/* Book cover */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2"
            >
              <div className="relative sticky top-24">
                <div className="absolute -inset-3 border border-primary/20" />
                <img
                  src={book.coverImage}
                  alt={`${book.title} book cover`}
                  className="w-full aspect-[2/3] object-cover"
                />
              </div>
            </motion.div>

            {/* Book info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:col-span-3"
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-2 block">
                {book.genre} · {book.year}
              </span>
              <h1 className="font-display text-4xl md:text-6xl font-light mb-8 leading-tight">
                {book.title}
              </h1>

              <div className="w-16 h-px bg-primary mb-8" />

              <p className="font-body text-base text-muted-foreground leading-relaxed mb-8">
                {book.longDescription}
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a
                  href={book.penguin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-6 py-3 border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  Buy from Penguin <ExternalLink size={12} />
                </a>
                <a
                  href={book.amazon}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-xs tracking-wider uppercase px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Buy from Amazon <ExternalLink size={12} />
                </a>
              </div>

              {/* Other books */}
              <div className="border-t border-border pt-8">
                <h3 className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
                  More Books
                </h3>
                <div className="space-y-3">
                  {books
                    .filter((b) => b.slug !== book.slug)
                    .slice(0, 4)
                    .map((b) => (
                      <Link
                        key={b.slug}
                        to={`/books/${b.slug}`}
                        className="group flex items-center justify-between py-2 hover:text-primary transition-colors"
                      >
                        <span className="font-display text-lg font-light">{b.title}</span>
                        <span className="font-body text-xs text-muted-foreground">{b.year}</span>
                      </Link>
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
