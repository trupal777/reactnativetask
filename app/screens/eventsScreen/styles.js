import {color, fonts, fontSize, size} from '../../theme';

export const rootContainer = () => ({
  flex: 1,
  backgroundColor: color.customBlack(0.02),
});
export const listContainer = () => ({
  marginHorizontal: size.moderateScale(15),
});
export const flatListContentContainer = () => ({
  paddingBottom: size.moderateScale(160),
  paddingTop: size.moderateScale(30),
});
