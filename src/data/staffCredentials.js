// Staff Credentials & Roles for Banjaraa - Ek Anokhi Dawat
export const STAFF_ACCOUNTS = [
  {
    role: "General Manager",
    badge: "Full Admin Access",
    username: "manager",
    email: "manager@banjaraadawat.com",
    password: "dawat2026",
    pin: "1130", // Quick 4-digit PIN (Banjaraa opening hour 11:30 AM)
    name: "Tariq Khan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    permissions: ["orders", "reservations", "menu_stock", "revenue"]
  },
  {
    role: "Head Chef / Kitchen Master",
    badge: "Pit & Tandoor Master",
    username: "chef",
    email: "chef@banjaraadawat.com",
    password: "mandi786",
    pin: "7860",
    name: "Ustad Nooruddin",
    avatar: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=120&auto=format&fit=crop&q=80",
    permissions: ["orders", "menu_stock"]
  },
  {
    role: "Front Desk & Majlis Host",
    badge: "Floor & Bookings",
    username: "host",
    email: "reception@banjaraadawat.com",
    password: "majlis123",
    pin: "2026",
    name: "Priyanka Sahoo",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    permissions: ["reservations"]
  }
];
