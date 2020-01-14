import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    width: 120,
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: Colors.gray,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 14,
    flex: 1,
  },
  btnAdd: {
    width: 20,
    height: 20,
  },
});

export default styles;
