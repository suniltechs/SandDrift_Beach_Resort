// constants.ts

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

export const rooms: Room[] = [
  {
    id: '1',
    title: 'Deluxe Ocean View',
    description:
      'Bask in luxury with breathtaking ocean views from your private suite.',
    price: 2100,
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=80',
    features: ['Ocean View', 'Free WiFi', 'Air Conditioning'],
  },
  {
    id: '2',
    title: 'Executive Cityscape Room',
    description:
      'Experience urban elegance and modern comfort in the heart of the city.',
    price: 2427,
    image:
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80',
    features: ['City View', 'Work Desk', 'Mini Bar'],
  },
  {
    id: '3',
    title: 'Family Garden Retreat',
    description:
      'Spacious and inviting, perfect for creating cherished memories with loved ones.',
    price: 2900,
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    features: ['Garden View', 'Family Suite', 'Kitchenette'],
  },
];

export const services = [
  {
    id: '1',
    title: 'High Class Security',
    icon: 'RiShieldStarLine',
    color: 'text-blue-500 bg-blue-100',
  },
  {
    id: '2',
    title: '24 Hours Room Service',
    icon: 'Ri24HoursLine',
    color: 'text-pink-500 bg-pink-100',
  },
  {
    id: '3',
    title: 'Free WiFi In All Rooms',
    icon: 'RiWifiFill',
    color: 'text-purple-500 bg-purple-100',
  },
  {
    id: '4',
    title: 'Car Parking',
    icon: 'RiRoadsterFill',
    color: 'text-red-500 bg-red-100',
  },
];

export const stats = [
  { label: 'Properties Available', value: 50, suffix: '+' },
  { label: 'Bookings Completed', value: 500, suffix: '+' },
  { label: 'Happy Customers', value: 1000, suffix: '+' },
];
