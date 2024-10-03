export interface INewReview {
  userId: number;
  coachId?: number;
  prodId?: number;
  review?: string;
  date: Date;
  rating: number
}
