import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {AuthStackNavigation} from '../authStackNavigation';
import {BottomStackNavigation} from '../bottomStackNavigation';

const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  const {isUserLogin} = useSelector(state => state.authReducer);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isUserLogin ? (
          <Stack.Screen
            name="bottomStackNavigation"
            component={BottomStackNavigation}
          />
        ) : (
          <Stack.Screen
            name="authStackNavigation"
            component={AuthStackNavigation}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
