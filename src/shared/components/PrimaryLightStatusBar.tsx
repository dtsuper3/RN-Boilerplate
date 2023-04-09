import React from 'react';
import {StatusBar} from 'react-native';
import {COLORS} from '../../constants/colors';

function PrimaryLightStatusBar() {
  return (
    <StatusBar backgroundColor={COLORS.LIGHT.WHITE} barStyle="dark-content" />
  );
}

export default PrimaryLightStatusBar;
