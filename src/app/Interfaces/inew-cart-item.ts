import { IProduct } from "./iproduct";

export interface INewCartItem {
  userId: number;
  product: IProduct;
  count: number;
  color?: string;
  size?: string;
}
