// data/products.ts - Add more products with proper categorization
export const productsData = [
  {
    id: 1,
    name: "Classic Oxford Shirt",
    cat: "clothing",
    price: 89,
    image: "/images/ChemiseClassiqueOxford.svg",
    bg: "#E8DCD0",
    badge: "Best Seller",
    desc: "Premium cotton Oxford shirt with a tailored fit. Perfect for both casual and formal occasions.",
    specs: [["Material", "100% Cotton"], ["Fit", "Tailored"], ["Care", "Machine wash"]]
  },
  {
    id: 2,
    name: "Smart Watch Elite",
    cat: "gadgets",
    price: 299,
    image: "/images/Watch_Elite.svg",
    bg: "#2C2C2C",
    badge: "New",
    desc: "Advanced smartwatch with health tracking, GPS, and 7-day battery life.",
    specs: [["Display", "1.3'' AMOLED"], ["Battery", "7 days"], ["Waterproof", "5ATM"]]
  },
  {
    id: 3,
    name: "Nike Air Zoom",
    cat: "footwear",
    price: 129,
    image: "/images/NikeAirZoom.svg",
    bg: "#D4D4D4",
    badge: "Trending",
    desc: "Lightweight running shoes with responsive cushioning for maximum comfort.",
    specs: [["Upper", "Mesh"], ["Sole", "Rubber"], ["Closure", "Lace-up"]]
  },
  {
    id: 4,
    name: "Sound Pro Headphones",
    cat: "gadgets",
    price: 199,
    image: "/images/Sound_Pro.svg",
    bg: "#1A1A1A",
    badge: "Sale",
    desc: "Noise-cancelling headphones with premium sound quality and 30-hour battery.",
    specs: [["Type", "Over-ear"], ["Battery", "30 hours"], ["Connectivity", "Bluetooth 5.0"]]
  },
  {
    id: 5,
    name: "Varsity Jacket",
    cat: "clothing",
    price: 159,
    image: "/images/Veste.svg",
    bg: "#C41E3A",
    badge: "Limited",
    desc: "Classic varsity jacket with premium wool blend and leather sleeves.",
    specs: [["Material", "Wool blend"], ["Sleeves", "Leather"], ["Closure", "Snap buttons"]]
  },
  {
    id: 6,
    name: "Apple Watch Series 8",
    cat: "gadgets",
    price: 399,
    image: "/images/AppleWatchS8.svg",
    bg: "#F5F5F0",
    badge: "New",
    desc: "The most advanced Apple Watch with temperature sensing and crash detection.",
    specs: [["Display", "Always-On"], ["Sensors", "Blood Oxygen"], ["Battery", "18 hours"]]
  },
  {
    id: 7,
    name: "Red Sneakers",
    cat: "footwear",
    price: 89,
    image: "/images/RedSneakerDarkBg.svg",
    bg: "#8B0000",
    badge: "Trending",
    desc: "Bold red sneakers that make a statement. Comfortable and stylish.",
    specs: [["Upper", "Synthetic"], ["Sole", "EVA foam"], ["Style", "Low-top"]]
  },
  {
    id: 8,
    name: "Tablet Pro Max 11",
    cat: "tech",
    price: 799,
    image: "/images/TabletteProMax11.svg",
    bg: "#D4AF37",
    badge: null,
    desc: "Powerful tablet with stunning display and all-day battery life.",
    specs: [["Display", "11'' Liquid Retina"], ["Storage", "128GB"], ["Camera", "12MP"]]
  },
  {
    id: 9,
    name: "Black Blazer",
    cat: "clothing",
    price: 199,
    image: "/images/BlazerNoir.svg",
    bg: "#1A1A1A",
    badge: "Premium",
    desc: "Elegant black blazer for a sophisticated look. Perfect for formal events.",
    specs: [["Material", "Wool"], ["Fit", "Slim"], ["Pockets", "3"]]
  },
  {
    id: 10,
    name: "Premium Phone Case",
    cat: "accessories",
    price: 29,
    image: "/images/CoqueProtectionPremium.svg",
    bg: "#87CEEB",
    badge: null,
    desc: "Shockproof phone case with stylish design and drop protection.",
    specs: [["Material", "TPU + PC"], ["Compatibility", "iPhone/Android"], ["Features", "Shockproof"]]
  },
  {
    id: 11,
    name: "Slim Chino Pants",
    cat: "clothing",
    price: 79,
    image: "/images/PantalonChinoAjuster.svg",
    bg: "#D2B48C",
    badge: null,
    desc: "Comfortable slim-fit chinos perfect for everyday wear.",
    specs: [["Material", "Cotton"], ["Fit", "Slim"], ["Pockets", "4"]]
  },
  {
    id: 12,
    name: "Galaxy Smartphone",
    cat: "tech",
    price: 999,
    image: "/images/Smartphone_Galaxy_S21.svg",
    bg: "#4A4A4A",
    badge: "New",
    desc: "Latest smartphone with pro-grade camera and long-lasting battery.",
    specs: [["Display", "6.7'' AMOLED"], ["Camera", "108MP"], ["Battery", "5000mAh"]]
  },
  {
    id: 13,
    name: "Green Pullover",
    cat: "clothing",
    price: 69,
    image: "/images/pull_vert.svg",
    bg: "#2E8B57",
    badge: null,
    desc: "Cozy green pullover made from soft, sustainable materials.",
    specs: [["Material", "Organic Cotton"], ["Weight", "Medium"], ["Style", "Crewneck"]]
  },
  {
    id: 14,
    name: "Dark Blue Jacket",
    cat: "clothing",
    price: 149,
    image: "/images/VesteDarkBlue.svg",
    bg: "#1B2A4A",
    badge: null,
    desc: "Stylish dark blue jacket perfect for layering in any season.",
    specs: [["Material", "Polyester"], ["Lining", "Soft"], ["Pockets", "2"]]
  },
  {
    id: 15,
    name: "Sports Headband",
    cat: "sports",
    price: 19,
    image: "/images/Accessoires.svg",
    bg: "#7AA95C",
    badge: null,
    desc: "Moisture-wicking sports headband for intense workouts.",
    specs: [["Material", "Polyester"], ["Features", "Moisture-wicking"], ["Size", "Adjustable"]]
  },
  {
    id: 16,
    name: "Fitness Tracker",
    cat: "sports",
    price: 59,
    image: "/images/Watch_Elite.svg",
    bg: "#5A5A5A",
    badge: "New",
    desc: "Track your fitness goals with this advanced activity tracker.",
    specs: [["Battery", "5 days"], ["Features", "Heart rate"], ["Waterproof", "Yes"]]
  }
]

export const categoriesData = [
  {
    id: "clothing",
    name: "Clothing",
    bg: "#E8DCD0",
    image: "/images/Mode_Homme.svg",
    count: 0
  },
  {
    id: "gadgets",
    name: "Gadgets",
    bg: "#2C2C2C",
    image: "/images/High_Tech.svg",
    count: 0
  },
  {
    id: "footwear",
    name: "Footwear",
    bg: "#D4D4D4",
    image: "/images/Sneaker.svg",
    count: 0
  },
  {
    id: "accessories",
    name: "Accessories",
    bg: "#87CEEB",
    image: "/images/Accessoires.svg",
    count: 0
  },
  {
    id: "sports",
    name: "Sports",
    bg: "#7AA95C",
    image: "/images/Motif.svg",
    count: 0
  },
  {
    id: "tech",
    name: "Tech",
    bg: "#4A4A4A",
    image: "/images/Mobile.svg",
    count: 0
  }
]