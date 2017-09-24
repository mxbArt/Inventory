import { ReduxActions } from './ReduxActions';
import { tassign } from 'tassign';
// Models
import { ICategory } from '../models/ICategory.model';
import { IWaybillItem } from '../models/IWaybillItem.model';

export interface IAppState {
  categories: ICategory[];
  waybill: IWaybillItem[];
}

export const INITIAL_STATE: IAppState = {
  categories: [],
  waybill: [
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2ce',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2cf',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '59b44c644a9f14001868d2f2',
      productId: '59b44c644a9f14001868d2d1',
      productName: 'Ананас',
      count: 10
    },
  ]
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    // categories load
    case ReduxActions.LOAD_CATEGORIES_SUCCESS:
      return categoriesLoaded(state, action);
    case ReduxActions.LOAD_CATEGORIES_ERROR:
      console.log(action.error);
      return;
    case ReduxActions.WAYBILL_CLEAR:
      return clearWaybill(state, action);
  }
  return state;
}

function categoriesLoaded(state: IAppState, action): IAppState {
  return tassign(state, {
    categories: action.categories
  });
}

function clearWaybill(state: IAppState, action): IAppState {
  return tassign(state, {
    waybill: []
  });
}
