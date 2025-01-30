import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {EventsScreen} from '../../screens/eventsScreen';

const EventsStack = createNativeStackNavigator();

export const EventsStackNavigation = () => {
  return (
    <EventsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <EventsStack.Screen name="eventsScreen" component={EventsScreen} />
    </EventsStack.Navigator>
  );
};
