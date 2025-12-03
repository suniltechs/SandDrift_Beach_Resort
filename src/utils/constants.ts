import { 
  RiAwardFill, 
  RiMapPinFill, 
  RiShieldCheckFill,
  RiStarFill,
  RiRestaurantLine, 
  RiLeafLine,
  RiCupLine,
  RiShieldStarLine,
  Ri24HoursLine,
  RiWifiFill,
  RiRoadsterFill,
} from 'react-icons/ri';

export interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Booking', href: '#booking' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Services', href: '#service' },
  { label: 'Explore', href: '#explore' },
  { label: 'Contact', href: '#contact' },
];

export const roomTypes = [
  { id: 'standard', name: 'Standard Room', price: 2100 },
  { id: 'deluxe', name: 'Deluxe Suite', price: 2900 },
  { id: 'executive', name: 'Executive Suite', price: 3800 },
  { id: 'presidential', name: 'Presidential Suite', price: 5500 },
];

export const features = [
  {
    icon: RiMapPinFill,
    title: 'Prime Location',
    description: 'Minutes from Basilica & beach'
  },
  {
    icon: RiShieldCheckFill,
    title: 'Premium Security',
    description: '24/7 surveillance & safety'
  },
  {
    icon: RiStarFill,
    title: '5-Star Service',
    description: 'Personalized guest experience'
  },
  {
    icon: RiAwardFill,
    title: 'Award Winning',
    description: 'Recognized excellence in work'
  }
]

export const EXPLORE_CARDS = [
  {
    id: '1',
    title: 'New Gourmet Menu',
    category: 'Culinary',
    date: 'DEC 10, 2024',
    description: 'Experience our newly curated culinary delights crafted by master chefs with locally sourced ingredients',
    features: ['Seafood Special', 'Vegan Options', 'Local Cuisine', 'Dessert Bar'],
    icon: RiRestaurantLine,
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '2',
    title: 'Wellness Retreat',
    category: 'Wellness',
    date: 'JAN 15, 2025',
    description: 'Join our exclusive wellness program featuring yoga, meditation, and spa treatments',
    features: ['Morning Yoga', 'Meditation', 'Spa Packages', 'Nutrition'],
    icon: RiLeafLine,
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: '3',
    title: 'Mixology Workshop',
    category: 'Entertainment',
    date: 'JAN 22, 2025',
    description: 'Learn cocktail crafting from our expert mixologists in an interactive workshop',
    features: ['Cocktail Making', 'Wine Tasting', 'Expert Tips', 'Take-home Recipes'],
    icon: RiCupLine,
    color: 'from-amber-500/20 to-amber-600/20',
    iconColor: 'text-amber-500',
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1200&q=80'
  }
];

export const ROOM_TYPES = [
  { id: 'all', label: 'All Rooms' },
  { id: 'ocean', label: 'Ocean View' },
  { id: 'suite', label: 'Suites' },
  { id: 'family', label: 'Family' },
  { id: 'luxury', label: 'Luxury' }
];

export const rooms = [
  {
    id: '1',
    title: 'Ocean View Deluxe',
    description: 'Bask in luxury with breathtaking ocean views from your private balcony suite',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    features: ['Ocean View', 'Private Balcony', 'King Bed', '45 sqm'],
    type: 'ocean',
    rating: 4.9,
    reviews: 128
  },
  {
    id: '2',
    title: 'Executive Suite',
    description: 'Experience urban elegance and modern comfort with panoramic city views',
    price: 2427,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    features: ['City View', 'Separate Living', 'Work Desk', '60 sqm'],
    type: 'suite',
    rating: 4.8,
    reviews: 94
  },
  {
    id: '3',
    title: 'Family Garden Retreat',
    description: 'Spacious suite perfect for creating cherished memories with loved ones',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    features: ['Garden View', 'Two Bedrooms', 'Kitchenette', '75 sqm'],
    type: 'family',
    rating: 4.9,
    reviews: 156
  },
  {
    id: '4',
    title: 'Presidential Suite',
    description: 'Ultimate luxury experience with premium amenities and personal butler service',
    price: 5500,
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    features: ['Panoramic View', 'Private Jacuzzi', 'Butler Service', '120 sqm'],
    type: 'luxury',
    rating: 5.0,
    reviews: 67
  },
  {
    id: '5',
    title: 'Sea Breeze Junior Suite',
    description: 'Modern comfort with direct beach access and contemporary design',
    price: 1850,
    image: 'https://images.unsplash.com/photo-1561501900-3701fa6a0864?auto=format&fit=crop&w=800&q=80',
    features: ['Beach Access', 'Sea View', 'Queen Bed', '35 sqm'],
    type: 'ocean',
    rating: 4.7,
    reviews: 203
  },
  {
    id: '6',
    title: 'Tropical Garden Villa',
    description: 'Private villa surrounded by lush gardens with exclusive pool access',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
    features: ['Private Garden', 'Pool Access', 'Living Room', '90 sqm'],
    type: 'luxury',
    rating: 4.9,
    reviews: 89
  }
];

export const servicesData = [
  {
    id: "1",
    title: "High Class Security",
    icon: RiShieldStarLine,
    description:
      "Advanced surveillance systems and 24/7 security personnel ensuring your complete safety.",
    features: [
      "CCTV Monitoring",
      "Security Personnel",
      "Safe Deposit Boxes",
      "Emergency Response",
    ],
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500",
  },
  {
    id: "2",
    title: "24/7 Room Service",
    icon: Ri24HoursLine,
    description:
      "Round-the-clock dining and concierge service for ultimate convenience whenever you need it.",
    features: ["All-day Dining", "In-room Dining", "Concierge Service", "Quick Response"],
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500",
  },
  {
    id: "3",
    title: "High-Speed WiFi",
    icon: RiWifiFill,
    description:
      "Ultra-fast fiber optic internet connectivity available throughout the entire property.",
    features: ["Fiber Optic", "Multiple Devices", "Business Center", "Tech Support"],
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500",
  },
  {
    id: "4",
    title: "Valet Parking",
    icon: RiRoadsterFill,
    description:
      "Secure valet and self-parking facilities with EV charging stations for modern convenience.",
    features: ["Valet Service", "EV Charging", "Car Wash", "24/7 Access"],
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-500",
  },
];

export const services = [
  { value: "99%", label: "Guest Satisfaction" },
  { value: "24/7", label: "Service Availability" },
  { value: "<15min", label: "Average Response Time" },
  { value: "50+", label: "Service Categories" },
]


export const stats = [
  { label: 'Properties Available', value: 50, suffix: '+' },
  { label: 'Bookings Completed', value: 500, suffix: '+' },
  { label: 'Happy Customers', value: 1000, suffix: '+' },
];
