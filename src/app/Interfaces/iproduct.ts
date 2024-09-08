export interface IProduct {
  id: number;
  name: string;
  category: number;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string[];
  returnable: boolean;
  freeShipping: boolean;
  shippingPrice: shippingAmount;
  color?: string[];
  size?: string[];
  ratings?: number[];
  reviews?: string[];
  discountPrecent?: number;
  isFav: boolean;
}

export enum shippingAmount {
  low,
  high
}

