import { ReduxActions } from './ReduxActions';
import { tassign } from 'tassign';
// Models
import { ICategory } from '../models/ICategory.model';
import { IWaybillItem } from '../models/IWaybillItem.model';
import { RequestService } from '../request.service';

export interface IAppState {
  categories: ICategory[];
  waybill: IWaybillItem[];

  appInEditMode: boolean;
}

export const INITIAL_STATE: IAppState = {
  appInEditMode: true,
  categories: [],
  waybill: [
    {
      categoryId: '29598317-3d6f-4417-b63b-4bf86097e48e',
      productId: '3d762cc5-e4fc-47db-b01a-d5fa48cdd64c',
      productName: 'Апельсин',
      count: 40
    },
    {
      categoryId: '29598317-3d6f-4417-b63b-4bf86097e48e',
      productId: 'c9a990d7-c2ce-452b-b87e-10f988fe2e04',
      productName: 'Виноград',
      count: -10
    },
    {
      categoryId: '29598317-3d6f-4417-b63b-4bf86097e48e',
      productId: '53715fea-7a10-41e5-94cf-fdaecfcf661c',
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
    // waybill
    case ReduxActions.WAYBILL_CLEAR:
      return clearWaybill(state, action);
    case ReduxActions.WAYBILL_REMOVE_ITEM:
      return removeItemFromWaybill(state, action);
    case ReduxActions.WAYBILL_SUBMITED:
      return submitWaybill(state, action);
    case ReduxActions.WAYBILL_ADD_ITEM:
      return addItemToWaybill(state, action);
// test app_mode
    case ReduxActions.APP_CHANGEMODE:
      return changeMode(state, action);
    case ReduxActions.APP_DISCARD_CATEGORY:
      return discardCategory(state, action);
    case ReduxActions.APP_DISCARD_PRODUCT:
      return discardProduct(state, action);
  }
  return state;
}

function discardCategory(state: IAppState, action) {
  const categories = state.categories;
  // console.log(action.oldCategory);
  categories[categories.findIndex(c => c.id === action.oldCategory.id)] = action.oldCategory;
  return tassign(state, {
    categories: categories
  });
}

function discardProduct(state: IAppState, action) {
  return tassign(state, {

  });
}

function changeMode(state: IAppState, action) {
  return tassign(state, {
    appInEditMode: !state.appInEditMode
  });
}

function categoriesLoaded(state: IAppState, action): IAppState {
  return tassign(state, {
    categories: action.categories.slice()
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
  return tassign(state, {
    waybill: []
  });
}

function addItemToWaybill(state: IAppState, action): IAppState {
  let waybill = state.waybill;
  if (waybill.find(i => i.productId === action.item.productId)) {
    let currentItem = waybill.find(i => i.productId === action.item.productId);
    let itemCount = currentItem.count;
    itemCount += action.item.count;
    // if item count == 0, remove item from waybill
    if (itemCount === 0) {
      waybill.splice(waybill.findIndex(i => i.productId === action.item.productId), 1);
    } else {
      currentItem.count = itemCount;
    }
  } else {
    waybill.push(action.item);
  }
  return tassign(state, {
    waybill: waybill
  });
}
