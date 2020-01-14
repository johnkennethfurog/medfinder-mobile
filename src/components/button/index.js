import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import Colors from '../../utils/colors';
import styles from './styles';

const Button = ({
  src,
  text,
  subText,
  onPress,
  backgroundColor = Colors.blue,
}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <View style={{flexDirection: 'row'}}>
          <Image style={styles.icon} source={src} />
          <Text style={styles.title}>{text}</Text>
        </View>
        {subText && <Text style={styles.subTitle}>{subText}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default Button;
