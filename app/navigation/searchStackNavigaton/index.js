import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SearchScreen} from '../../screens/searchScreen';

const SearchStack = createNativeStackNavigator();

export const SearchStackNavigation = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="searchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
};
