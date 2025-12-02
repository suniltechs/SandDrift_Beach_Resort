export interface Room {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  features: string[];
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Stats {
  label: string;
  value: number;
  suffix: string;
}

export interface NavItem {
  label: string;
  href: string;
}