export interface INewOrder {
  userId: number;
  orderDate: Date;
  deliveryDate?: Date;
  orderStatus: string;
}
