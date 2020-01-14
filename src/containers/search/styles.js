import {StyleSheet, Platform, Dimensions} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.silver,
  },
  recentSearchText: {
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: 16,
    paddingVertical: 10,
    color: Colors.gray,
  },
});

export default styles;
