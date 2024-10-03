export interface IOrder {
  id: number;
  documentId: string;
  userId: number;
  orderDate: Date;
  deliveryDate?: Date;
  orderStatus: string;
}
