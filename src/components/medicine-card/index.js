import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import Colors from '../../utils/colors';

import styles from './styles';

const MedicineCard = ({medicine, onRemove, priceAlignRight = true}) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{medicine.BrandName}</Text>
        {!priceAlignRight && medicine.Price && (
          <Text style={styles.price}>{medicine.Price}</Text>
        )}
        <Text style={[styles.subTitle, {marginTop: 5}]}>
          {medicine.GenericName}
        </Text>
        <Text style={styles.subTitle}>{`${medicine.Size} ${
          medicine.UoM
        }`}</Text>
        {medicine.NeedPresription && (
          <Text style={styles.needPrescription}>
            * This medicine needs prescription
          </Text>
        )}
      </View>
      {priceAlignRight && medicine.Price && (
        <Text style={styles.price}>{medicine.Price}</Text>
      )}
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
