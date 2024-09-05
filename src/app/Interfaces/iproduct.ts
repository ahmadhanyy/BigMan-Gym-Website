export interface IProduct {
  id: number;
  name: string;
  category: number;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string;
  ratings?: number[];
  reviews?: string[];
  discountPrecent?: number;
}
