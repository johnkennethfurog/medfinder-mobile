import React from 'react';
import {View, Image, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {clearStore} from '../../actions/store';
import StoreCard from '../../components/store-card';
import StoreHeader from '../../components/store-header';

import styles from './styles';

class StoreList extends React.PureComponent {
  onStoreSelect = store => {
    this.props.navigation.navigate('StoreDetail', {store});
  };

  onGotoCart = () => {
    this.props.dispatch(clearStore());
    this.props.navigation.popToTop();
  };
  render() {
    const {stores} = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <StoreHeader
          gotoCart={this.onGotoCart}
          title={'List of Drug stores'}
          subTitle={`Found ${stores.length}`}
        />
        <FlatList
          data={stores}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return (
              <StoreCard store={item} onStoreSelect={this.onStoreSelect} />
            );
          }}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(StoreList);
