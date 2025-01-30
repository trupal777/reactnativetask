import React from 'react';
import {StatusBar, Text, View} from 'react-native';

import {Header} from '../../components/header';
import * as styles from './styles';
import {color} from '../../theme';

export const SearchScreen = () => {
  return (
    <View style={styles.rootContainer()}>
      <StatusBar
        translucent={true}
        backgroundColor={color.white}
        barStyle="dark-content"
      />
      <Header />
      <Text style={{color: 'black'}}>searchScreen</Text>
    </View>
  );
};
