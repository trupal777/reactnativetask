import {color, fonts, fontSize, size} from '../../theme';

export const rootContainer = () => ({
  backgroundColor: color.limeGreen,
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: size.moderateScale(8),
  borderRadius: size.moderateScale(4),
  borderColor: color.darkBrown,
});
export const titleStyle = () => ({
  fontSize: fontSize.littleMedium,
  color: color.white,
  fontFamily: fonts.gothicSemiBold,
});
