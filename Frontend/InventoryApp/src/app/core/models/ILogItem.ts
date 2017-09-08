import { ProductsActions } from '../enums/product-actions.enum';
import { IProduct } from './IProduct.model';

export interface ILogItem {
  id: string;
  date: Date;
  action: ProductsActions;
  count: number;
  categoryId: string;
  productId: string;
}
