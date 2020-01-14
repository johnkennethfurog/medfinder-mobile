import React from 'react';
import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import Colors from '../../utils/colors';

import styles from './styles';

const StoreHeader = ({title, subTitle, src, gotoCart, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <Image
            style={styles.backIcon}
            source={require('../../images/back-gray.png')}
          />
        </TouchableOpacity>
      )}
      {src && <Image resizeMode="cover" style={styles.icon} source={src} />}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
      <TouchableOpacity onPress={gotoCart}>
        <Image
          style={styles.btnCart}
          source={require('../../images/cart.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default StoreHeader;
