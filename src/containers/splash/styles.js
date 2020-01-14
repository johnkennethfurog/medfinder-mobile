import {StyleSheet, Platform, Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#084f65',
    justifyContent: 'flex-end',
  },
  img: {
    height: windowHeight - 3,
    width: Dimensions.get('window').width,
  },
});

export default styles;
