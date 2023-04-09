import {StackNavigationOptions} from '@react-navigation/stack';
import {COLORS} from '../constants/colors';
import {commonStyles} from '../styles/common';

const commonNavOptions: StackNavigationOptions = {
  headerShown: true,
  headerStyle: commonStyles.navHeader,
  headerTintColor: COLORS.LIGHT.WHITE,
};
const navigationOptions: StackNavigationOptions = {
  headerShown: false,
  gestureEnabled: false,
  animationEnabled: false,
};

export {commonNavOptions, navigationOptions};
