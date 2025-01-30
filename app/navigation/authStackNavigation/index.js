import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screens/loginScreen';

const AuthStack = createNativeStackNavigator();

export const AuthStackNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="loginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
