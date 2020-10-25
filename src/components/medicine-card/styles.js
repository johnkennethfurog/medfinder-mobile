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
    fontSize: 15,
    fontWeight: 'bold',
  },
  subTitle: {
    color: Colors.gray,
    fontSize: 13,
  },
  price: {
    fontSize: 13,
    alignSelf: 'flex-start',
  },
  btnClose: {
    width: 25,
    height: 25,
  },
  needPrescription: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 12,
    color: '#546e7a',
    marginTop: 10,
  },
});

export default styles;
