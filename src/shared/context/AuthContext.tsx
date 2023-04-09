//AuthContext.js
import React, {createContext, useContext, useState} from 'react';
import {resetGenericPassword} from 'react-native-keychain';
import {useDispatch} from 'react-redux';
import {persistor} from '../../store';
import {resetRootAction} from '../../store/actions/rootActions';
import {AppStackNavigationParamListEnum} from '../../types/Screen';
import {navigateTo} from '../../utils/naviation';

interface IAuthProvider {
  children: any;
}

interface IAuthState {
  authenticated: boolean;
  isLoading: boolean;
  user: any;
}
interface AuthContextInterface {
  authState: IAuthState;
  setAuthState: React.Dispatch<React.SetStateAction<IAuthState>>;
  logout: () => any;
}

const AuthContext = createContext<AuthContextInterface>({
  authState: {
    isLoading: true,
    authenticated: false,
    user: null,
  },
  logout: () => {},
  setAuthState: () => {},
});
const {Provider} = AuthContext;

const AuthProvider = ({children}: IAuthProvider) => {
  const [authState, setAuthState] = useState<IAuthState>({
    authenticated: false,
    isLoading: true,
    user: null,
  });
  const dispatch = useDispatch();

  const logout = async () => {
    try {
      await resetGenericPassword();
      setAuthState({
        authenticated: false,
        isLoading: false,
        user: null,
      });
      navigateTo(AppStackNavigationParamListEnum.main);
      // Call logout service
    } catch (error) {
      setAuthState({
        authenticated: false,
        isLoading: false,
        user: null,
      });
    }
    await persistor.purge();
    dispatch(resetRootAction());
    await persistor.flush();
  };

  return (
    <Provider
      value={{
        authState,
        setAuthState,
        logout,
      }}>
      {children}
    </Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export {AuthContext, AuthProvider, useAuth};
