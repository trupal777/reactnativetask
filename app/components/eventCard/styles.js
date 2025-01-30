import {color, fonts, fontSize, size} from '../../theme';

export const rootContainer = () => ({
  padding: size.moderateScale(10),
  borderRadius: size.moderateScale(12),
  flexDirection: 'row',
  gap: size.moderateScale(8),
  backgroundColor: color.white,
  alignItems: 'center',
  marginBottom: size.moderateScale(20),
});
export const imageContainer = () => ({
  borderRadius: size.moderateScale(4),
  height: size.moderateScale(80),
  width: size.moderateScale(80),
  overflow: 'hidden',
});
export const imageStyle = () => ({
  borderRadius: size.moderateScale(4),
  height: size.moderateScale(80),
  width: size.moderateScale(80),
});
export const cardDetailContainer = () => ({
  flex: 1,
});
export const titleView = () => ({});
export const dateView = () => ({});
export const locationView = () => ({});
export const dateAndLocationContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
export const amountView = () => ({});
export const bottomContainer = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginTop: size.moderateScale(3),
});
export const bottomLeftView = () => ({
  flex: 1,
  flexDirection: 'row',

  gap: size.moderateScale(30),
});
export const bottomRightView = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  gap: size.moderateScale(6),
});

// ****** text styles *** //
export const titleText = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.gothicSemiBold,
  color: color.black,
});
export const subTitleText = date => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.gothicMedium,
  color: date ? color.limeGreen : color.black,
});
export const typeText = date => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.gothicSemiBold,
  color: color.customBlack(0.7),
});
export const amountText = () => ({
  fontSize: fontSize.mediumSmall,
  fontFamily: fonts.gothicRegular,
  color: color.black,
});
