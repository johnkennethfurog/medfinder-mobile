import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 15,
    elevation: 1,
    backgroundColor: Colors.blue,
  },
  icon: {
    width: 20,
    height: 20,
  },
  placeholder: {
    color: Colors.lightgray,
    fontSize: 14,
    marginLeft: 10,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 5,
  },
});

export default styles;
