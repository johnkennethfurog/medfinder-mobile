//import axios from 'axios';
import {SEARCH_STORE, CLEAR_STORE} from '../utils/constants';
import {medfinderApiRequest} from '../client/client';
import moment from 'moment';

export const searchStore = (medicines, currentPosition) => dispatch => {
  const medicinesId = medicines.map(x => x._id);

  const location = [currentPosition.lng, currentPosition.lat];
  console.log('location', location);
  dispatch({
    type: SEARCH_STORE,
    payload: medfinderApiRequest()
      .post('/store/medicine', {medicinesId, location})
      .then(rspns => {
        const currentDay = new moment();
        const currentDayOfWeek = currentDay.format('ddd').toLowerCase();
        const stores = rspns.data.data;

        const mappedStores = stores.map(store => {
          const sched = store.Schedule[currentDayOfWeek];

          if (sched) {
            const from = moment(sched.From, 'HH:mm');
            const to = moment(sched.To, 'HH:mm');
            const isBetween = currentDay.isBetween(from, to);

            store.StoreHours = `${from.format('hh:mm A')} - ${to.format(
              'hh:mm A',
            )}`;
            store.IsOpen = isBetween;
          }

          store.distance = Math.round(store.distance * 100) / 100;
          store.Medicines = store.Medicines.map(med => {
            if (med.MinSrp === med.MaxSrp) {
              med.Price = `PHP ${med.MinSrp.toFixed(2)}`;
            } else {
              med.Price = `PHP ${med.MinSrp.toFixed(
                2,
              )} - PHP ${med.MaxSrp.toFixed(2)}`;
            }

            return med;
          });

          return store;
        });

        console.log('mappedStores', mappedStores);

        return rspns;
      }),
  });
};

export const clearStore = () => dispatch => {
  dispatch({
    type: CLEAR_STORE,
  });
};
