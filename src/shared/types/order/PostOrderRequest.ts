import Dish from "../dish/Dish";

export default interface PostOrderRequest {
  price: number;
  userId: number;
  city: string;
  street: string;
  buildingNumber: string;
  postalCode: string;
  dishes: Dish[];
  status: "CREATED";
}
