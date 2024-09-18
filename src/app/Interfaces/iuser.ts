export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
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
