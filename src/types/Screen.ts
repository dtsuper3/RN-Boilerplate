import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export enum AppStackNavigationParamListEnum {
  main = 'root',
}
export type AppStackNavigationParamList = {
  main: undefined;
};

export type MainScreenRouteProp = RouteProp<
  AppStackNavigationParamList,
  'main'
>;
export type MainScreenNavigationProp = StackNavigationProp<
  AppStackNavigationParamList,
  'main'
>;

export type MainScreenProps = {
  route: MainScreenRouteProp;
  navigation: MainScreenNavigationProp;
};
