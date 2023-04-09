/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {PersistGate} from 'redux-persist/integration/react';
import {AuthProvider} from './src/shared/context/AuthContext';
import {persistor, store} from './src/store';
import {Provider} from 'react-redux';

const Root = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </PersistGate>
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => Root);
