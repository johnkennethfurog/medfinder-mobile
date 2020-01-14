import {StyleSheet, Platform, Dimensions} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.silver,
  },
  addressContainer: {
    marginVertical: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
  },
  addressInfoContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  icon: {
    width: 20,
    height: 20,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: Colors.blue,
    fontSize: 14,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 14,
  },
});

export default styles;
