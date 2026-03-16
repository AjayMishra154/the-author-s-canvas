import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Film, BookOpen, ChevronLeft, ChevronRight } from "lucide-react";

import nalandaImg from "@/assets/nalanda.jpg";
import jagranImg from "@/assets/jagaran.jpg.jpg";
import pravasiImg from "@/assets/pravasi.jpeg";

const projects = [
  {
    title: "Nalanda Literature Festival",
    type: "Literature Festival",
    year: "2025",
    description:
      "Served as Festival Curator, leading the thematic vision, speaker curation, and literary programming. Oversaw author sessions, panel discussions, and public conversations.",
    icon: BookOpen,
    image: nalandaImg,
  },
  {
    title: "Jagran Film Festival",
    type: "Film Festival",
    year: "2010–2011",
    description:
      "Curated narrative-led film programming for one of India's largest travelling film festivals, focusing on storytelling and screen culture.",
    icon: Film,
    image: jagranImg,
  },
  {
    title: "Pravasi Film Festival",
    type: "Film Festival",
    year: "2010",
    description:
      "Served as Festival Director at India Habitat Centre, New Delhi, overseeing programming and festival operations focused on diaspora cinema.",
    icon: Film,
    image: pravasiImg,
  }
];

const CuratorialSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[index];

  return (
    <section id="curatorial" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-xs tracking-[0.3em] uppercase text-primary mb-4 block">
            Curation
          </span>

          <h2 className="text-4xl md:text-6xl font-light">
            Curatorial <span className="italic text-gradient-gold">Projects</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE SLIDER */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-xl">
              <img
                src={project.image}
                className="w-full h-full object-cover"
                alt={project.title}
              />
            </div>

            {/* Controls */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 p-2 rounded-full"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>

          {/* FESTIVAL INFO */}
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <project.icon size={18} className="text-primary" />
              <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {project.type}
              </span>
            </div>

            <h3 className="text-3xl font-light mb-2">
              {project.title}
            </h3>

            <span className="text-sm text-primary block mb-4">
              {project.year}
            </span>

            <p className="text-muted-foreground leading-relaxed max-w-lg">
              {project.description}
            </p>

            {/* dots */}
            <div className="flex gap-3 mt-8">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full ${
                    index === i ? "bg-primary" : "bg-border"
                  }`}
                />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CuratorialSection;