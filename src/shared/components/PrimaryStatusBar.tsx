import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../../constants/colors';

function PrimaryStatusBar() {
  return (
    <StatusBar
      backgroundColor={COLORS.LIGHT.PRIMARY}
      barStyle="light-content"
    />
  );
}

export default PrimaryStatusBar;
