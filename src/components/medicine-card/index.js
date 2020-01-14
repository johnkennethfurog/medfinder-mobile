import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import Colors from '../../utils/colors';

import styles from './styles';

const MedicineCard = ({medicine, onRemove}) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="cover"
        style={styles.icon}
        source={{uri: medicine.icon}}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{medicine.BrandName}</Text>
        <Text style={styles.subTitle}>{medicine.GenericName}</Text>
        <Text style={styles.subTitle}>{`${medicine.Size} ${
          medicine.UoM
        }`}</Text>
      </View>
      {medicine.Price && <Text style={styles.price}>{medicine.Price}</Text>}
      {onRemove && (
        <TouchableOpacity
          onPress={() => {
            onRemove(medicine._id);
          }}>
          <Image
            style={styles.btnClose}
            source={require('../../images/close.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MedicineCard;
