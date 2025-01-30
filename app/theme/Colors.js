export const color = {
  white: 'rgba(255,255,255,1)',
  black: 'rgba(0,0,0,1)',
  transparent: 'rgba(0,0,0,0)',
  semiTransBlack: 'rgba(0, 0, 0, 0.5)',
  limeGreen: 'rgba(33, 211, 147, 1)',
  red: 'rgba(255, 0, 0, 1)',
  customTransparent: opacity => `rgba(0, 0, 0,${opacity ?? 1})`,
  customWhite: opacity => `rgba(255, 255, 255,${opacity ?? 1})`,
  customBlack: opacity => `rgba(0, 0, 0,${opacity ?? 1})`,
};
