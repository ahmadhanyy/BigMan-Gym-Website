export interface IProduct {
  id?: number;
  name: string;
  categoryId: number;
  price: number;
  quantity: number;
  description: string;
  imageUrl: string[];
  returnable: boolean;
  freeShipping: boolean;
  shippingPrice: shippingAmount;
  discountPrecent?: number;
  priceAfterDiscount?: number;
  isFav: boolean;
  color?: string[];
  size?: string[];
  material?: string;
  productionCountry: string;
  Fit?: string;
  brand: string;
}

export enum shippingAmount {
  low,
  high
}

