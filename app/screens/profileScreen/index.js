import React from 'react';
import {Text, View} from 'react-native';

import {Header} from '../../components/header';
import * as styles from './styles';

export const ProfileScreen = () => {
  return (
    <View style={styles.rootContainer()}>
      <Header />
      <Text style={{color: 'black'}}>ProfileScreen</Text>
    </View>
  );
};
