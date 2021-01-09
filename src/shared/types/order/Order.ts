import Dish from "../dish/Dish";

export interface Order {
  id: number;
  price: number;
  userId: number;
  city: string;
  street: string;
  buildingNumber: string;
  postalCode: string;
  dishes: Dish[];
}
