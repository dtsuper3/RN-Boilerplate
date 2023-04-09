import React, {useEffect} from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import Navigations from './navigations';
import PrimaryLightStatusBar from './shared/components/PrimaryLightStatusBar';

function App(): JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      const ignoreWarns = [
        // 'EventEmitter.removeListener',
        // '[fuego-swr-keys-from-collection-path]',
        // 'Setting a timer for a long period of time',
        'ViewPropTypes will be removed from React Native',
        // 'AsyncStorage has been extracted from react-native',
        // "exported from 'deprecated-react-native-prop-types'.",
        // 'Non-serializable values were found in the navigation state.',
        'VirtualizedLists should never be nested inside plain ScrollViews',
      ];

      const warn = console.warn;
      console.warn = (...arg) => {
        for (const warning of ignoreWarns) {
          if (arg[0].startsWith(warning)) {
            return;
          }
        }
        warn(...arg);
      };

      LogBox.ignoreLogs(ignoreWarns);
    }
  }, []);

  return (
    <>
      <PrimaryLightStatusBar />
      <View style={[styles.main]}>
        <Navigations />
      </View>
      <Toast />
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
