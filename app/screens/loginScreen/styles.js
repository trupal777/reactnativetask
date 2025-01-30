import {color, fonts, fontSize, size} from '../../theme';

export const rootContainer = () => ({
  flex: 1,
  backgroundColor: color.white,
});
export const imageStyle = () => ({
  width: size.moderateScale(52),
  height: size.moderateScale(52),
});
export const upperContainer = insets => ({
  width: size.deviceWidth,
  height: size.deviceHeight * 0.45,
  backgroundColor: color.customBlack(0.25),
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingTop: insets.top + size.moderateScale(30),
  paddingBottom: size.moderateScale(50),
});
export const title = () => ({
  fontSize: fontSize.extraLarge,
  fontFamily: fonts.gothicMedium,
  color: color.black,
});
export const linkText = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.gothicMedium,
  color: color.black,
  marginTop: size.moderateScale(10),
});

export const link = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.gothicMedium,
  color: color.black,
  textDecorationLine: 'underline',
});
export const label = () => ({
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.gothicMedium,
  color: color.black,
  marginBottom: size.moderateScale(5),
});
export const inputsContainer = () => ({
  paddingTop: size.moderateScale(25),
});
export const buttonContainer = () => ({
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  paddingVertical: size.moderateScale(12),
});
export const divider = () => ({});
export const iconsContainer = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
  paddingVertical: size.moderateScale(12),
  gap: size.moderateScale(30),
  paddingBottom: size.moderateScale(100),
});
export const lowerContainer = () => ({
  marginHorizontal: size.moderateScale(50),
  justifyContent: 'space-between',
  flex: 1,
});
export const icon = () => ({
  height: size.moderateScale(44),
  width: size.moderateScale(44),
  borderRadius: size.moderateScale(5),
});
export const iconImage = () => ({
  height: size.moderateScale(44),
  width: size.moderateScale(44),
  borderRadius: size.moderateScale(5),
});
export const buttonStyle = () => ({
  width: size.deviceWidth * 0.23,
});
export const textInput = () => ({
  elevation: size.moderateScale(10),
  marginBottom: size.moderateScale(15),
  borderColor: '#ccc',
  borderRadius: size.moderateScale(10),
  padding: 10,
  fontSize: fontSize.littleMedium,
  color: color.black,
  backgroundColor: '#fff',
});
export const errorText = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.gothicMedium,
  color: color.red,
  textAlign: 'left',
  marginVertical: size.moderateScale(2),
});
export const subText = () => ({
  fontSize: fontSize.verySmall,
  fontFamily: fonts.gothicMedium,
  color: color.black,
  textAlign: 'right',
});
export const passwordContainer = () => ({
  flexDirection: 'row',
  alignItems: 'center',

  borderColor: '#ccc',
  borderRadius: 5,
  paddingHorizontal: 10,
  marginBottom: 10,
});

export const eyeIcon = () => ({
  width: 24,
  height: 24,
});
