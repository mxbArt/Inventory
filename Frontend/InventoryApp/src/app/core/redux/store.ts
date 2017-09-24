import { ICategory } from '../models/ICategory.model';
import { ReduxActions } from './ReduxActions';
import { tassign } from 'tassign';

export interface IAppState {
  categories: ICategory[];
}

export const INITIAL_STATE: IAppState = {
  categories: []
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    // categories load
    case ReduxActions.LOAD_CATEGORIES_SUCCESS:
      return categoriesLoaded(state, action);
    case ReduxActions.LOAD_CATEGORIES_ERROR:
      console.log(action.error);
  }
  return state;
}

function categoriesLoaded(state: IAppState, action): IAppState {
  return tassign( state, {
    categories: action.categories
  });
}
