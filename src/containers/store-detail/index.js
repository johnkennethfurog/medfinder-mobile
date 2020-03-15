import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  FlatList,
  Linking,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {connect} from 'react-redux';

import MedicineCard from '../../components/medicine-card';
import Button from '../../components/button';
import StoreHeader from '../../components/store-header';

import styles from './styles';
import Colors from '../../utils/colors';
import {getCurrentLocation} from '../../utils/maps-utils';

class StoreDetail extends React.PureComponent {
  state = {
    currentPosition: {},
  };

  componentDidMount() {
    getCurrentLocation()
      .then(position => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        this.setState({currentPosition});
      })
      .catch(error => {
        console.log('currentPosition - error', error);
      });
  }

  onNavigate = () => {
    const {currentPosition} = this.state;
    const {store} = this.props.navigation.state.params;

    const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${
      currentPosition.lat
    },${currentPosition.lng}&destination=${store.Location.coordinates[1]},${
      store.Location.coordinates[0]
    }&travelmode=driving`;

    console.log('onNavigate', mapUrl);
    Linking.openURL(mapUrl);
  };

  onConnect = phoneNumber => {
    Linking.openURL(`tel:${phoneNumber}`);
  };

  onBackClick = () => {
    this.props.navigation.goBack();
  };

  onGotoCart = () => {
    this.props.navigation.popToTop();
  };

  renderHeader(store) {
    return (
      <StoreHeader
        gotoCart={this.onGotoCart}
        title={store.Name}
        onBack={this.onBackClick}
        subTitle={`Store Hours: ${store.StoreHours}`}
      />
    );
  }

  renderFooter(store) {
    return (
      <View>
        <View style={styles.addressContainer}>
          <View style={styles.addressInfoContainer}>
            <Image
              resizeMode="cover"
              style={styles.icon}
              source={require('../../images/location-blue.png')}
            />
            <View style={styles.infoContainer}>
              <Text style={styles.title}>Address</Text>
              <Text style={styles.subTitle}>{store.Address}</Text>
            </View>
          </View>
        </View>
        <MapView
          style={{width: '100%', height: 200, borderRadius: 20}}
          initialRegion={{
            latitude: store.Location.coordinates[1],
            longitude: store.Location.coordinates[0],
            latitudeDelta: 0.0122,
            longitudeDelta: 0.0122,
          }}>
          <Marker
            coordinate={{
              latitude: store.Location.coordinates[1],
              longitude: store.Location.coordinates[0],
            }}
            title={'Destination'}
          />
        </MapView>
        <Button
          text={'Direction'}
          subText={`${store.distance} km away`}
          backgroundColor={Colors.green}
          src={require('../../images/direction.png')}
          onPress={this.onNavigate}
        />
        <Button
          text={'Call Store'}
          src={require('../../images/call.png')}
          subText={store.ContactInfo}
          onPress={() => {
            this.onConnect(store.ContactInfo);
          }}
        />
      </View>
    );
  }

  render() {
    const {store} = this.props.navigation.state.params;
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={store.Medicines}
          ListHeaderComponent={this.renderHeader(store)}
          ListFooterComponent={this.renderFooter(store)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <MedicineCard medicine={item} />;
          }}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(StoreDetail);
