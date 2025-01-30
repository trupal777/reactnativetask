import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import * as styles from './styles';

export const Header = () => {
  const insets = useSafeAreaInsets();
  const {userLoginResponse} = useSelector(state => state.authReducer);
  console.log('object', userLoginResponse);
  return (
    <View style={styles.rootContainer(insets)}>
      <Text style={styles.title()}>
        Hello {userLoginResponse?.user?.usr_fname ?? 'Test Pract'}
      </Text>
      <Text style={styles.subTitle()}>Are you ready to dance?</Text>
    </View>
  );
};
