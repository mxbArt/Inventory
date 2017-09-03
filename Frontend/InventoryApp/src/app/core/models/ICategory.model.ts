import { IProduct } from './IProduct.model';

export interface ICategory {
  id: string;
  name: string;
  products: IProduct[];
  //imgPath: string;
}
