import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const pressArticles = [
  { title: "All the big stories come from small towns': Pankaj Dubey on writing India's forgotten narratives'", source: "Eastern Eye", date: "April 2026", url: "https://www.easterneye.biz/pankaj-dubey-small-town-stories-india-narratives/" },
  { title: "Short film Maratha Mandir Cinema pays tribute to DDLJ", source: "Indulge Express", date: "October 2021", url: "https://www.indulgexpress.com/entertainment/cinema/2021/Oct/21/short-film-maratha-mandir-cinema-pays-tribute-to-ddlj-36419.html" },
  { title: "How Pankaj Dubey Turned Love Letters into Powerful Stories", source: "Eastern Eye", date: "March 2026", url: "https://www.easterneye.biz/how-pankaj-dubey-turned-love-letters-into-powerful-stories/" },
  { title: "Sarika, Swanand Kirkire's Tribute to SRK-Kajol's 'Dilwale Dulhania Le Jayenge'", source: "Variety", date: "October 2021", url: "https://www.thequint.com/entertainment/bollywood/dilwale-dulhania-le-jayenge-tribute-maratha-mandir-cinema-short-film-sarika-swanand-kirkire-pankaj-dubey-shradha-singh#read-more" },
  {
    title: "Chaibasa writer in Seoul workshop",
    source: "The Times of India",
    year: "April 2016", 
    url: "http://timesofindia.indiatimes.com/articleshow/52051005.cms"
  },
  { title: "One String Attached: Love in the shadow of history", source: "Qatar Tribune", date: "Augest 2025", url: "https://www.qatar-tribune.com/article/192039/nation/one-string-attached-love-in-the-shadow-of-history" },
  // { title: "Why Pankaj Dubey Is the Voice of a Generation", source: "Time Magazine", date: "June 2022", url: "https://time.com" },
  // { title: "Sundance Standout: 'Saltwater Elegy' Review", source: "IndieWire", date: "January 2021", url: "https://indiewire.com" },
  // { title: "The Quiet Revolution of Pankaj Dubey's Prose", source: "The Atlantic", date: "March 2020", url: "https://theatlantic.com" },
  // { title: "PEN/Faulkner Award Goes to 'What the River Knows'", source: "Publishers Weekly", date: "April 2018", url: "https://publishersweekly.com" },
];

const NewsRoomSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="newsroom" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Press Coverage
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-light">
            In the <span className="italic text-gradient-gold">News</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {pressArticles.map((article, i) => (
            <motion.a
              key={i}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex items-center gap-6 py-5 border-t border-border hover:bg-secondary/20 transition-colors px-4 -mx-4"
            >
              <div className="flex-1">
                <h3 className="font-display text-lg md:text-xl font-light group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-body text-xs text-primary">{article.source}</span>
                  <span className="font-body text-xs text-muted-foreground">{article.date}</span>
                </div>
              </div>
              <ArrowUpRight size={18} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default NewsRoomSection;
