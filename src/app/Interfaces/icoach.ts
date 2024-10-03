export interface ICoach {
  id: number;
  documentId: string;
  name: string;
  salary: number;
  experiance: string;
  details: string;
  image: IImage;
  discountPrecent?: number;
  coach_times: ICoachTime[];
}

export interface IImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  url: string;
}

export interface IImage {
  id: number;
  name: string;
  url: string;
  formats: {
    thumbnail: IImageFormat;
  };
}

export interface ICoachTime {
  id: number;
  day: string;
  time: string;
}
