import { IProduct } from './IProduct.model';

export interface IStorage {
  id: string;
  imagePath: string;
  adress: string;
  products: Array<IProduct>;
}
