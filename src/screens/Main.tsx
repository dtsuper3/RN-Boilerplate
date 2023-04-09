import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text} from 'react-native-paper';
import {MainScreenProps} from '../types/Screen';

function Main(props: MainScreenProps) {
  console.log('props:-', props);

  return (
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  );
}

export default Main;
