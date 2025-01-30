import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Platform} from 'react-native';

import {BottomTab} from '../../components/bottomTab';
import {EventsStackNavigation} from '../eventStackNavigation';
import {FavoritesStackNavigation} from '../favoriteStackNavigation';
import {ProfileStackNavigation} from '../profileStackNavigation';
import {SearchStackNavigation} from '../searchStackNavigaton';

const Tab = createBottomTabNavigator();

export const BottomStackNavigation = () => {
  const getTabBarVisibility = route => {
    route = route.getState().routes[route.getState().index];

    if (route.state) {
      const routeName = route.state
        ? route.state.routes[route.state.index].name
        : '';

      if (
        routeName === 'trueJoyPassSubscriptionScreen' ||
        routeName === 'challengeDetailScreen' ||
        routeName === 'givesScreen' ||
        routeName === 'billUpload' ||
        routeName === 'trueJoyChallengePassSubscriptionScreen' ||
        routeName === 'sendGiftScreen' ||
        routeName === 'authScreen'
      ) {
        return false;
      }
    }
    return true;
  };

  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS === 'android' ? true : false,
        tabBarShowLabel: false,
      })}
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBar={props => {
        const value = getTabBarVisibility(props.navigation);

        if (props?.state?.index === 4 || props?.state?.index === 5 || !value) {
          return;
        } else {
          return <BottomTab {...props} />;
        }
      }}>
      <Tab.Screen
        name="Search"
        component={SearchStackNavigation}
        options={({navigation}) => ({
          tabBarVisible: getTabBarVisibility(navigation),
        })}
      />
      <Tab.Screen
        name="Events"
        component={EventsStackNavigation}
        options={({navigation}) => ({
          tabBarVisible: getTabBarVisibility(navigation),
        })}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStackNavigation}
        options={({navigation}) => ({
          tabBarVisible: getTabBarVisibility(navigation),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigation}
        options={({navigation}) => ({
          tabBarVisible: getTabBarVisibility(navigation),
        })}
      />
    </Tab.Navigator>
  );
};
