import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 15,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    color: Colors.white,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.white,
    fontSize: 13,
  },
});

export default styles;
