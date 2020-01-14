import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

class Splash extends React.PureComponent {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.img} source={require('../../images/bg.png')} />
      </View>
    );
  }
}

export default Splash;
