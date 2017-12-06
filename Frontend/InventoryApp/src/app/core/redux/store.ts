import { ReduxActions } from './ReduxActions';
import { tassign } from 'tassign';
// Models
import { ICategory } from '../models/ICategory.model';
import { IWaybillItem } from '../models/IWaybillItem.model';
import { RequestService } from '../request.service';
import { IProduct } from '../models/IProduct.model';

export interface IAppState {
  categories: ICategory[];
  products: IProduct[];
  waybill: IWaybillItem[];

  appInEditMode: boolean;
}

export const INITIAL_STATE: IAppState = {
  appInEditMode: true,
  categories: [],
  products: [],
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
    case ReduxActions.DATA_LOAD_SUCCESS:
      return dataLoaded(state, action);
    case ReduxActions.DATA_LOAD_ERROR:
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
  categories[categories.findIndex(c => c.id === action.oldCategory.id)] = action.oldCategory;
  return tassign(state, {
    categories: categories
  });
}
// todo
function discardProduct(state: IAppState, action) {
  const products = state.products;
  products[products.findIndex(p => p.id === action.oldProduct.id)] = action.oldProduct;
  return tassign(state, {
    products: products
  });
}

function changeMode(state: IAppState, action) {
  return tassign(state, {
    appInEditMode: !state.appInEditMode
  });
}

function dataLoaded(state: IAppState, action): IAppState {
  const categories: ICategory[] = [];
  const products: IProduct[] = [];

  action.data.forEach(el => {
    el.products.forEach(p => {
      products.push(p);
    });
    categories.push({id: el.id, name: el.name, imgPath: el.imgPath});
  });
  products.sort((x1, x2) => x1.name.localeCompare(x2.name));

  return tassign(state, {
    categories: categories.slice(),
    products: products.slice()
  });
}

function clearWaybill(state: IAppState, action): IAppState {
  return tassign(state, {
    waybill: []
  });
}

function removeItemFromWaybill(state: IAppState, action): IAppState {
  const items = state.waybill;
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
