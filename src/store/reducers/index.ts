import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux';
import {combineReducers} from 'redux';
import {RootActionsType} from '../actions-type/rootActionsType';

const MainReducer = combineReducers({});

export const RootReducer = (state: any, action: any) => {
  if (action.type === RootActionsType.RESET_STATE) {
    return MainReducer(undefined, action);
  }

  return MainReducer(state, action);
};

export type RootState = ReturnType<typeof MainReducer>;
export const useSelector: TypedUseSelectorHook<ReturnType<typeof MainReducer>> =
  useReduxSelector;
