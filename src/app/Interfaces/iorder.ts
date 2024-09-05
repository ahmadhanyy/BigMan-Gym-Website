import { ICartItem } from "./icart-item";
import { IUser } from "./iuser";

export interface IOrder {
  id: number;
  user: IUser;
  orderDate: string;
  items: ICartItem[];
  totalPrice: number;
  status: string;
  deliveryDate: string;
}
