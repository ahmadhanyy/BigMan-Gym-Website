import { IProduct } from "./iproduct";

export interface IWishlistItem {
  id: number;
  documentId: string;
  userId: number;
  product: IProduct;
}
