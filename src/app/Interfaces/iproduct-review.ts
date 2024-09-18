export interface IProductReview {
  id?: number;
  userId: number;
  productId: number;
  review?: string;
  date: {day: number, month: number, year: number};
  rating: number
}
