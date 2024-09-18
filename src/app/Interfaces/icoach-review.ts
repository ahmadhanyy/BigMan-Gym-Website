export interface ICoachReview {
  id?: number;
  userId: number;
  coachId: number;
  review?: string;
  date: {day: number, month: number, year: number};
  rating: number
}
