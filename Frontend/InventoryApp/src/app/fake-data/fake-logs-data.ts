import { ILogItem } from '../core/models/ILogItem';
import { ProductsActions } from '../core/enums/product-actions.enum';

const fakeLogs: ILogItem[] = [
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 15,
    categoryId: //'52db8234-5fc3-4f91-b93a-a89e067a396a',
    '59b44c644a9f14001868d2f2',
    productId: '59b44c644a9f14001868d2ce'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 16, 2014"),
    action: ProductsActions.Remove,
    count: 2,
    categoryId: //'52db8234-5fc3-4f91-b93a-a89e067a396a',
    '59b44c644a9f14001868d2f2',
    productId: '59b44c644a9f14001868d2ce'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 18, 2014"),
    action: ProductsActions.Add,
    count: 5,
    categoryId: //'52db8234-5fc3-4f91-b93a-a89e067a396a',
    '59b44c644a9f14001868d2f2',
    productId: '59b44c644a9f14001868d2ce'
  },
  {
    id: Math.random().toString(),
    date: new Date("September 25, 2015"),
    action: ProductsActions.Add,
    count: 7,
    categoryId: //'52db8234-5fc3-4f91-b93a-a89e067a396a',
    '59b44c644a9f14001868d2f2',
    productId: '59b44c644a9f14001868d2d0'
  },
  {
    id: Math.random().toString(),
    date: new Date("November 11, 2015"),
    action: ProductsActions.Remove,
    count: 25,
    categoryId: //'a22ff738-c748-43a2-88e5-b838f43f5445',
    '59b44c644a9f14001868d2f2',
    productId: '59b44c644a9f14001868d2d0'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 13, 2014"),
    action: ProductsActions.Remove,
    count: 40,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d3'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 50,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d3'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Remove,
    count: 15,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d3'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 20, 2017"),
    action: ProductsActions.Add,
    count: 10,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d6'
  },
  {
    id: Math.random().toString(),
    date: new Date("June 20, 2017"),
    action: ProductsActions.Add,
    count: 100,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d5'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Remove,
    count: 15,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d5'
  },
  {
    id: Math.random().toString(),
    date: new Date("October 13, 2014"),
    action: ProductsActions.Add,
    count: 15,
    categoryId: //'96b5d872-e0c4-4548-8f2e-aea090c33ac3',
    '59b44c644a9f14001868d2f3',
    productId: '59b44c644a9f14001868d2d5'
  },
]

export default fakeLogs;
