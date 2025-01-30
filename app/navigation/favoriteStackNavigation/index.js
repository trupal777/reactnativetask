import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {EventsScreen} from '../../screens/eventsScreen';
import {FavoriteEventsScreen} from '../../screens/favoriteEventsScreen';

const FavoritesStack = createNativeStackNavigator();

export const FavoritesStackNavigation = () => {
  return (
    <FavoritesStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <FavoritesStack.Screen
        name="favoriteEventsScreen"
        component={FavoriteEventsScreen}
      />
    </FavoritesStack.Navigator>
  );
};
