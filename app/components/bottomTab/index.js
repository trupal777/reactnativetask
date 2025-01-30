import React from 'react';
import {Animated, Pressable, Text, Vibration, View} from 'react-native';
import * as styles from './styles';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  color,
  IcCalender,
  IcFavorite,
  IcProfile,
  IcSearch,
  size,
} from '../../theme';

export const BottomTab = props => {
  const {navigation, state, descriptors} = props;

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  const insets = useSafeAreaInsets();

  const onTabBarPress = (route, _index) => {
    const currentRoute = state.routes[state.index];

    if (currentRoute.name === route.name) {
      navigation.navigate(route.name);
    } else {
      navigation.navigate(route.name);
    }
  };

  if (focusedOptions.tabBarVisible == false) {
    return null;
  } else {
    return (
      <View style={styles.bottomTab(insets)}>
        <View style={styles.container()}>
          {state.routes.map((r, index) => {
            const label =
              focusedOptions.tabBarLabel !== undefined
                ? focusedOptions.tabBarLabel
                : focusedOptions.title !== undefined
                ? focusedOptions.title
                : r.name;

            let Icon;
            if (r.name === 'Search') {
              Icon = IcSearch;
            } else if (r.name === 'Events') {
              Icon = IcCalender;
            } else if (r.name === 'Favorites') {
              Icon = IcFavorite;
            } else if (r.name === 'Profile') {
              Icon = IcProfile;
            }

            const isFocused = state.routes[state.index].name === r.name;

            const scale = new Animated.Value(1);

            const handlePressIn = () => {
              Vibration.vibrate(10);
              Animated.spring(scale, {
                toValue: 1.2,
                useNativeDriver: true,
              }).start();
            };

            const handlePressOut = () => {
              Vibration.vibrate(20);
              Animated.spring(scale, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            };

            return (
              <Pressable
                style={styles.iconContainer()}
                key={index.toString()}
                onPress={() => onTabBarPress(r, index)}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}>
                <Animated.View style={{transform: [{scale}]}}>
                  <Icon
                    strokeWidth={isFocused ? 2 : 1.5}
                    // height={size.moderateScale(20)}
                    // width={size.moderateScale(20)}
                    // fill={isFocused ? color.primary : color.secondary}
                    // selected={isFocused}
                  />
                </Animated.View>

                <Text
                  numberOfLines={1}
                  adjustsFontSizeToFit={true}
                  style={styles.healerTextStyle(isFocused)}>
                  {label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
  }
};
