import {StyleSheet} from 'react-native';
import Colors from '../../utils/colors';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: Colors.white,
    borderColor: Colors.border,
    borderWidth: 1,
    alignItems: 'center',
  },
  icon: {
    width: 70,
    height: 50,
    borderColor: Colors.border,
    borderWidth: 1,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: Colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 13,
  },
  price: {
    color: Colors.gray,
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  btnClose: {
    width: 25,
    height: 25,
  },
});

export default styles;
