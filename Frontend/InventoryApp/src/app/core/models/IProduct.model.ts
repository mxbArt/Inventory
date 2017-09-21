export interface IProduct {
  _id: string;
  name: string;
  count: number;
  description?: string;
  measurement?: string;
  lastUpdate: Date;
  imgPath: string;
}
