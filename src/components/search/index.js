import React from 'react';
import {View, TouchableOpacity, Text, Image, TextInput} from 'react-native';

import Colors from '../../utils/colors';

import styles from './styles';

const Search = ({
  placeholder,
  isInitial,
  onInitialSearchClick,
  onIconPress = () => {},
  onTextChange,
  value,
  isLoading,
}) => {
  const icon = isInitial
    ? require('../../images/search-gray.png')
    : require('../../images/back-gray.png');

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={onIconPress}>
          <Image style={styles.icon} source={icon} />
        </TouchableOpacity>

        {isInitial ? (
          <TouchableOpacity onPress={onInitialSearchClick}>
            <Text style={styles.placeholder}>{placeholder}</Text>
          </TouchableOpacity>
        ) : (
          <TextInput
            placeholder={placeholder}
            value={value}
            onEndEditing={() => {
              console.log('onEndEditing');
            }}
            onChangeText={keyword => {
              onTextChange(keyword);
            }}
            style={{
              marginLeft: 10,
              padding: 0,
              flex: 1,
            }}
          />
        )}
        {isLoading && (
          <Image
            style={{width: 35, height: 35}}
            source={require('../../images/loading-3.gif')}
          />
        )}
      </View>
    </View>
  );
};

export default Search;
