import React from 'react';
import {View, TouchableOpacity, Text, Image, FlatList} from 'react-native';

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
            <Text style={{fontWeight: 'bold'}}> {`${store.distance} km`}</Text>
          </Text>
          <Text style={styles.subTitle}>
            <Text style={{fontWeight: 'bold', color: statusIndicator}}>
              {store.IsOpen ? 'Open' : 'Closed'}
            </Text>
            {` | Store Hours: ${store.StoreHours}`}
          </Text>
          <View style={styles.horizontalLine} />
          <FlatList
            numColumns={2}
            data={store.Medicines}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <Text
                  style={[
                    styles.subTitle,
                    {fontWeight: 'bold', flex: 1, fontSize: 13},
                  ]}>
                  {'\u2022' + ' '}
                  {item.BrandName}
                </Text>
              );
            }}
          />
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
