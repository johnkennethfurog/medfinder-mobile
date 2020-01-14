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
    width: 60,
    height: 60,
    borderColor: Colors.border,
    borderWidth: 1,
    alignSelf: 'flex-start',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    color: Colors.blue,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 14,
  },
  rightArrow: {
    width: 15,
    height: 15,
    marginLeft: 5,
  },
  horizontalLine: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: 10,
  },
});

export default styles;
