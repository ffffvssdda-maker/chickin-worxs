export interface MenuItem {
  id: string;
  name: string;
  nameAr?: string;
  description: string;
  descriptionAr?: string;
  price: number;
  calories: number;
  image: string;
  category: string;
  categoryAr?: string;
  popular?: boolean;
}

export interface Location {
  id: string;
  name: string;
  nameAr?: string;
  address: string;
  addressAr?: string;
  city: string;
  cityAr?: string;
  state: string;
  stateAr?: string;
  zip: string;
  phone: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}
