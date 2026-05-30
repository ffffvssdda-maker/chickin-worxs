import { MenuItem, Location } from './types';
import loadedFriesImg from './assets/images/loaded_chicken_fries_1780167354666.png';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: "The Signature Chickin' Classic",
    description: "Crispy hand-breaded chicken breast, pickles, and our secret Worx sauce on a toasted brioche bun.",
    price: 450,
    calories: 650,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    category: "Sandwiches",
    popular: true
  },
  {
    id: '2',
    name: "Spicy Volcano Sandwich",
    description: "Our signature chicken dusted with ghost pepper spice, spicy mayo, jalapeños, and pepper jack cheese.",
    price: 475,
    calories: 710,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2787&auto=format&fit=crop",
    category: "Sandwiches",
    popular: true
  },
  {
    id: '3',
    name: "Golden Tenders (5pc)",
    description: "Hand-battered, thick-cut chicken tenders served with your choice of two dipping sauces.",
    price: 550,
    calories: 850,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2946&auto=format&fit=crop",
    category: "Tenders"
  },
  {
    id: '4',
    name: "Loaded Chickin' Fries",
    description: "Crispy waffle fries topped with chopped tenders, melted cheese, green onions, and Worx sauce.",
    price: 400,
    calories: 980,
    image: loadedFriesImg,
    category: "Sides",
    popular: true
  },
  {
    id: '5',
    name: "Classic Waffle Fries",
    description: "Perfectly seasoned, crispy outside, fluffy inside.",
    price: 175,
    calories: 420,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2940&auto=format&fit=crop",
    category: "Sides"
  },
  {
    id: '6',
    name: "Family Feast Box",
    description: "12 pieces of chicken (mixed), 3 large sides, 6 honey-butter biscuits.",
    price: 1750,
    calories: 4500,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2813&auto=format&fit=crop",
    category: "Family Meals"
  },
  {
    id: '7',
    name: "The Buffalo Sando Big",
    description: "Spicy buffalo sauce dipped crispy chicken, ranch, pickles, on a toasted bun.",
    price: 320,
    calories: 780,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    category: "Sandwiches",
    popular: true
  },
  {
    id: '8',
    name: "Honeydream Sandwich",
    description: "Sweet and savory honey glaze with our crispy chicken breast, lettuce, and mayo.",
    price: 290,
    calories: 720,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2787&auto=format&fit=crop",
    category: "Sandwiches"
  },
  {
    id: '9',
    name: "Vanilla Ice Cream",
    description: "Creamy classic vanilla soft serve ice cream cone.",
    price: 60,
    calories: 250,
    image: "https://images.unsplash.com/photo-1563805042-7684c8b9e408?q=80&w=2787&auto=format&fit=crop",
    category: "Desserts",
    popular: true
  },
  {
    id: '10',
    name: "Cazo Cola",
    description: "Refreshing cold draft cola.",
    price: 45,
    calories: 150,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2862&auto=format&fit=crop",
    category: "Drinks"
  }
];

export const locations: Location[] = [
  {
    id: '1',
    name: "Swell Lake - Zayed",
    address: "Waslet Dahshur Rd, Next to National Teams Center",
    city: "Giza (First 6th of October)",
    state: "Giza Governorate",
    zip: "12566",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.0074, lng: 30.9736 }
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
