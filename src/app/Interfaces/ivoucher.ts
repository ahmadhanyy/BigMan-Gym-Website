export interface IVoucher {
  id: number;
  documentId: string;
  userId: number;
  code: string;
  value: number;
  expiryDate: Date;
  isUsed: boolean;
  usageDate?: Date;
  usageOrderId?: number;
}
