import { ITimeSlot } from "./itime-slot";

export interface ICoach {
  id: number;
  name: string;
  salary: number;
  avilableTime?: ITimeSlot[];
  experiance: string;
  introduction: string;
  imageUrl: string;
  ratings?: number[];
  reviews?: string[];
  discountPrecent?: number;
}
