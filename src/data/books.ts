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

export const books: Book[] =[
  {
    slug: "ishq-baaki",
    title: "Ishq Baaki",
    year: "2024",
    genre: "Romantic Fiction",
    description:
      "A moving love story about relationships that endure distance, loss, and the passage of time.",
    longDescription:
      "Ishq Baaki is a poignant exploration of love that refuses to fade. Set across contemporary India and beyond, the story follows characters navigating heartbreak, destiny, and reunion. Through emotional twists and layered relationships, the novel reflects on how true love survives even when circumstances tear people apart. With deeply human characters and heartfelt storytelling, the novel celebrates hope, resilience, and the belief that some connections are never truly broken.",
    coverImage: "ishqbaaki.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "one-string-attached",
    title: "One String Attached",
    year: "2021",
    genre: "Romantic Fiction",
    description:
      "A heartfelt love story about hope, faith, and a journey across borders to reunite with a lost love.",
    longDescription:
      "Set in the ancient town of Ayodhya, One String Attached tells the story of Shivam and Aaina—two young lovers from different faiths whose lives are torn apart by communal violence. When tragedy destroys Shivam’s world, he moves to Delhi trying to rebuild his life. Years later, a small clue suggests that Aaina might still be alive. Driven by hope, Shivam begins a journey that takes him across cities and even to Dubai in search of the woman he never stopped loving. The novel beautifully explores faith, longing, and the fragile thread that keeps love alive despite impossible odds.",
    coverImage: "book5.jpg",
    penguin: "https://www.penguin.co.in/book/one-string-attached/",
    amazon: "https://www.amazon.in/One-String-Attached-Pankaj-Dubey/dp/0143447955",
  },
  {
    slug: "trending-in-love-hindi",
    title: "Trending in Love (Hindi)",
    year: "2021",
    genre: "Romantic Fiction",
    description:
      "A contemporary romance exploring modern relationships shaped by social media and changing lifestyles.",
    longDescription:
      "Trending in Love examines how technology and social media influence relationships in the modern world. The story follows characters whose love lives unfold under the glare of the digital age—where emotions, mistakes, and confessions can go viral in seconds. Blending humor, drama, and heartfelt moments, the novel portrays the complexities of romance in an era where trends and hashtags often collide with genuine human feelings.",
    coverImage: "trendinginlovehindi.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "trending-in-love-english",
    title: "Trending in Love",
    year: "2020",
    genre: "Romantic Fiction",
    description:
      "A modern romance that captures the chaos, excitement, and vulnerability of love in the social media age.",
    longDescription:
      "Trending in Love is a witty and engaging novel that explores how love stories unfold in a digitally connected world. As relationships develop through messages, posts, and viral moments, the characters must navigate misunderstandings, expectations, and public scrutiny. The novel blends humor with emotional depth, offering a relatable portrait of romance shaped by technology and modern lifestyles.",
    coverImage: "book3.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "love-curry",
    title: "Love Curry",
    year: "2017",
    genre: "Romantic Comedy",
    description:
      "A flavorful mix of humor, relationships, and everyday life in contemporary India.",
    longDescription:
      "Love Curry is a lighthearted romantic story that celebrates love in its many forms—unexpected, messy, and deeply human. Set against the backdrop of urban India, the novel brings together quirky characters, witty conversations, and heartfelt emotions. Much like the dish it’s named after, the story blends humor, drama, and romance into an entertaining narrative about relationships, family expectations, and the search for happiness.",
    coverImage: "book4.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "love-curry-hindi",
    title: "Love Curry (Hindi)",
    year: "2017",
    genre: "Romantic Comedy",
    description:
      "The Hindi edition of the popular romantic comedy about relationships and modern love.",
    longDescription:
      "Love Curry (Hindi) brings the charm and humor of the original English novel to Hindi readers. With relatable characters and witty storytelling, the novel explores the ups and downs of modern relationships. Through humor and emotional moments, the story reflects on how love, like good food, is best enjoyed with patience, understanding, and the right mix of ingredients.",
    coverImage: "book7.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "ishqiyapa",
    title: "Ishqiyapa – To Hell with Love",
    year: "2015",
    genre: "Romantic Comedy",
    description:
      "A humorous and emotional take on the madness of falling in love.",
    longDescription:
      "Ishqiyapa – To Hell with Love is a quirky romantic comedy that captures the chaos, heartbreak, and excitement that often come with love. Through entertaining characters and humorous situations, the novel explores how relationships can be both frustrating and deeply fulfilling. It is a story about accepting imperfections and discovering that love often appears when least expected.",
    coverImage: "book6.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "ishqiyapa-hindi",
    title: "Ishqiyapa",
    year: "2015",
    genre: "Romantic Comedy",
    description:
      "The Hindi edition of the humorous romance about the unpredictable nature of love.",
    longDescription:
      "Ishqiyapa (Hindi) delivers the same humor and charm of the English version while connecting deeply with Hindi readers. The novel explores love’s unpredictable nature through witty dialogue, emotional moments, and relatable characters. It reminds readers that relationships are often messy but always meaningful.",
    coverImage: "ishqyapahindi.jpeg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "what-a-loser",
    title: "What a Loser!",
    year: "2013",
    genre: "Coming-of-Age / Romantic Fiction",
    description:
      "A humorous coming-of-age story about ambition, love, and finding one’s identity.",
    longDescription:
      "What a Loser! follows the journey of a young protagonist navigating the challenges of adulthood, career struggles, and complicated relationships. Filled with humor and relatable situations, the novel captures the confusion and excitement of growing up. It ultimately becomes a story about self-discovery, resilience, and realizing that failures often lead to the most meaningful successes.",
    coverImage: "book1.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
  {
    slug: "loser-kahin-ka",
    title: "Loser Kahin Ka!",
    year: "2013",
    genre: "Coming-of-Age / Romantic Fiction",
    description:
      "The Hindi edition of the humorous coming-of-age story about love and self-discovery.",
    longDescription:
      "Loser Kahin Ka! is the Hindi adaptation of What a Loser!, bringing the same humorous and relatable story to Hindi readers. Through witty storytelling and heartfelt moments, the novel portrays the journey of a young person trying to overcome failures, understand relationships, and ultimately discover purpose and confidence.",
    coverImage: "book2.jpg",
    penguin: "https://www.penguin.co.in",
    amazon: "https://www.amazon.in",
  },
];