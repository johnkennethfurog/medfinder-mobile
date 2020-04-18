import {StyleSheet, Platform, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {},
});

export default styles;
