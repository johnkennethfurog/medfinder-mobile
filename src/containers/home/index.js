import React from 'react';
import {
  View,
  Image,
  Text,
  FlatList,
  Safe,
  SafeAreaView,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';

import {getMedicineCart, removeFromCart} from '../../actions/medicine';
import {searchStore} from '../../actions/store';
import MedicineCard from '../../components/medicine-card';
import Loading from '../../components/loading';
import Button from '../../components/button';
import Search from '../../components/search';

import {getCurrentLocation} from '../../utils/maps-utils';

import styles from './styles';

class Home extends React.PureComponent {
  state = {};

  componentDidMount() {
    this.props.dispatch(getMedicineCart());
  }

  onRemoveItem = medicineId => {
    this.props.dispatch(removeFromCart(medicineId));
  };

  onInitialSearchClick = () => {
    this.props.navigation.navigate('Search');
  };

  onSearchStore = () => {
    const {medicines} = this.props;
    getCurrentLocation()
      .then(position => {
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        this.props.dispatch(searchStore(medicines, currentPosition));
      })
      .catch(error => {
        Alert.alert('Unable to get your current position.');
      });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {stores} = this.props;
    //    console.log('componentDidUpdate', stores);
    if (prevProps.stores !== stores) {
      if (stores.length > 0) {
        this.props.navigation.navigate('StoreList', {stores});
      } else {
        Alert.alert('No store found');
      }
    }
  }

  render() {
    const {medicines, isLoading} = this.props;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <Search
            isInitial={true}
            icon={require('../../images/search-gray.png')}
            placeholder={'Search for Brand name or Generic name'}
            onInitialSearchClick={this.onInitialSearchClick}
          />
          <FlatList
            style={{
              flex: 1,
            }}
            data={medicines}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <MedicineCard
                  showQty={false}
                  medicine={item}
                  onRemove={this.onRemoveItem}
                />
              );
            }}
          />
          <Button
            text={'Find Store'}
            src={require('../../images/location.png')}
            onPress={this.onSearchStore}
          />
        </View>
        <Loading isVisible={isLoading} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    medicines: state.medicine.data,
    stores: state.store.data,
    isLoading: state.store.isLoading,
  };
};

export default connect(mapStateToProps)(Home);
