import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';

import Colors from '../../utils/colors';

import styles from './styles';

const SearchResultCard = ({medicine, onAddItem}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>
        <Text style={styles.title}>{medicine.BrandName}</Text>
        {` (${medicine.GenericName} | ${medicine.Size} ${medicine.UoM})`}
      </Text>
      {medicine.isAdded && (
        <Image
          style={styles.btnAdd}
          source={require('../../images/check.png')}
        />
      )}
      {!medicine.isAdded && (
        <TouchableOpacity
          onPress={() => {
            onAddItem(medicine);
          }}>
          <Image
            style={styles.btnAdd}
            source={require('../../images/add.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchResultCard;
