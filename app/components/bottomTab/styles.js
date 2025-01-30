import {color, fonts, fontSize, size} from '../../theme';

export const container = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: size.moderateScale(75),
  backgroundColor: color.secondary,
});

export const mainView = () => ({
  backgroundColor: color.white,
});

export const iconContainer = () => ({
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const bottomTab = insets => ({
  height: size.moderateScale(75),
  backgroundColor: color.white,
  justifyContent: 'center',
  paddingBottom: insets.bottom,
  elevation: size.moderateScale(20),
});
export const textStyle = isFocused => ({
  color: isFocused ? color.primary : color.customSecondary(0.6),
  paddingTop: size.moderateScale(3),
  textAlign: 'center',
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.poppinsMedium,
});
export const healerTextStyle = isFocused => ({
  color: isFocused ? color.white : color.white,
  paddingTop: size.moderateScale(5),
  textAlign: 'center',
  fontSize: fontSize.littleSmall,
  fontFamily: fonts.justSansMedium,
});
