import {color, fonts, fontSize, size} from '../../theme';

export const rootContainer = insets => ({
  backgroundColor: color.white,
  paddingTop: insets.top + size.moderateScale(35),
  paddingBottom: size.moderateScale(25),
  paddingHorizontal: size.moderateScale(50),
});
export const title = () => ({
  color: color.black,
  fontSize: fontSize.medium,
  fontFamily: fonts.gothicSemiBold,
});
export const subTitle = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.gothicRegular,
  color: color.black,
});
