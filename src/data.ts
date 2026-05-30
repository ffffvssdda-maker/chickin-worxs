import { MenuItem, Location } from './types';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: "The Signature Chickin' Classic",
    description: "Crispy hand-breaded chicken breast, pickles, and our secret Worx sauce on a toasted brioche bun.",
    price: 8.99,
    calories: 650,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    category: "Sandwiches",
    popular: true
  },
  {
    id: '2',
    name: "Spicy Volcano Sandwich",
    description: "Our signature chicken dusted with ghost pepper spice, spicy mayo, jalapeños, and pepper jack cheese.",
    price: 9.49,
    calories: 710,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2787&auto=format&fit=crop",
    category: "Sandwiches",
    popular: true
  },
  {
    id: '3',
    name: "Golden Tenders (5pc)",
    description: "Hand-battered, thick-cut chicken tenders served with your choice of two dipping sauces.",
    price: 10.99,
    calories: 850,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2946&auto=format&fit=crop",
    category: "Tenders"
  },
  {
    id: '4',
    name: "Loaded Chickin' Fries",
    description: "Crispy waffle fries topped with chopped tenders, melted cheese, green onions, and Worx sauce.",
    price: 7.99,
    calories: 980,
    image: "https://images.unsplash.com/photo-1626229562768-450f3b497fba?q=80&w=2835&auto=format&fit=crop",
    category: "Sides",
    popular: true
  },
  {
    id: '5',
    name: "Classic Waffle Fries",
    description: "Perfectly seasoned, crispy outside, fluffy inside.",
    price: 3.49,
    calories: 420,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2940&auto=format&fit=crop",
    category: "Sides"
  },
  {
    id: '6',
    name: "Family Feast Box",
    description: "12 pieces of chicken (mixed), 3 large sides, 6 honey-butter biscuits.",
    price: 34.99,
    calories: 4500,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2813&auto=format&fit=crop",
    category: "Family Meals"
  }
];

export const locations: Location[] = [
  {
    id: '1',
    name: "Downtown Metro",
    address: "123 Main Street",
    city: "Metropolis",
    state: "NY",
    zip: "10001",
    phone: "(555) 123-4567",
    hours: "10:30 AM - 11:00 PM",
    coordinates: { lat: 40.7128, lng: -74.0060 }
  },
  {
    id: '2',
    name: "Westside Village",
    address: "450 West Ave",
    city: "Metropolis",
    state: "NY",
    zip: "10002",
    phone: "(555) 987-6543",
    hours: "10:30 AM - 10:00 PM",
    coordinates: { lat: 40.7328, lng: -74.0160 }
  }
];

export const categories = [
  "Sandwiches", 
  "Tenders", 
  "Wings", 
  "Family Meals", 
  "Sides", 
  "Drinks", 
  "Desserts"
];
