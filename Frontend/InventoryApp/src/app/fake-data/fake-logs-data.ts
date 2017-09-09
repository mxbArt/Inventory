import { ILogItem } from '../core/models/ILogItem';
import { ProductsActions } from '../core/enums/product-actions.enum';

const fakeLogs: ILogItem[] = [
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 15,
    categoryId: '59b01de5d3505500180f14c0',
    productId: '1'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 16, 2014"),
    action: ProductsActions.Remove,
    count: 2,
    categoryId: '59b01de5d3505500180f14c0',
    productId: '2'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 18, 2014"),
    action: ProductsActions.Add,
    count: 5,
    categoryId: '59b01de5d3505500180f14c0',
    productId: '3'
  },
  {
    id: Math.random().toString(),
    date: new Date("September 25, 2015"),
    action: ProductsActions.Add,
    count: 7,
    categoryId: '59b01de5d3505500180f14c1',
    productId: '2'
  },
  {
    id: Math.random().toString(),
    date: new Date("November 11, 2015"),
    action: ProductsActions.Remove,
    count: 25,
    categoryId: '59b01de5d3505500180f14be',
    productId: '4'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 13, 2014"),
    action: ProductsActions.Remove,
    count: 40,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '1'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 50,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '1'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Remove,
    count: 15,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '1'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 20, 2017"),
    action: ProductsActions.Add,
    count: 10,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '4'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 20, 2017"),
    action: ProductsActions.Add,
    count: 100,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '3'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Remove,
    count: 15,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '2'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 15,
    categoryId: '59b01de5d3505500180f14bc',
    productId: '2'
  },
]

export default fakeLogs;
