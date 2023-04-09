import {RootActionsType} from '../actions-type/rootActionsType';

const resetRootAction = () => {
  return {
    type: RootActionsType.RESET_STATE,
  };
};

export {resetRootAction};
