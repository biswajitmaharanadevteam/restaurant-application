// Authentic Menu Data for Banjaraa - Ek Anokhi Dawat (Bhubaneswar)

export const CATEGORIES = [
  { id: "all", label: "Full Dawat Menu", icon: "UtensilsCrossed" },
  { id: "mandi", label: "Signature Mandi Platters", icon: "Flame", highlight: true },
  { id: "kebabs", label: "Charcoal Kebabs & Starters", icon: "Sparkles" },
  { id: "curries", label: "Royal Awadhi Curries", icon: "Soup" },
  { id: "biryani", label: "Dum Biryani & Rice", icon: "CookingPot" },
  { id: "breads", label: "Tandoor Breads", icon: "Wheat" },
  { id: "beverages", label: "Sharbats & Coolers", icon: "GlassWater" },
  { id: "desserts", label: "Shahi Meetha / Desserts", icon: "Cake" }
];

export const MENU_ITEMS = [
  // --- MANDI SPECIALS ---
  {
    id: "mandi-chicken-juicy",
    name: "Chicken Juicy Mandi",
    category: "mandi",
    veg: false,
    rating: 4.9,
    reviews: 420,
    badge: "Bestseller",
    description: "Tender chicken slow-steamed in a subterranean pit, served over fragrant long-grain Zafrani rice infused with Yemeni spices, garnished with golden fried cashews, raisins, and accompanied by authentic spicy Tomato Dakoos and creamy Garlic Toum.",
    portions: [
      { size: "Single (Half)", serves: "1-2 Persons", price: 349, weight: "450g" },
      { size: "Dawat Platter (Full)", serves: "2-3 Persons", price: 649, weight: "900g" },
      { size: "Grand Family Thal", serves: "4-5 Persons", price: 1199, weight: "1800g" }
    ],
    price: 349,
    spiceLevel: "Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    tags: ["Signature", "Pit Cooked", "Nutty Garnish"]
  },
  {
    id: "mandi-mutton-juicy",
    name: "Mutton Juicy Mandi",
    category: "mandi",
    veg: false,
    rating: 5.0,
    reviews: 380,
    badge: "Chef's Crown",
    description: "Succulent, fall-off-the-bone baby goat shanks slow-braised for 6 hours in aromatic spices, perched over spiced Mandi rice. Served with steaming lamb bone Marak broth, Arabic garlic dip, and fiery red dakoos.",
    portions: [
      { size: "Single (Half)", serves: "1-2 Persons", price: 499, weight: "500g" },
      { size: "Dawat Platter (Full)", serves: "2-3 Persons", price: 899, weight: "1000g" },
      { size: "Grand Shahi Thal", serves: "4-5 Persons", price: 1699, weight: "2100g" }
    ],
    price: 499,
    spiceLevel: "Mild-Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&auto=format&fit=crop&q=80",
    tags: ["Mutton Shank", "Marak Broth", "Royal Feast"]
  },
  {
    id: "mandi-alfahm",
    name: "Al Fahm Barbeque Mandi",
    category: "mandi",
    veg: false,
    rating: 4.8,
    reviews: 290,
    badge: "Charcoal Grilled",
    description: "Arabian street-style whole chicken leg quarters marinated in Arabian sumac, black pepper, and roasted chili, char-grilled over flaming coal grills and placed over smokey mandi rice.",
    portions: [
      { size: "Single (Half)", serves: "1-2 Persons", price: 379, weight: "480g" },
      { size: "Dawat Platter (Full)", serves: "2-3 Persons", price: 699, weight: "950g" },
      { size: "Grand Family Thal", serves: "4-5 Persons", price: 1299, weight: "1900g" }
    ],
    price: 379,
    spiceLevel: "Spicy",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?w=800&auto=format&fit=crop&q=80",
    tags: ["Smoky", "Charcoal Grill", "Arabian Spices"]
  },
  {
    id: "mandi-mix-dawat",
    name: "Banjaraa Grand Mix Feast Mandi",
    category: "mandi",
    veg: false,
    rating: 5.0,
    reviews: 510,
    badge: "Ultimate Experience",
    description: "The supreme feast platter! Loaded with tender Mutton shank, juicy Chicken, charcoal grilled Al Fahm, BBQ shashlik skewers, and boiled eggs over a mountain of aromatic saffron rice with unlimited Marak soup.",
    portions: [
      { size: "Double Platter", serves: "2-3 Persons", price: 849, weight: "1200g" },
      { size: "Grand 4-Person Dawat", serves: "4-5 Persons", price: 1599, weight: "2400g" },
      { size: "Maharaja Royal Thal (6-8 P)", serves: "6-8 Persons", price: 2399, weight: "3600g" }
    ],
    price: 849,
    spiceLevel: "Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=800&auto=format&fit=crop&q=80",
    tags: ["Mix Meat", "Platter", "Celebration"]
  },
  {
    id: "mandi-veg-zafrani",
    name: "Zafrani Paneer & Malai Mandi",
    category: "mandi",
    veg: true,
    rating: 4.7,
    reviews: 195,
    badge: "Vegetarian Delight",
    description: "Charcoal-roasted cottage cheese cubes, grilled baby corn, stuffed mushrooms, and cashew nuts served over slow-dum fragrant vegetable saffron rice with mint dakoos and herb mayo.",
    portions: [
      { size: "Single", serves: "1-2 Persons", price: 299, weight: "450g" },
      { size: "Full Platter", serves: "2-3 Persons", price: 549, weight: "900g" },
      { size: "Grand Thal", serves: "4-5 Persons", price: 999, weight: "1700g" }
    ],
    price: 299,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=800&auto=format&fit=crop&q=80",
    tags: ["Pure Veg", "Paneer Tikka", "Saffron Rice"]
  },

  // --- KEBABS & STARTERS ---
  {
    id: "kebab-mutton-galouti",
    name: "Awadhi Mutton Galouti Kebab (4 pcs)",
    category: "kebabs",
    veg: false,
    rating: 4.9,
    reviews: 340,
    badge: "Legendary",
    description: "Mouth-melting minced lamb patties enriched with raw papaya, roasted potli masala, and pure ghee. Served on mini coin parathas with spiced mint chutney and pickled laccha onions.",
    price: 389,
    spiceLevel: "Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=800&auto=format&fit=crop&q=80",
    tags: ["Melt-in-mouth", "Awadhi", "Ghee Roasted"]
  },
  {
    id: "kebab-cheese-kebab",
    name: "Royal Banjara Cheese Kebab (6 pcs)",
    category: "kebabs",
    veg: false,
    rating: 4.8,
    reviews: 280,
    badge: "Signature Starter",
    description: "Creamy minced chicken rolled with molten mozzarella and cheddar core, delicately flavored with cardamom and mace, flash-roasted in the tandoor until bubbling and golden.",
    price: 349,
    spiceLevel: "Mild",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
    tags: ["Cheesy", "Tandoor", "Kid Friendly"]
  },
  {
    id: "kebab-gulabo-tandoori",
    name: "Gulabo Tandoori Chicken (Half / Full)",
    category: "kebabs",
    veg: false,
    rating: 4.9,
    reviews: 310,
    badge: "House Specialty",
    description: "Banjaraa's signature vibrant ruby-red tandoori chicken kissed with beetroot essence, Kashmiri chilies, hung curd, and roasted mustard oil. Crisped in flaming charcoal clay ovens.",
    price: 299,
    spiceLevel: "Spicy",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=800&auto=format&fit=crop&q=80",
    tags: ["Gulabo Special", "Crispy Skin", "Charcoal Aroma"]
  },
  {
    id: "kebab-chicken-shashlik",
    name: "Barbeque Chicken Shashlik Sticks",
    category: "kebabs",
    veg: false,
    rating: 4.7,
    reviews: 215,
    badge: "Skewers",
    description: "Tender boneless chicken cubes skewered with bell peppers, sweet red onions, and tomatoes, glazed with in-house tangy BBQ glaze and toasted sesame.",
    price: 319,
    spiceLevel: "Medium",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=80",
    tags: ["Skewered", "BBQ Glaze", "Grilled Veggies"]
  },
  {
    id: "kebab-paneer-angara",
    name: "Paneer Tikka Angara",
    category: "kebabs",
    veg: true,
    rating: 4.6,
    reviews: 180,
    badge: "Veg Favorite",
    description: "Thick blocks of fresh Malai Paneer infused with crushed red chili, crushed coriander seeds, and smoked cloves in a sealed tandoor pot.",
    price: 279,
    spiceLevel: "Spicy",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=800&auto=format&fit=crop&q=80",
    tags: ["Smoky Paneer", "Tandoori", "Spicy"]
  },

  // --- ROYAL CURRIES ---
  {
    id: "curry-nawabi-murgh",
    name: "Nawabi Murgh Korma",
    category: "curries",
    veg: false,
    rating: 4.9,
    reviews: 390,
    badge: "Royal Mughlai",
    description: "Chicken braised in a luxurious, silky white gravy of poppy seeds, melon seeds, cashew paste, and saffron finished with aromatic kewra water and silver leaf garnish.",
    price: 369,
    spiceLevel: "Mild-Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&auto=format&fit=crop&q=80",
    tags: ["Mughlai", "White Korma", "Rich & Nutty"]
  },
  {
    id: "curry-banjara-handi-gosht",
    name: "Banjara Special Handi Gosht",
    category: "curries",
    veg: false,
    rating: 4.8,
    reviews: 310,
    badge: "Claypot Cooked",
    description: "Slow-simmered tender mutton curry prepared in unglazed earthen clay pots over gentle smoldering coals. Deep rustic flavors with whole hand-pounded masalas.",
    price: 439,
    spiceLevel: "Spicy",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=800&auto=format&fit=crop&q=80",
    tags: ["Handi Gosht", "Earthen Clay", "Spiced Gravy"]
  },
  {
    id: "curry-butter-chicken-dum",
    name: "Old Delhi Butter Chicken Dum Pukht",
    category: "curries",
    veg: false,
    rating: 4.8,
    reviews: 450,
    badge: "Crowd Favorite",
    description: "Tandoori chicken shredded and tossed in a velvet satin tomato butter gravy with kasuri methi, honeycomb drizzle, and fresh farm cream.",
    price: 359,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=800&auto=format&fit=crop&q=80",
    tags: ["Velvet Gravy", "Butter & Cream", "Classic"]
  },
  {
    id: "curry-dal-bukhara",
    name: "Bukhara Dal Makhani (24-hr Slow Simmer)",
    category: "curries",
    veg: true,
    rating: 4.9,
    reviews: 260,
    badge: "Pure Ghee",
    description: "Whole black urad lentils slow-cooked over wood ash embers for 24 continuous hours, finished with churned white butter, cream, and roasted fenugreek leaves.",
    price: 269,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&auto=format&fit=crop&q=80",
    tags: ["24hr Simmer", "Creamy Dal", "Comfort Food"]
  },
  {
    id: "curry-paneer-lababdar",
    name: "Shahi Paneer Lababdar",
    category: "curries",
    veg: true,
    rating: 4.7,
    reviews: 210,
    badge: "Vegetarian Special",
    description: "Cottage cheese chunks and grated paneer simmered in an onion-tomato masala enriched with crushed cashew nut paste and bell peppers.",
    price: 299,
    spiceLevel: "Medium",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop&q=80",
    tags: ["Rich Gravy", "Paneer", "Mughlai"]
  },

  // --- DUM BIRYANI ---
  {
    id: "biryani-banjara-dum-chicken",
    name: "Banjaraa Handi Chicken Dum Biryani",
    category: "biryani",
    veg: false,
    rating: 4.9,
    reviews: 620,
    badge: "Dum Pukht",
    description: "Long-grain aged basmati rice cooked on sealed purdah (dough seal) with tender spiced chicken, brown onions, saffron milk, and fresh mint leaves. Served with Mirchi Ka Salan and Burani Raita.",
    price: 329,
    spiceLevel: "Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&auto=format&fit=crop&q=80",
    tags: ["Dough Sealed", "Saffron Basmati", "Includes Raita"]
  },
  {
    id: "biryani-awadhi-gosht",
    name: "Awadhi Gosht Mutton Biryani",
    category: "biryani",
    veg: false,
    rating: 4.9,
    reviews: 480,
    badge: "Royal Recipe",
    description: "Fragrant rice layered with tender mutton marinated in Awadhi yakhni stock, finished with drops of pure ittar, kewra water, and fried dry fruits.",
    price: 449,
    spiceLevel: "Medium",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop&q=80",
    tags: ["Yakhni Biryani", "Awadhi Ittar", "Tender Mutton"]
  },

  // --- BREADS ---
  {
    id: "bread-garlic-butter-naan",
    name: "Smoked Garlic Butter Naan",
    category: "breads",
    veg: true,
    rating: 4.8,
    reviews: 320,
    badge: "Crispy & Soft",
    description: "Refined flour dough slapped against the inner clay tandoor wall, brushed lavishly with roasted garlic flakes, coriander, and golden butter.",
    price: 69,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=800&auto=format&fit=crop&q=80",
    tags: ["Clay Tandoor", "Garlic Butter", "Freshly Baked"]
  },
  {
    id: "bread-rumali-roti",
    name: "Ulte Tawe Ki Rumali Roti",
    category: "breads",
    veg: true,
    rating: 4.6,
    reviews: 180,
    badge: "Paper Thin",
    description: "Handkerchief-thin delicate wheat bread tossed in the air and baked on the inverted iron kadai. Perfect for wrapping around Galouti kebabs.",
    price: 49,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop&q=80",
    tags: ["Paper Thin", "Awadhi Tradition"]
  },
  {
    id: "bread-khameeri-roti",
    name: "Old Delhi Khameeri Roti",
    category: "breads",
    veg: true,
    rating: 4.7,
    reviews: 140,
    badge: "Traditional",
    description: "Naturally fermented fluffy bread with a golden tandoor blister crust and pillowy soft interior.",
    price: 59,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop&q=80",
    tags: ["Yeast Fermented", "Soft Bread"]
  },

  // --- BEVERAGES & SHARBAT ---
  {
    id: "drink-mohabbat-sharbat",
    name: "Mohabbat Ka Sharbat (Old Delhi Style)",
    category: "beverages",
    veg: true,
    rating: 4.9,
    reviews: 410,
    badge: "Iconic Cooler",
    description: "Chilled rose milk loaded with crushed watermelon rubies, chia seeds, kewra essence, and vanilla cream foam. The ultimate refreshment alongside spicy Mandi.",
    price: 129,
    spiceLevel: "None",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=800&auto=format&fit=crop&q=80",
    tags: ["Watermelon", "Rose Milk", "Chilled"]
  },
  {
    id: "drink-royal-roohafza-mojito",
    name: "Royal Banjara Roohafza Mojito",
    category: "beverages",
    veg: true,
    rating: 4.7,
    reviews: 230,
    badge: "Refreshing",
    description: "Sparkling soda muddled with fresh garden mint, Persian rose syrup, lime juice, rock salt, and crushed ice.",
    price: 119,
    spiceLevel: "None",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&auto=format&fit=crop&q=80",
    tags: ["Mint & Lime", "Sparkling", "Fizzy"]
  },
  {
    id: "drink-masala-chaas",
    name: "Smoked Jeera Buttermilk (Matka Chaas)",
    category: "beverages",
    veg: true,
    rating: 4.8,
    reviews: 190,
    badge: "Digestive Aid",
    description: "Churned spiced curd with roasted cumin seeds, black salt, fresh ginger, green chilies, and smoked coal infusion served in a chilled earthen kulhad.",
    price: 89,
    spiceLevel: "Mild",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=800&auto=format&fit=crop&q=80",
    tags: ["Earthen Kulhad", "Smoked Cumin", "Healthy"]
  },

  // --- SHAHI DESSERTS ---
  {
    id: "dessert-gulabo-special",
    name: "Gulabo Special Shahi Platter",
    category: "desserts",
    veg: true,
    rating: 5.0,
    reviews: 390,
    badge: "Chef Signature",
    description: "Banjaraa's exclusive sweet tribute: Rose-infused warm Angoori gulab jamuns nestled over chilled saffron-pistachio Rabri, sprinkled with 24k edible gold leaf and rose petals.",
    price: 189,
    spiceLevel: "Sweet",
    chefSpecial: true,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=800&auto=format&fit=crop&q=80",
    tags: ["Gold Leaf", "Hot & Cold", "House Creation"]
  },
  {
    id: "dessert-shahi-tukda",
    name: "Awadhi Shahi Tukda with Malai",
    category: "desserts",
    veg: true,
    rating: 4.8,
    reviews: 270,
    badge: "Heritage Sweet",
    description: "Crispy ghee-fried bread triangles soaked in saffron-cardamom sugar syrup, smothered with slow-thickened almond Rabri and silver vark.",
    price: 159,
    spiceLevel: "Sweet",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&auto=format&fit=crop&q=80",
    tags: ["Pure Ghee", "Saffron Syrup", "Awadhi"]
  },
  {
    id: "dessert-matka-phirni",
    name: "Zafrani Matka Phirni (Clay Cup)",
    category: "desserts",
    veg: true,
    rating: 4.9,
    reviews: 320,
    badge: "Earthen Fragrance",
    description: "Slow-cooked ground basmati rice pudding infused with saffron, green cardamom, and condensed milk, chilled in traditional unglazed terracotta cups.",
    price: 139,
    spiceLevel: "Sweet",
    chefSpecial: false,
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=800&auto=format&fit=crop&q=80",
    tags: ["Terracotta Cup", "Chilled", "Pistachio Garnish"]
  }
];

