import { IProduct } from "./iproduct";

export interface ICartItem {
<<<<<<< Updated upstream
  product: IProduct;
  quantity: number;
=======
  id: number;
  documentId: string;
  userId: number;
  product: IProduct;
  count: number;
  color?: string;
  size?: string;
>>>>>>> Stashed changes
}
