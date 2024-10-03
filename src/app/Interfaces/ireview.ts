export interface IReview {
  id: number;
  documentId: string;
  userId: number;
  coachId?: number;
  prodId?: number;
  review?: string;
  date: Date;
  rating: number
}
