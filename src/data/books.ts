import bookCover1 from "@/assets/book-cover-1.png";

export interface Book {
  slug: string;
  title: string;
  year: string;
  genre: string;
  description: string;
  longDescription: string;
  coverImage: string;
  penguin: string;
  amazon: string;
}

export const books: Book[] = [
  {
    slug: "the-weight-of-tides",
    title: "The Weight of Tides",
    year: "2024",
    genre: "Literary Fiction",
    description: "A haunting exploration of memory and loss set against the backdrop of a vanishing coastal town.",
    longDescription: "In The Weight of Tides, Adrian Vale delivers his most ambitious and deeply personal work yet. Set in the fictional coastal town of Briar Point—a place slowly being reclaimed by the sea—the novel follows three generations of women as they navigate the treacherous waters of memory, grief, and the stories we tell ourselves to survive. With prose that has been compared to Marilynne Robinson and Toni Morrison, Vale crafts a world where the landscape itself becomes a character, where the rising tides mirror the inexorable pull of the past. Winner of the National Book Award and longlisted for the Booker Prize.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "ember-and-ash",
    title: "Ember & Ash",
    year: "2023",
    genre: "Historical Fiction",
    description: "Two families connected across centuries by a single devastating secret.",
    longDescription: "Spanning from the Great Fire of London to the present day, Ember & Ash weaves together the stories of two families bound by a secret that has shaped their destinies for generations. Through meticulous historical research and Vale's signature lyrical prose, readers are transported across centuries of love, betrayal, and the embers of truth that refuse to be extinguished. A sweeping epic that asks: what do we owe to the past, and what does the past owe us?",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "the-cartographers-daughter",
    title: "The Cartographer's Daughter",
    year: "2022",
    genre: "Literary Fiction",
    description: "A woman traces her father's maps to uncover a hidden geography of the heart.",
    longDescription: "When cartographer Elara Voss inherits her late father's collection of hand-drawn maps, she discovers they chart not just physical territories but emotional landscapes—places of joy, regret, and forbidden love. As she follows the maps across three continents, Elara uncovers a secret life her father led and must reconcile the man she knew with the one she discovers. The Cartographer's Daughter is a meditation on the spaces between what we show the world and what we keep hidden.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "nocturne-in-salt",
    title: "Nocturne in Salt",
    year: "2021",
    genre: "Poetry Collection",
    description: "Poems that chart the terrain between grief and grace.",
    longDescription: "Vale's first poetry collection is a revelation. Written during a year of profound personal loss, Nocturne in Salt moves between the salt marshes of coastal Maine and the salt of tears, between the mineral facts of the earth and the crystalline structures of grief. These poems are spare, luminous, and achingly precise—each one a small architecture of feeling. Shortlisted for the National Book Award in Poetry.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "the-silence-between-us",
    title: "The Silence Between Us",
    year: "2020",
    genre: "Novel",
    description: "An intimate portrait of a marriage unraveling across three continents.",
    longDescription: "Set across Tokyo, Lisbon, and Buenos Aires, The Silence Between Us follows Maren and Thomas Lindqvist as their twenty-year marriage quietly dissolves. Through alternating perspectives and a non-linear timeline, Vale explores how two people can share a life yet live in entirely different worlds. A novel about the eloquence of what goes unsaid and the devastating precision of the words we finally choose to speak.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "meridian-lines",
    title: "Meridian Lines",
    year: "2019",
    genre: "Literary Fiction",
    description: "A physicist's quest for meaning leads him to the edges of language itself.",
    longDescription: "Dr. Soren Halvard has spent his career studying the invisible lines that divide the world—meridians, borders, the boundaries between particles. When a laboratory accident leaves him unable to speak, he embarks on a journey to find a language beyond words. Meridian Lines is Vale's most experimental novel, blending physics, philosophy, and deeply human storytelling into a work that challenges our understanding of communication itself.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "what-the-river-knows",
    title: "What the River Knows",
    year: "2018",
    genre: "Short Stories",
    description: "Twelve stories of transformation, each set along a different body of water.",
    longDescription: "From the Mississippi to the Ganges, from a frozen Finnish lake to a hidden cenote in the Yucatán, these twelve stories explore the transformative power of water in all its forms. Each story features a character at a moment of profound change, and each body of water serves as both setting and metaphor. What the River Knows was awarded the PEN/Faulkner Award and has been translated into twenty-three languages.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "the-glass-architect",
    title: "The Glass Architect",
    year: "2017",
    genre: "Novel",
    description: "A visionary builder constructs impossible structures that reveal invisible truths.",
    longDescription: "Inspired by the life of Crystal Palace architect Joseph Paxton, The Glass Architect tells the story of Ivo Kristal, a self-taught builder who creates structures of breathtaking transparency. But as his buildings reveal more, Ivo himself becomes more opaque, hiding behind his creations. A novel about the relationship between art and truth, and the price we pay for making the invisible visible.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "letters-to-nowhere",
    title: "Letters to Nowhere",
    year: "2016",
    genre: "Epistolary Novel",
    description: "A collection of unsent letters that tell the story of an extraordinary ordinary life.",
    longDescription: "When postal worker Alma Reyes retires after forty years, she discovers a box of unsent letters she's collected over the decades. Each letter is a window into a life—confessions of love, apologies never made, dreams never shared. As Alma reads them, she begins writing her own unsent letters, and through them, the story of her remarkable, unheralded life emerges. Letters to Nowhere is a celebration of the lives lived in quiet dignity.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
  {
    slug: "first-light",
    title: "First Light",
    year: "2015",
    genre: "Debut Novel",
    description: "The novel that started it all—a meditation on beginnings and the courage to create.",
    longDescription: "Adrian Vale's debut novel burst onto the literary scene with the force of a sunrise. First Light tells the story of a young lighthouse keeper on a remote island who discovers a cache of manuscripts hidden in the lighthouse walls—manuscripts that seem to predict the future. Part literary mystery, part philosophical meditation, First Light established Vale as a bold new voice in American fiction and was a finalist for the PEN/Hemingway Award.",
    coverImage: bookCover1,
    penguin: "https://www.penguinrandomhouse.com",
    amazon: "https://www.amazon.com",
  },
];
