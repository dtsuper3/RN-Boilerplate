import {StyleSheet} from 'react-native';
import {COLORS, COMMON_COLORS} from '../constants/colors';

const commonStyles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
  },
  flexRowBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyContentBetween: {
    justifyContent: 'space-between',
  },
  justifyContentEnd: {
    justifyContent: 'flex-end',
  },
  button: {
    borderRadius: 4,
    height: 40,
  },
  buttonText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'none',
    color: COMMON_COLORS.WHITE,
  },
  buttonLabel: {
    height: 20,
  },
  input: {
    borderColor: COLORS.LIGHT.GREY,
  },
  errorText: {
    color: COLORS.LIGHT.DANGER,
    alignSelf: 'stretch',
    fontSize: 10,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 2,
  },
  focusInput: {
    borderColor: COLORS.LIGHT.PRIMARY,
    borderWidth: 2,
  },
  errorInput: {
    borderColor: COLORS.LIGHT.DANGER,
    borderWidth: 2,
  },
  navHeader: {
    backgroundColor: COLORS.LIGHT.PRIMARY,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  authImg: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  tabBar: {
    display: 'flex',
    borderColor: COLORS.LIGHT.GREY,
    borderRadius: 10,
    marginHorizontal: 6,
    marginBottom: 4,
    paddingVertical: 2,
  },
  shadow: {
    elevation: 6,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
  },
  card: {
    backgroundColor: COLORS.LIGHT.WHITE,
    borderRadius: 5,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.2,
    elevation: 6,
    borderWidth: 1,
    borderColor: COLORS.LIGHT.WHITE,
    margin: 2,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  mainText: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.LIGHT.BLACK,
  },
  fwBold: {
    fontWeight: '700',
  },
  debug: {
    borderWidth: 1,
    borderColor: 'yellow',
  },
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
  },
  floatLabel: {
    position: 'absolute',
    backgroundColor: COLORS.LIGHT.WHITE,
    left: 10,
    top: -8,
    zIndex: 999,
    paddingHorizontal: 4,
    fontSize: 14,
  },
});

export {commonStyles};
