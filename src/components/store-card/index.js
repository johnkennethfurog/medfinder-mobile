import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';
import MedicineCard from '../../components/medicine-card';

import Colors from '../../utils/colors';

import styles from './styles';

const StoreCard = ({store, onStoreSelect}) => {
  const statusIndicator = store.IsOpen ? Colors.green : 'red';

  return (
    <TouchableOpacity
      onPress={() => {
        onStoreSelect(store);
      }}>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{store.Name}</Text>
          <Text style={styles.subTitle}>
            <Text>{store.Address}</Text> |
            <Text style={{fontWeight: 'bold'}}>
              {`${store.distance} km away`}
            </Text>
          </Text>
          <Text style={[styles.subTitle, {marginBottom: 10}]}>
            <Text style={{fontWeight: 'bold', color: statusIndicator}}>
              {store.IsOpen ? 'Open' : 'Closed'}
            </Text>
            {` | Store Hours: ${store.StoreHours}`}
          </Text>
          {store.Medicines.map(med => {
            return (
              <MedicineCard
                key={med._id}
                medicine={med}
                priceAlignRight={false}
              />
            );
          })}

          {store.IsHealthCentre && (
            <Text style={[styles.healthCenterNote]}>
              This is a health center, in here you can avail the medicine your
              are looking for free or cheaper price.
            </Text>
          )}
        </View>
        <Image
          resizeMode="cover"
          style={styles.rightArrow}
          source={require('../../images/rightarrow.png')}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StoreCard;