// Options for Interactive Mandi Feast Builder
export const MANDI_BUILDER_OPTIONS = {
  sizes: [
    { id: "platter-2", label: "Dawat for 2", serves: "2 Persons", basePrice: 599, desc: "Generous serving of fragrant rice with 2 portions of protein" },
    { id: "platter-4", label: "Grand Royal Thal", serves: "4-5 Persons", basePrice: 1199, desc: "Huge brass thal with 4 portions of protein & unlimited marak", popular: true },
    { id: "platter-6", label: "Sultan's Feast (6-8 P)", serves: "6-8 Persons", basePrice: 1899, desc: "Massive feast for family celebrations with all signature meats" }
  ],
  riceBases: [
    { id: "zafrani-mandi", name: "Zafrani Mandi Rice", price: 0, desc: "Pit-steamed basmati rice perfumed with pure saffron, cloves & black cardamom" },
    { id: "kabsa-rice", name: "Arabian Spiced Kabsa Rice", price: 50, desc: "Rich tomato and dry lemon (loomi) infused Arabian long-grain rice" },
    { id: "bukhari-rice", name: "Bukhari Nutty Rice", price: 80, desc: "Sweet & savory rice studded with caramelized carrots, black currants, and almonds" }
  ],
  proteins: [
    { id: "juicy-chicken", name: "Juicy Steamed Chicken (Pit Style)", pricePerPiece: 120, defaultQty: 2, icon: "Drumstick" },
    { id: "mutton-shank", name: "Tender Mutton Shank (Fall-off-bone)", pricePerPiece: 240, defaultQty: 1, icon: "Bone" },
    { id: "alfahm-chicken", name: "Charcoal Al Fahm Quarter", pricePerPiece: 140, defaultQty: 1, icon: "Flame" },
    { id: "galouti-kebab", name: "Mutton Galouti Patties (2 pcs)", pricePerPiece: 180, defaultQty: 0, icon: "CircleDot" },
    { id: "paneer-angara", name: "Smoky Paneer Tikka (4 pcs)", pricePerPiece: 110, defaultQty: 0, icon: "Box" }
  ],
  dips: [
    { id: "garlic-toum", name: "Creamy Garlic Toum Dip", included: true },
    { id: "tomato-dakoos", name: "Spicy Arabic Tomato Dakoos", included: true },
    { id: "marak-soup", name: "Steaming Bone Marak Broth", included: true },
    { id: "onion-salad", name: "Pickled Sumac Onion Salad", included: true }
  ],
  toppings: [
    { id: "fried-nuts", name: "Extra Fried Cashews & Golden Raisins", price: 60 },
    { id: "boiled-eggs", name: "Spiced Boiled Farm Eggs (2 pcs)", price: 40 },
    { id: "crispy-onions", name: "Caramelized Crispy Birista Onions", price: 35 },
    { id: "extra-garlic-dip", name: "Double Garlic Toum Jar (100ml)", price: 45 }
  ]
};
