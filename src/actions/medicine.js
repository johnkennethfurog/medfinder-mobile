//import axios from 'axios';
import SInfo from 'react-native-sensitive-info';

import {
  SEARCH_MEDICINE,
  GET_MEDICINE_CART,
  GET_RECENT_SEARCH,
  MEDICINE_CART,
  MEDICINE_ADDED,
  CLEAR_SEARCH_RESULT,
} from '../utils/constants';

import {medfinderApiRequest} from '../client/client';
import medicineData from '../dummy/medicine.json';

export const searchMedicine = keyword => dispatch => {
  SInfo.getItem(MEDICINE_CART, {}).then(storedMedicines => {
    dispatch({
      type: SEARCH_MEDICINE,
      payload: medfinderApiRequest()
        .get('medicines/search/' + keyword)
        .then(rspns => {
          let medicines = [];

          if (storedMedicines) {
            medicines = JSON.parse(storedMedicines);
          }

          let searchResult = rspns.data.data;

          if (medicines && medicines.length > 0 && searchResult) {
            const addedMedicineIds = medicines.map(x => x._id);

            searchResult = searchResult.map(medicine => {
              if (addedMedicineIds.includes(medicine._id)) {
                medicine.isAdded = true;
              } else {
                medicine.isAdded = false;
              }
              return medicine;
            });
          }
          return searchResult;
        }),
    });
  });
};

export const getMedicineCart = () => dispatch => {
  SInfo.getItem(MEDICINE_CART, {}).then(storedMedicines => {
    let medicines = [];
    if (storedMedicines) {
      medicines = JSON.parse(storedMedicines);
    }
    dispatch({
      type: GET_MEDICINE_CART,
      payload: medicines,
    });
  });
};

export const getRecentSearch = () => dispatch => {
  dispatch({
    type: GET_RECENT_SEARCH,
  });
};

export const removeFromCart = medicineId => dispatch => {
  SInfo.getItem(MEDICINE_CART, {}).then(value => {
    let medicines = JSON.parse(value);
    medicines = medicines.filter(x => x._id !== medicineId);

    SInfo.setItem(MEDICINE_CART, JSON.stringify(medicines), {}).then(() => {
      dispatch({
        type: GET_MEDICINE_CART,
        payload: medicines,
      });
    });
  });
};

export const addToCart = medicine => dispatch => {
  SInfo.getItem(MEDICINE_CART, {}).then(storedMedicines => {
    let medicines = [];
    if (storedMedicines) {
      medicines = JSON.parse(storedMedicines);
    }

    medicines.push(medicine);

    SInfo.setItem(MEDICINE_CART, JSON.stringify(medicines), {}).then(() => {
      dispatch(getMedicineCart());
      dispatch({
        type: MEDICINE_ADDED,
        payload: medicine,
      });
    });
  });
};

export const clearSearchResult = () => dispatch => {
  dispatch({
    type: CLEAR_SEARCH_RESULT,
  });
};
