// Restaurant Brand & Location Information for Banjaraa - Ek Anokhi Dawat
export const RESTAURANT_INFO = {
  name: "Banjaraa",
  tagline: "Ek Anokhi Dawat",
  fullName: "Banjaraa - Ek Anokhi Dawat",
  odiaName: "ବଞ୍ଜାରା - ଏକ ଅନୋଖୀ ଦାୱତ",
  established: "2023",
  rating: 4.8,
  reviewCount: "1,450+",
  phone: "+91 93372 05169",
  whatsapp: "919337205169",
  email: "contact@banjaraadawat.com",
  address: {
    line1: "Plot No. 1051/2758, Meherpalli",
    line2: "Cuttack - Puri Bypass Road, B.B. Nagar",
    city: "Bhubaneswar",
    state: "Odisha",
    pincode: "751002",
    landmark: "Near B.B. Nagar, Cuttack-Puri Bypass Expressway",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119767.24584282362!2d85.76722883441584!3d20.29605872886737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909e46f6634ad%3A0x18bc369f1f75f38f!2sBanjaraa%20-%20ek%20anokhi%20dawat!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  operatingHours: {
    days: "Monday - Sunday (All 7 Days)",
    lunch: "11:30 AM - 04:00 PM",
    dinner: "06:30 PM - 11:30 PM",
    display: "11:30 AM – 11:30 PM",
    isOpenNow: true // Dynamic helper in app
  },
  highlights: [
    { title: "Pit-Smoked Mandi", desc: "Authentic Yemeni spices slow-cooked over wood fire pits" },
    { title: "Traditional Majlis", desc: "Luxurious floor seating with Arabian rugs and royal diwans" },
    { title: "Charcoal Awadhi Kebabs", desc: "Melt-in-mouth Galouti & flaming tandoor skewers" },
    { title: "Family & Feast Friendly", desc: "Signature 4 to 6-person grand dawat sharing platters" }
  ],
  services: [
    "Dine-in (Majlis & Table)",
    "Express Takeaway",
    "Doorstep Delivery across Bhubaneswar",
    "Catering & Private Dawat Hall"
  ],
  deliveryZones: [
    { area: "Cuttack-Puri Bypass (Immediate)", fee: 0, minOrder: 300, time: "25-35 mins" },
    { area: "Rasulgarh & Bomikhal", fee: 29, minOrder: 350, time: "30-40 mins" },
    { area: "Saheed Nagar & Vani Vihar", fee: 39, minOrder: 400, time: "35-45 mins" },
    { area: "Kalpana & Old Town", fee: 39, minOrder: 400, time: "35-45 mins" },
    { area: "Nayapalli & Jayadev Vihar", fee: 49, minOrder: 500, time: "40-50 mins" },
    { area: "Patia & KIIT Square", fee: 69, minOrder: 600, time: "45-60 mins" },
    { area: "Khandagiri & Baramunda", fee: 59, minOrder: 500, time: "40-55 mins" }
  ],
  seatingTypes: [
    {
      id: "majlis",
      name: "Traditional Arabian Majlis",
      desc: "Authentic low-table carpeted floor seating with plush velvet bolsters. Perfect for Mandi platters.",
      capacity: "4 - 8 Persons per booth",
      badge: "Most Popular Experience",
      icon: "Sparkles"
    },
    {
      id: "diwan",
      name: "Royal Family Diwan",
      desc: "Spacious private dining enclosures with royal Mughal arch decor and upholstered sofas.",
      capacity: "6 - 12 Persons",
      badge: "Family Favorite",
      icon: "Users"
    },
    {
      id: "executive",
      name: "Executive & Couple Lounge",
      desc: "Intimate contemporary fine-dining tables with ambient lantern lighting.",
      capacity: "2 - 4 Persons",
      badge: "Cozy & Quiet",
      icon: "Heart"
    },
    {
      id: "banquet",
      name: "Shahi Banquet Hall",
      desc: "Grand hall for celebrations, corporate feasts, birthday parties & get-togethers.",
      capacity: "20 - 60 Persons",
      badge: "Events & Gatherings",
      icon: "Crown"
    }
  ]
};
