export interface ICartItem {
  id: number;
  documentId: string;
  userId: number;
  prodId: number;
  count: number;
  color?: string;
  size?: string;
}
