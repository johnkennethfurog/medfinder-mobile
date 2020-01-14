import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
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
  state = {
    currentPosition: {},
  };

  componentDidMount() {
    this.props.dispatch(getMedicineCart());
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

  onRemoveItem = medicineId => {
    this.props.dispatch(removeFromCart(medicineId));
  };

  onInitialSearchClick = () => {
    this.props.navigation.navigate('Search');
  };

  onSearchStore = () => {
    const {medicines} = this.props;
    const {currentPosition} = this.state;
    this.props.dispatch(searchStore(medicines, currentPosition));
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {stores} = this.props;
    //    console.log('componentDidUpdate', stores);
    if (prevProps.stores !== stores && stores.length > 0) {
      this.props.navigation.navigate('StoreList', {stores});
    }
  }

  render() {
    const {medicines, isLoading} = this.props;
    return (
      <View style={{flex: 1}}>
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
                <MedicineCard medicine={item} onRemove={this.onRemoveItem} />
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
      </View>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.store);
  return {
    medicines: state.medicine.data,
    stores: state.store.data,
    isLoading: state.store.isLoading,
  };
};

export default connect(mapStateToProps)(Home);
