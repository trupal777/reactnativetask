import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ProfileScreen} from '../../screens/profileScreen';

const ProfileStack = createNativeStackNavigator();

export const ProfileStackNavigation = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProfileStack.Screen name="profileScreen" component={ProfileScreen} />
    </ProfileStack.Navigator>
  );
};
