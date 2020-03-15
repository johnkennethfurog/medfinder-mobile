import React from 'react';
import {View, Animated, Image, Easing, Text, SafeAreaView} from 'react-native';

import styles from './styles';

const Loading = ({isVisible}) => {
  if (isVisible) {
    console.log('Loading visible');
    this.state = {spinAnim: new Animated.Value(0)};
    Animated.loop(
      Animated.timing(this.state.spinAnim, {
        toValue: 1,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
    const spin = this.state.spinAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    return (
      <View style={styles.container}>
        <Animated.Image
          style={{height: 70, width: 70, transform: [{rotate: spin}]}}
          source={require('../../images/loader.png')}
        />
      </View>
    );
  } else {
    console.log('Loading not visible');
    return null;
  }
};

export default Loading;
