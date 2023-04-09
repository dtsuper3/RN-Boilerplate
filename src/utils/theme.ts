import {DefaultTheme as NavigationDefaultTheme} from '@react-navigation/native';
import {
  DefaultTheme as PaperDefaultTheme,
  configureFonts,
} from 'react-native-paper';
import {COLORS} from '../constants/colors';
import {fontConfig} from '../constants/fonts';

const theme = {
  CustomDefaultTheme: {
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    fonts: configureFonts(fontConfig),

    // myOwnProperty: true,
    colors: {
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background: COLORS.LIGHT.WHITE,
      text: COLORS.LIGHT.BLACK,
      primary: COLORS.LIGHT.PRIMARY,
      accent: COLORS.LIGHT.SECONDARY,
      grey: COLORS.LIGHT.GREY,
      light: COLORS.LIGHT.LIGHT,
      error: COLORS.LIGHT.DANGER,
      outline: COLORS.LIGHT.GREY,
    },
  },
};

export {theme};
