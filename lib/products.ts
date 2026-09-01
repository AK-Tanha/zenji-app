export const cloudinaryBase =
  "https://res.cloudinary.com/diqbikizp/image/upload/f_auto,q_auto/zenji/products";

export type Product = {
  name: string;
  slug: string;
  price: number;
  salePrice?: number;
  images: string[];
};

const img = (file: string) => `${cloudinaryBase}/${file}`;

export const products: Product[] = [
  {
    name: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    price: 39.99,
    salePrice: 33.99,
    images: [img("Blue-flame-1.webp"), img("Blue-flame-2.webp")],
  },
  {
    name: "BUSHIDO TEE",
    slug: "bushido-tee",
    price: 39.99,
    images: [img("Bushido-1.webp"), img("Bushido-2.webp")],
  },
  {
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    price: 39.99,
    salePrice: 33.99,
    images: [img("Demon-blood-1.webp"), img("Demon-blood-2.webp")],
  },
  {
    name: "DOMAIN EXPANSION TEE",
    slug: "domain-expansion-tee",
    price: 39.99,
    images: [img("Domain-expansion-1.webp"), img("Domain-expansion-2.webp")],
  },
  {
    name: "FREE SOUL TEE",
    slug: "free-soul-tee",
    price: 39.99,
    images: [img("Free-soul-1.webp"), img("Free-soul-2.webp")],
  },
  {
    name: "LIMITLESS TEE",
    slug: "limitless-tee",
    price: 39.99,
    images: [img("Limitless-1.webp"), img("Limitless-2.webp")],
  },
  {
    name: "PARADISE SPIRIT TEE",
    slug: "paradise-spirit-tee",
    price: 39.99,
    images: [img("Paradise-spirit-1.webp"), img("Paradise-spirit-2.webp")],
  },
  {
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    price: 39.99,
    salePrice: 33.99,
    images: [img("Warrior-spirit-2.webp"), img("Warrior-spirit-4.webp")],
  },
  {
    name: "WATER BREATHING TEE",
    slug: "water-breathing-tee",
    price: 39.99,
    images: [img("Water-breathing-1.webp"), img("Water-breathing-2.webp")],
  },
  {
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    price: 39.99,
    salePrice: 33.99,
    images: [img("Will-of-the-sun-1.webp"), img("Will-of-the-sun-2.webp")],
  },
];

export const collectionFeatured = [
  {
    name: "DEMON BLOOD TEE",
    slug: "demon-blood-tee",
    image: img("Demon-blood-4.webp"),
  },
  {
    name: "BLUE FLAME TEE",
    slug: "blue-flame-tee",
    image: img("Blue-flame-4.webp"),
  },
  {
    name: "WILL OF THE SUN TEE",
    slug: "will-of-the-sun-tee",
    image: img("Will-of-the-sun-4.webp"),
  },
  {
    name: "WARRIOR SPIRIT TEE",
    slug: "warrior-spirit-tee",
    image: img("Warrior-spirit-5.webp"),
  },
];
