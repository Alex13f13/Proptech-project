export interface ICompetitor {
  id: number;
  bathrooms: number;
  rooms: number;
  area: number;
  property_type: number;
  price: number;
  images: string[];
  location: {
    address: string;
    latitude: number;
    longitude: number;
  }
}
