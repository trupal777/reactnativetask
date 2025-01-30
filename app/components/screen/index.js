import React from 'react';
import {
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import {Loader} from '../loader';
import * as styles from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export const Screen = props => {
  const {
    children,
    withScroll,
    style,
    bgColor,
    scrollStyle,
    scrollRef,
    onScrolling,
    keyboardShouldPersistTaps,
    extraScrollHeight,
    loading,
  } = props;

  if (withScroll) {
    return (
      <SafeAreaView style={styles.mainContainer(bgColor)}>
        {/* <StatusBar
          translucent
          backgroundColor={bgColor ?? color.white}
          barStyle={bgColor ? 'dark-content' : 'dark-content'}
        /> */}
        {loading && <Loader />}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          contentContainerStyle={scrollStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={onScrolling}
          innerRef={scrollRef}
          scrollEventThrottle={16}
          extraScrollHeight={extraScrollHeight}
          enableOnAndroid={true}
          alwaysBounceVertical={false}
          {...props}>
          <View style={styles.full()}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container(bgColor)}>
          {/* <StatusBar
            translucent
            backgroundColor={bgColor ?? color.white}
            barStyle={bgColor ? 'dark-content' : 'dark-content'}
          /> */}
          {loading && <Loader />}

          <View style={styles.container(style)}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
};
