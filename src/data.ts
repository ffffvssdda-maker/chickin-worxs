import { MenuItem, Location } from './types';
import loadedFriesImg from './assets/images/loaded_chicken_fries_1780167354666.png';
import vanillaIceCreamImg from './assets/images/vanilla_ice_cream_1780168716992.png';

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: "The Signature Chickin' Classic",
    nameAr: "تشيكن كلاسيك سيجنتشر",
    description: "Crispy hand-breaded chicken breast, pickles, and our secret Worx sauce on a toasted brioche bun.",
    descriptionAr: "صدر دجاج مقرمش مخبوز يدويًا، مخلل، وصلصة وركس السرية على خبز بريوش محمص.",
    price: 450,
    calories: 650,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    category: "Sandwiches",
    categoryAr: "سندوتشات",
    popular: true
  },
  {
    id: '2',
    name: "Spicy Volcano Sandwich",
    nameAr: "ساندوتش فولكانو الحار",
    description: "Our signature chicken dusted with ghost pepper spice, spicy mayo, jalapeños, and pepper jack cheese.",
    descriptionAr: "الدجاج المميز الخاص بنا المغطى بتوابل فلفل الأشباح، مايونيز حار، هالبينو، وجبن بيبر جاك.",
    price: 475,
    calories: 710,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2787&auto=format&fit=crop",
    category: "Sandwiches",
    categoryAr: "سندوتشات",
    popular: true
  },
  {
    id: '3',
    name: "Golden Tenders (5pc)",
    nameAr: "تندرز ذهبية (5 قطع)",
    description: "Hand-battered, thick-cut chicken tenders served with your choice of two dipping sauces.",
    descriptionAr: "قطع دجاج سميكة مقلية يدويًا، تُقدم مع اختيارك من صلصتين للتغميس.",
    price: 550,
    calories: 850,
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=2946&auto=format&fit=crop",
    category: "Tenders",
    categoryAr: "تندرز"
  },
  {
    id: '4',
    name: "Loaded Chickin' Fries",
    nameAr: "بطاطس تشيكن محملة",
    description: "Crispy waffle fries topped with chopped tenders, melted cheese, green onions, and Worx sauce.",
    descriptionAr: "وافل فرايز مقرمشة مغطاة بقطع الدجاج، جبن ذائب، بصل أخضر وصلصة وركس.",
    price: 400,
    calories: 980,
    image: loadedFriesImg,
    category: "Sides",
    categoryAr: "أطباق جانبية",
    popular: true
  },
  {
    id: '5',
    name: "Classic Waffle Fries",
    nameAr: "بطاطس وافل كلاسيك",
    description: "Perfectly seasoned, crispy outside, fluffy inside.",
    descriptionAr: "متبلة بشكل مثالي، مقرمشة من الخارج، هشة من الداخل.",
    price: 175,
    calories: 420,
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=2940&auto=format&fit=crop",
    category: "Sides",
    categoryAr: "أطباق جانبية"
  },
  {
    id: '6',
    name: "Family Feast Box",
    nameAr: "بوكس التوفير العائلي",
    description: "12 pieces of chicken (mixed), 3 large sides, 6 honey-butter biscuits.",
    descriptionAr: "١٢ قطعة دجاج (مشكلة)، ٣ أطباق جانبية كبيرة، ٦ قطع بسكويت بالعسل والزبدة.",
    price: 1750,
    calories: 4500,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=2813&auto=format&fit=crop",
    category: "Family Meals",
    categoryAr: "وجبات عائلية"
  },
  {
    id: '7',
    name: "The Buffalo Sando Big",
    nameAr: "ذا بافلو ساندو بيج",
    description: "Spicy buffalo sauce dipped crispy chicken, ranch, pickles, on a toasted bun.",
    descriptionAr: "دجاج مقرمش مغموس بصلصة البافلو الحارة، رانش، مخلل، في خبز محمص.",
    price: 320,
    calories: 780,
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=2940&auto=format&fit=crop",
    category: "Sandwiches",
    categoryAr: "سندوتشات",
    popular: true
  },
  {
    id: '8',
    name: "Honeydream Sandwich",
    nameAr: "ساندوتش هوني دريم",
    description: "Sweet and savory honey glaze with our crispy chicken breast, lettuce, and mayo.",
    descriptionAr: "صدر دجاج مقرمش مع صلصة العسل الحلوة والمالحة، خس ومايونيز.",
    price: 290,
    calories: 720,
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=2787&auto=format&fit=crop",
    category: "Sandwiches",
    categoryAr: "سندوتشات"
  },
  {
    id: '9',
    name: "Vanilla Ice Cream",
    nameAr: "أيس كريم فانيليا",
    description: "Creamy classic vanilla soft serve ice cream cone.",
    descriptionAr: "مخروط أيس كريم فانيليا كلاسيكي وغني بالكريمة.",
    price: 60,
    calories: 250,
    image: vanillaIceCreamImg,
    category: "Desserts",
    categoryAr: "حلويات",
    popular: true
  },
  {
    id: '10',
    name: "Cazo Cola",
    nameAr: "كازو كولا",
    description: "Refreshing cold draft cola.",
    descriptionAr: "كولا منعشة باردة من الصنبور.",
    price: 45,
    calories: 150,
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=2862&auto=format&fit=crop",
    category: "Drinks",
    categoryAr: "مشروبات"
  }
];

