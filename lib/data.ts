export type Product = {
  id: number;
  nameTH: string;
  nameEN: string;
  province: string;
  provinceTH: string;
  scent: string;
  price: number;
  biomassSource: string;
  storyTH: string;
  storyEN: string;
  tag: string;
  bgColor: string;
  scentNotes: { top: string[]; middle: string[]; base: string[] };
};

export const products: Product[] = [
  {
    id: 1,
    nameTH: "หอมถิ่นเชียงใหม่",
    nameEN: "Hom Thin Chiang Mai",
    province: "Chiang Mai",
    provinceTH: "เชียงใหม่",
    scent: "Wild Orchid · Mountain Pine · Lemongrass",
    price: 290,
    biomassSource: "Rice straw from Chiang Mai highland farms",
    storyTH:
      "ดอยสูงของเชียงใหม่เป็นที่อยู่ของกล้วยไม้ป่าและสนภูเขา กลิ่นนี้ถูกกลั่นจากธรรมชาติของดอย และถ่านชีวภาพที่ใช้ผลิตมาจากฟางข้าวที่เกษตรกรในพื้นที่สูงเคยเผาทิ้ง",
    storyEN:
      "The highlands of Chiang Mai shelter wild orchids and mountain pines. The biochar in this product was made from rice straw once left to burn — now transformed into something that brings the mountain to you.",
    tag: "Mountain",
    bgColor: "#E8EDE5",
    scentNotes: {
      top: ["Lemongrass", "Bergamot"],
      middle: ["Wild Orchid", "Green Leaves"],
      base: ["Mountain Pine", "Cedarwood"],
    },
  },
  {
    id: 2,
    nameTH: "หอมถิ่นสุโขทัย",
    nameEN: "Hom Thin Sukhothai",
    province: "Sukhothai",
    provinceTH: "สุโขทัย",
    scent: "Lotus Blossom · Jasmine · Ancient Earth",
    price: 290,
    biomassSource: "Sugarcane bagasse from Sukhothai fields",
    storyTH:
      "สุโขทัย เมืองแห่งรุ่งอรุณของความสุข กลิ่นดอกบัวและมะลิในยามเช้าของวัดเก่าแก่ ถ่านชีวภาพจากชานอ้อยของเกษตรกรในพื้นที่กลั่นเป็นกลิ่นที่พาใจกลับสู่ราชธานีเก่า",
    storyEN:
      "Sukhothai — dawn of happiness. Morning lotus and jasmine drift through ancient temple grounds. Biochar from local sugarcane bagasse carries the quiet spirit of Thailand's first kingdom.",
    tag: "Heritage",
    bgColor: "#F0EBE0",
    scentNotes: {
      top: ["Jasmine", "White Tea"],
      middle: ["Lotus Blossom", "Water Lily"],
      base: ["Sandalwood", "Ancient Earth"],
    },
  },
  {
    id: 3,
    nameTH: "หอมถิ่นกระบี่",
    nameEN: "Hom Thin Krabi",
    province: "Krabi",
    provinceTH: "กระบี่",
    scent: "Sea Salt · Ylang Ylang · Coconut Blossom",
    price: 290,
    biomassSource: "Coconut husk from Krabi coastal farms",
    storyTH:
      "กระบี่ ดินแดนแห่งทะเลสีมรกตและกลิ่นมหาสมุทร กลิ่นเกลือทะเล กระแจะ และดอกมะพร้าวที่ล่องลอยในสายลมทะเล ถ่านชีวภาพจากกะลามะพร้าวของชาวสวนในพื้นที่",
    storyEN:
      "Krabi's emerald sea and coastal breezes carry ylang ylang and sea salt. The biochar here comes from coconut husks — a gift from Krabi's coconut farmers.",
    tag: "Coastal",
    bgColor: "#E5EDEE",
    scentNotes: {
      top: ["Sea Salt", "Citrus"],
      middle: ["Ylang Ylang", "Frangipani"],
      base: ["Coconut", "Driftwood"],
    },
  },
  {
    id: 4,
    nameTH: "หอมถิ่นเลย",
    nameEN: "Hom Thin Loei",
    province: "Loei",
    provinceTH: "เลย",
    scent: "Cool Forest · Wild Herb · Morning Mist",
    price: 290,
    biomassSource: "Corn stalk from Loei highland farms",
    storyTH:
      "เลย ดินแดนแห่งภูเขาหมอกและอากาศหนาวเย็น กลิ่นป่าสนในยามเช้าและสมุนไพรป่าที่เปียกน้ำค้าง ถ่านชีวภาพจากซังข้าวโพดของเกษตรกรบนภูสูง",
    storyEN:
      "Loei's misty mountains and cool highland air carry wild herbs and forest pine. Biochar from corn stalks grown on the plateau — the cold north in a breath.",
    tag: "Highland",
    bgColor: "#E6EBE4",
    scentNotes: {
      top: ["Eucalyptus", "Morning Mist"],
      middle: ["Wild Herb", "Mint"],
      base: ["Pine", "Cool Earth"],
    },
  },
  {
    id: 5,
    nameTH: "หอมถิ่นนครศรีฯ",
    nameEN: "Hom Thin Nakhon Si",
    province: "Nakhon Si Thammarat",
    provinceTH: "นครศรีธรรมราช",
    scent: "Sacred Turmeric · Rain on Soil · Frangipani",
    price: 290,
    biomassSource: "Palm frond from Nakhon Si rubber farms",
    storyTH:
      "นครศรีธรรมราช เมืองแห่งพระบรมธาตุและวัฒนธรรมใต้ กลิ่นขมิ้นศักดิ์สิทธิ์ ฝนต้นฤดูที่ตกลงดิน และดอกลั่นทมขาวจากวัดเก่าแก่ ถ่านชีวภาพจากกาบปาล์มของชาวสวนยาง",
    storyEN:
      "Nakhon Si Thammarat — the great city of the south. Sacred turmeric, first rain on red earth, and temple frangipani. Biochar from palm fronds transforms what was burned into ritual.",
    tag: "Sacred",
    bgColor: "#EEE8E0",
    scentNotes: {
      top: ["Frangipani", "Rain"],
      middle: ["Turmeric", "Incense"],
      base: ["Red Earth", "Warm Wood"],
    },
  },
  {
    id: 6,
    nameTH: "หอมถิ่นน่าน",
    nameEN: "Hom Thin Nan",
    province: "Nan",
    provinceTH: "น่าน",
    scent: "River Reed · Green Bamboo · River Water",
    price: 290,
    biomassSource: "Rice husk from Nan valley farms",
    storyTH:
      "น่าน เมืองเล็กริมแม่น้ำที่ยังคงความบริสุทธิ์ กลิ่นกกริมน้ำ ไผ่เขียวในยามเช้า และสายน้ำใสของแม่น้ำน่าน ถ่านชีวภาพจากแกลบข้าวของเกษตรกรในหุบเขา",
    storyEN:
      "Nan — a small riverside city that time has kept pristine. River reeds, green bamboo, and clear mountain water. Biochar from rice husks carries the valley's quiet grace.",
    tag: "River",
    bgColor: "#E4EAE8",
    scentNotes: {
      top: ["Green Bamboo", "Fresh Water"],
      middle: ["River Reed", "Cucumber"],
      base: ["Vetiver", "Cedarwood"],
    },
  },
];

export const impactStats = [
  { value: 17, unit: "M", label: "Tons of biomass\nsaved from burning", labelTH: "ตันชีวมวลที่ถูกนำมาใช้\nแทนการเผา" },
  { value: 40, unit: "%", label: "Of PM2.5 emissions\nfrom agricultural burning", labelTH: "ของฝุ่น PM2.5\nมาจากการเผาชีวมวล" },
  { value: 100, unit: "%", label: "Non-toxic\nzero VOCs", labelTH: "ปลอดสารพิษ\nไม่มี VOC" },
  { value: 350, unit: "B USD", label: "Bio-based market\nby 2027", labelTH: "มูลค่าตลาด\nสินค้าชีวภาพปี 2027" },
];
