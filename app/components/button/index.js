import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import * as styles from './styles';

export const Button = props => {
  const {
    title,
    activeOpacity,
    disabled,
    btnStyle,
    btnTitleStyle,
    onPress,
    icon,
  } = props;
  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ?? 0.7}
      onPress={onPress}
      disabled={disabled}
      style={[styles.rootContainer(), btnStyle]}>
      {icon && icon}
      <Text style={[styles.titleStyle(), btnTitleStyle]}>
        {'  '}
        {title}
      </Text>
    </TouchableOpacity>
  );
};
