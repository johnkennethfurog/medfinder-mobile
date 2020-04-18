import React from 'react';
import {View, Image, Text} from 'react-native';

import styles from './styles';
import Colors from '../../utils/colors';
class Splash extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../images/icon.png')} />
        <Text style={{fontSize: 35, color: 'dimgray'}}>
          <Text style={{fontSize: 45, color: Colors.blue, fontWeight: 'bold'}}>
            MED
          </Text>
          finder
        </Text>
      </View>
    );
  }
}

export default Splash;
