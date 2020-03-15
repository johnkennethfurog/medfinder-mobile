import React from 'react';
import {View, Image, Text, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';

import {
  getRecentSearch,
  addToCart,
  searchMedicine,
  clearSearchResult,
} from '../../actions/medicine';

import MedicineCard from '../../components/medicine-card';
import Button from '../../components/button';
import Search from '../../components/search';
import SearchResultCard from '../../components/search-result-card';

import styles from './styles';

class SearchScreen extends React.PureComponent {
  state = {
    keyword: '',
    isKeywordEmpty: false,
  };

  componentDidMount() {
    this.timer = null;
    this.props.dispatch(getRecentSearch());
  }

  onAddItem = medicine => {
    this.props.dispatch(addToCart(medicine));
  };

  onTextChange = keyword => {
    const {isKeywordEmpty} = this.state;
    const isEmpty = keyword.length === 0;

    clearTimeout(this.timer);

    if (!isEmpty) {
      this.timer = setTimeout(() => {
        console.log('searching for ' + keyword);
        this.props.dispatch(searchMedicine(keyword));
      }, 400);
    }

    if (isEmpty !== isKeywordEmpty) {
      this.setState({
        keyword,
        isKeywordEmpty: isEmpty,
      });
      return;
    }

    this.setState({
      keyword,
    });
  };

  goBack = () => {
    this.props.navigation.goBack();
    this.props.dispatch(clearSearchResult());
  };

  renderEmptyComponent = () => {
    const {isSearching} = this.props;
    return (
      <View
        style={{
          flex: 1,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {!isSearching && (
          <Text
            style={{
              fontSize: 16,
            }}>
            {'No medicine found!'}
          </Text>
        )}
      </View>
    );
  };

  render() {
    const {recentSearch, searchResult, isSearching} = this.props;

    return (
      <SafeAreaView style={styles.container}>
        <Search
          icon={require('../../images/search-gray.png')}
          placeholder={'Search for Brand name or Generic name'}
          onIconPress={this.goBack}
          onTextChange={this.onTextChange}
          isLoading={isSearching}
          value={this.state.keyword}
        />

        <View style={{flex: 1}}>
          <FlatList
            data={searchResult}
            ListEmptyComponent={this.renderEmptyComponent}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => {
              return (
                <SearchResultCard medicine={item} onAddItem={this.onAddItem} />
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    recentSearch: state.medicine.recentSearch,
    searchResult: state.medicine.searchResult,
    isSearching: state.medicine.isLoading,
  };
};

export default connect(mapStateToProps)(SearchScreen);