export const locations: Location[] = [
  {
    id: '1',
    name: "Swell Lake - Zayed",
    nameAr: "سويل ليك - زايد",
    address: "Waslet Dahshur Rd, Next to National Teams Center",
    addressAr: "وصلة دهشور، بجوار مركز المنتخبات الوطنية",
    city: "Giza (First 6th of October)",
    cityAr: "الجيزة (٦ أكتوبر)",
    state: "Giza Governorate",
    stateAr: "محافظة الجيزة",
    zip: "12566",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.0074, lng: 30.9736 }
  },
  {
    id: '2',
    name: "Park Way Mall - 6th of October",
    nameAr: "بارك واي مول - ٦ أكتوبر",
    address: "Park Way Mall, July 26 Axis, First 6th of October",
    addressAr: "بارك واي مول، محور ٢٦ يوليو، السادس من أكتوبر",
    city: "Giza",
    cityAr: "الجيزة",
    state: "Giza Governorate",
    stateAr: "محافظة الجيزة",
    zip: "12573",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.0125, lng: 30.9856 }
  },
  {
    id: '3',
    name: "Al Hay Al Asher - Nasr City",
    nameAr: "الحي العاشر - مدينة نصر",
    address: "Al Hay Al Asher, Nasr City",
    addressAr: "الحي العاشر، التجمع، مدينة نصر",
    city: "Cairo",
    cityAr: "القاهرة",
    state: "Cairo Governorate",
    stateAr: "محافظة القاهرة",
    zip: "11311",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.052, lng: 31.353 }
  },
  {
    id: '4',
    name: "Chillout - New Cairo",
    nameAr: "تشيل أوت - القاهرة الجديدة",
    address: "Chillout Station, Al Sadat Axis, New Cairo 1",
    addressAr: "محطة تشيل أوت، محور السادات، القاهرة الجديدة",
    city: "Cairo",
    cityAr: "القاهرة",
    state: "Cairo Governorate",
    stateAr: "محافظة القاهرة",
    zip: "11835",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.038, lng: 31.472 }
  },
  {
    id: '5',
    name: "Abu Dawood El Zahiry - Nasr City",
    nameAr: "أبو داود الظاهري - مدينة نصر",
    address: "Abu Dawood El Zahiry St, Nasr City",
    addressAr: "شارع أبو داود الظاهري، مدينة نصر",
    city: "Cairo",
    cityAr: "القاهرة",
    state: "Cairo Governorate",
    stateAr: "محافظة القاهرة",
    zip: "11765",
    phone: "010 10351999",
    hours: "10:00 AM - 2:00 AM",
    coordinates: { lat: 30.061, lng: 31.341 }
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
