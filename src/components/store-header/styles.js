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
    elevation: 1,
    alignItems: 'center',
  },
  backIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  icon: {
    width: 60,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 14,
  },
  btnCart: {
    width: 25,
    height: 25,
  },
});

export default styles;
