import { IProduct } from './IProduct.model';

export interface ICategory {
  _id: string;
  name: string;
  products: IProduct[];
  imgPath?: string;
}
