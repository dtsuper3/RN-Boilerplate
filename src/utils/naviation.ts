import {StackActions} from '@react-navigation/native';
import {navigationRef} from '../navigations';

function navigateTo(name: string, params?: object) {
  navigationRef.current?.dispatch(StackActions.push(name, params));
}

export {navigateTo};
