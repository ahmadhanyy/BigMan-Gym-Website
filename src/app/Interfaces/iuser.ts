import { IProduct } from "./iproduct";

export interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  phone: string;
  address: {
    buildingNo: string;
    street: string;
    city: string;
    moreInfo?: string;
  };
}
