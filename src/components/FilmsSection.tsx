import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Play } from "lucide-react";

const films = [
  {
    title: "Chauranga",
    type: "Feature Film",
    year: "2024",
    description:
      "A compelling narrative exploring the depths of human connection and the stories that bind us together across generations.",
    poster: "/films/Film_Poster_Chauranga_Movie.jpg",
  },
  {
    title: "Ghanchakkar",
    type: "Feature Film",
    year: "2023",
    description:
      "An evocative journey through time and memory, weaving together the threads of identity and belonging.",
    poster: "/films/Ghanchakkar-poster.jpg",
  },
  {
    title: "Gheela",
    type: "Short Film",
    year: "2023",
    description:
      "A poignant short exploring the quiet moments that define our lives and the unspoken words between loved ones.",
    poster: "/films/Gheela.jpg",
  },
  {
    title: "Naach Ganesh",
    type: "Short Film",
    year: "2022",
    description:
      "A visually stunning piece that captures the essence of solitude and self-discovery in the modern world.",
    poster: "/films/images.jpeg",
  },
];

const FilmsSection = () => {
  const ref = useRef(null);
  const [showVideo, setShowVideo] = useState(false);

  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="films"
      className="section-padding relative overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Filmography
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-light">
            Stories on <span className="italic text-gradient-gold">Screen</span>
          </h2>
        </motion.div>

        {/* Latest Release */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative mb-16 group cursor-pointer"
          onClick={() => setShowVideo(true)}
        >
          <div className="relative aspect-[21/9] overflow-hidden rounded-lg">
            <img
              src="/films/marathamandir.jpg"
              alt="Film still"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border-2 border-white/60 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                <Play
                  className="text-white group-hover:text-primary ml-1"
                  size={28}
                />
              </div>
            </div>

            <div className="absolute bottom-8 left-8">
              <span className="font-body text-xs tracking-wider uppercase text-primary">
                Latest Release
              </span>

              <h3 className="font-display text-3xl md:text-4xl font-light mt-2 text-white">
                Maratha Mandir Cinema
              </h3>
            </div>
          </div>
        </motion.div>

        {/* Films List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {films.map((film, index) => (
            <motion.div
              key={film.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group flex flex-col sm:flex-row gap-6"
            >
              {/* Poster */}
              <div className="relative w-40 sm:w-44 mx-auto sm:mx-0 flex-shrink-0 aspect-[2/3] overflow-hidden rounded-lg">
                <img
                  src={film.poster}
                  alt={`${film.title} poster`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                  {film.year}
                </p>

                <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                  {film.title}
                </h3>

                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {film.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="relative w-full max-w-5xl aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-sm"
            >
              Close ✕
            </button>

            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.youtube.com/embed/8Y3z55Uyr30?autoplay=1"
              title="Maratha Mandir Cinema"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default FilmsSection;