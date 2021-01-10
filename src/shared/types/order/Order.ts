import Dish from "../dish/Dish";

export type OrderStatus = "CREATED" | "DURING" | "DONE";

export interface Order {
  id: number;
  price: number;
  userId: number;
  city: string;
  street: string;
  buildingNumber: string;
  postalCode: string;
  dishes: Dish[];
  status: OrderStatus;
}
