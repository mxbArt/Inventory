import { IProduct } from './IProduct.model';
import { ICategory } from './ICategory.model';

export interface IUpdatedItems {
  updatedProducts: Array<IProduct>;
  updatedCategories: Array<ICategory>;
}
