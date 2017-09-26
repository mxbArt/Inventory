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
      categoryId: '59c15d69c6533c00189df70d',
      productId: '59c15d69c6533c00189df6e9',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '59c15d69c6533c00189df70d',
      productId: '59c15d69c6533c00189df6ea',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '59c15d69c6533c00189df70d',
      productId: '59c15d69c6533c00189df6eb',
      productName: 'Мандарин',
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
    case ReduxActions.WAYBILL_REMOVE_ITEM:
      return removeItemFromWaybill(state, action);
    case ReduxActions.WAYBILL_SUBMIT:
      return submitWaybill(state, action);
    case ReduxActions.WAYBILL_ADD_ITEM:
      return addItemToWaybill(state, action);
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

function removeItemFromWaybill(state: IAppState, action): IAppState {
  let items = state.waybill;
  items.splice(state.waybill.indexOf(action.item), 1);
  return tassign(state, {
    waybill: items
  });
}

function submitWaybill(state: IAppState, action): IAppState {
  let categories = state.categories;
  state.waybill.forEach((i) => {
    categories.find(c => c._id === i.categoryId)
      .products.find(p => p._id === i.productId)
        .count += i.count;
  });
  return tassign(state, {
    categories: categories,
    waybill: []
  });
}

function addItemToWaybill(state: IAppState, action): IAppState {
  let waybill = state.waybill;
  if (waybill.find(i => i.productId === action.item.productId)) {
    waybill.find(i => i.productId === action.item.productId).count += action.item.count;
  } else {
    waybill.push(action.item);
  }
  return tassign(state, {
    waybill: waybill
  });
}
