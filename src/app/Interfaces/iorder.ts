import { ICartItem } from "./icart-item";
import { IUser } from "./iuser";

export interface IOrder {
  id?: number;
  user: IUser;
  items: ICartItem[];
  totalPrice: number;
  orderDate: string;
  deliveryDate: string;
  status: string;
}
