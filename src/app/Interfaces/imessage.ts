export interface IMessage {
  id: number;
  documentId: string;
  userId: number;
  title: string;
  message: string;
  date: Date;
  productId?: number;
  coachId?: number;
}
