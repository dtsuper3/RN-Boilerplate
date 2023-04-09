import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer, PersistConfig} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {RootReducer} from './reducers';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './saga';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, RootReducer);
const middleware = applyMiddleware(sagaMiddleware);

const store = createStore(persistedReducer, middleware);
const persistor = persistStore(store);
sagaMiddleware.run(RootSaga);

export {store, persistor};
