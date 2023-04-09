import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {AppStackNavigationParamList} from '../types/Screen';
import {createStackNavigator} from '@react-navigation/stack';

import {theme} from '../utils/theme';
import {ThemeProp} from 'react-native-paper/lib/typescript/src/types';
import {navigationOptions} from './helpers';
import Main from '../screens/Main';

export const navigationRef = React.createRef<any>();

const Stack = createStackNavigator<AppStackNavigationParamList>();

function Navigations() {
  return (
    <PaperProvider theme={theme.CustomDefaultTheme as ThemeProp}>
      <NavigationContainer ref={navigationRef} theme={theme.CustomDefaultTheme}>
        <Stack.Navigator screenOptions={navigationOptions}>
          <Stack.Screen name="main" component={Main} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default Navigations;
