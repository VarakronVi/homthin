export type Product = {
  id: number;
  nameEN: string;
  nameTH: string;
  province: string;
  provinceTH: string;
  region: string;
  price: number;
  scent: string;
  scentProfile: string;
  tag: string;
  bgColor: string;
  catalogImage: string;
  detailImages: [string, string, string];
  description1: string;
  description2: string;
  description3: string;
  description4: string;
  headline1: string;
  headline2: string;
  scentNotes: { top: string[]; middle: string[]; base: string[] };
};

export const products: Product[] = [
  {
    id: 1,
    nameEN: "Plumeria Edition",
    nameTH: "พลูมีเรีย อิดิชัน",
    province: "Bangkok",
    provinceTH: "กรุงเทพมหานคร",
    region: "Central",
    price: 249,
    scent: "Siam Royal Spa",
    scentProfile: "Floral",
    tag: "Zen Sanctuary",
    bgColor: "#F0EBE0",
    catalogImage: "/images/catalog/plumeria.svg",
    detailImages: [
      "/images/products/plumeria/image-1.svg",
      "/images/products/plumeria/image-2.svg",
      "/images/products/plumeria/image-3.svg",
    ],
    headline1: "The Essence of Serenity",
    headline2: "Step Into The Sanctuary",
    description1:
      "Our signature masterpiece. The Plumeria Edition is a universal symbol of Thai wellness and hospitality. Featuring soft, organic geometries, it transforms any room into a high-end spa sanctuary.",
    description2:
      "Designed to blend seamlessly into luxury resorts and mindful homes, the Plumeria shell features three smooth, overlapping petals that wrap elegantly around the internal Venturi engine. The top lip is softly asymmetrical, guiding the eye toward a central PLA mesh sculpted to resemble the heart of a blooming frangipani flower.",
    description3:
      "The ultimate expression of relaxation. A rich, narcotic blend of blooming white frangipani, warm ylang-ylang, and a smooth base of Thai sandalwood. It immediately lowers the heart rate and evokes the feeling of stepping into a world-class wellness retreat.",
    description4:
      "The plumeria flower is the welcoming signature of Thailand's world-renowned wellness culture, from the hidden rainforest retreats of Phuket to the oceanfront spas of Koh Samui. Take a moment to disconnect, breathe deeply, and experience the unparalleled warmth of traditional Thai healing arts.",
    scentNotes: {
      top: ["White Frangipani", "Ylang-Ylang"],
      middle: ["Thai Jasmine", "Lotus"],
      base: ["Thai Sandalwood", "Warm Musk"],
    },
  },
  {
    id: 2,
    nameEN: "Sao Ching Cha Edition",
    nameTH: "เสาชิงช้า อิดิชัน",
    province: "Bangkok",
    provinceTH: "กรุงเทพมหานคร",
    region: "Central",
    price: 299,
    scent: "Siam Citrus",
    scentProfile: "Citrus",
    tag: "Architectural",
    bgColor: "#EDE8DF",
    catalogImage: "/images/catalog/sao-ching-cha.svg",
    detailImages: [
      "/images/products/sao-ching-cha/image-1.svg",
      "/images/products/sao-ching-cha/image-2.svg",
      "/images/products/sao-ching-cha/image-3.svg",
    ],
    headline1: "The Pillar of Phra Nakhon",
    headline2: "Step Into Bangkok Old Town",
    description1:
      "Architectural precision meets historic grandeur. The Sao Ching Cha Edition draws its form from Bangkok's most iconic structural landmark, offering a commanding, regal aesthetic paired with a bright, refreshing citrus profile.",
    description2:
      "Strikingly vertical and deeply architectural, this monolith relies on strong, parallel lines. The form mimics the towering red teak pillars of the Giant Swing, culminating in a subtle, sweeping horizontal curve at the exhaust lip. The top scent matrix is an intricate, mathematical grid, reflecting the organized, historic urban planning of Bangkok's royal district.",
    description3:
      "A refined, cosmopolitan take on traditional Thai citrus. Effervescent notes of sweet mandarin and kaffir lime cut through the mustiness of urban living, creating a crisp, highly focused atmosphere perfect for a modern office or luxury living room.",
    description4:
      "Standing over 21 meters tall, the crimson pillars of the Giant Swing mark the historic and spiritual center of Bangkok. Wander through the quiet, winding alleys of Phra Nakhon, discover generations-old street food stalls, and witness the timeless architecture of Wat Suthat as the city pulses around it.",
    scentNotes: {
      top: ["Kaffir Lime", "Sweet Mandarin"],
      middle: ["Bergamot", "Lemongrass"],
      base: ["Cedarwood", "White Musk"],
    },
  },
  {
    id: 3,
    nameEN: "Phi Ta Khon Edition",
    nameTH: "ผีตาโขน อิดิชัน",
    province: "Loei",
    provinceTH: "เลย",
    region: "Northeastern",
    price: 299,
    scent: "Morning Mist",
    scentProfile: "Earthy",
    tag: "Cultural",
    bgColor: "#E6EBE4",
    catalogImage: "/images/catalog/phi-ta-khon.svg",
    detailImages: [
      "/images/products/phi-ta-khon/image-1.svg",
      "/images/products/phi-ta-khon/image-2.svg",
      "/images/products/phi-ta-khon/image-3.svg",
    ],
    headline1: "The Spirit of the Highlands",
    headline2: "Step Into Loei",
    description1:
      "Bold, structural, and deeply rooted in Isan folklore. The Phi Ta Khon Edition brings a striking sculptural presence to your interior while passively diffusing the cool, clarifying aura of a mountain morning.",
    description2:
      "Capturing the expressive proportions of Loei's famous festival masks, this design features a dramatic, flared base that pinches tightly at the Venturi throat before expanding into an oversized, sweeping top lip. The recessed 3D-printed mesh is a dynamic, radial starburst, engineered to accelerate airflow while honoring the vibrant, woven textures of Isan craftsmanship.",
    description3:
      "A crisp, clarifying blend that transports you to the cool, fog-draped peaks of Loei just before dawn. It opens with clean, airy notes of fresh mountain dew and crushed wild mint, anchored perfectly by a soft, earthy undertone of damp soil and green bamboo.",
    description4:
      "Hidden in a valley surrounded by jagged mountains, the Dan Sai district is the vibrant home of the Phi Ta Khon festival. Wake up before dawn to explore the untouched beauty of Phu Ruea National Park, where the highland air is crisp, the community is warm, and the culture is fiercely alive.",
    scentNotes: {
      top: ["Mountain Dew", "Wild Mint"],
      middle: ["Green Bamboo", "Cool Air"],
      base: ["Damp Earth", "Vetiver"],
    },
  },
  {
    id: 4,
    nameEN: "Bo Sang Edition",
    nameTH: "บ่อสร้าง อิดิชัน",
    province: "Chiang Mai",
    provinceTH: "เชียงใหม่",
    region: "Northern",
    price: 299,
    scent: "Antique Starry Night",
    scentProfile: "Woody",
    tag: "Cultural",
    bgColor: "#E8EDE5",
    catalogImage: "/images/catalog/bo-sang.svg",
    detailImages: [
      "/images/products/bo-sang/image-1.svg",
      "/images/products/bo-sang/image-2.svg",
      "/images/products/bo-sang/image-3.svg",
    ],
    headline1: "The Geometry of Calm",
    headline2: "Step Into Chiang Mai",
    description1:
      "Elevate your sanctuary. Inspired by the elegant canopy of Chiang Mai's traditional artisan umbrellas, the Bo Sang Edition purifies your space while releasing a calming, midnight botanical aroma.",
    description2:
      "The Bo Sang monolith features a slender, highly textured cylindrical base that flares gracefully outward at the top, mimicking an open canopy. The exterior is defined by precision-debossed vertical lines representing traditional bamboo ribs, while the top PLA lattice is arranged in a delicate, radial spoke pattern to ensure flawless, 360-degree scent dispersion.",
    description3:
      "A sophisticated, deep botanical blend that captures the crisp, cool air of a Northern Thai mountain after dusk. It features grounding base notes of local aged woods, intertwined with night-blooming jasmine and a whisper of mountain mist.",
    description4:
      "The heritage of the Bo Sang umbrella village dates back over a century, where artisans stretch natural mulberry paper over hand-carved bamboo frames. Discover the quiet charm of San Kamphaeng, cycle through misty highland tea plantations, and experience the slow, intentional pace of Northern Thai life.",
    scentNotes: {
      top: ["Night Jasmine", "Mountain Mist"],
      middle: ["Aged Wood", "Vetiver"],
      base: ["Sandalwood", "Dark Amber"],
    },
  },
];

export const impactStats = [
  { value: 17, unit: "M", label: "Tons of biomass\nsaved from burning", labelTH: "ตันชีวมวลที่ถูกนำมาใช้\nแทนการเผา" },
  { value: 40, unit: "%", label: "Of PM2.5 from\nagricultural burning", labelTH: "ของฝุ่น PM2.5\nมาจากการเผาชีวมวล" },
  { value: 100, unit: "%", label: "Natural\nzero electricity", labelTH: "ธรรมชาติ\nไม่ใช้ไฟฟ้า" },
  { value: 350, unit: "B", label: "USD bio-based\nmarket by 2027", labelTH: "USD มูลค่าตลาด\nสินค้าชีวภาพปี 2027" },
];
