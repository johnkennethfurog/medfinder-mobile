//import axios from 'axios';
import {SEARCH_STORE, CLEAR_STORE} from '../utils/constants';
import {medfinderApiRequest} from '../client/client';
import moment from 'moment';

export const searchStore = (medicines, currentPosition) => dispatch => {
  const medicinesId = medicines.map(x => x._id);

  const location = [currentPosition.lng, currentPosition.lat];

  const payload = {location, medicinesId};

  dispatch({
    type: SEARCH_STORE,
    payload: medfinderApiRequest()
      .post('store/find', payload)
      .then(rspns => {
        const currentDay = new moment();
        const currentDayOfWeek = currentDay.format('ddd').toLowerCase();

        const stores = rspns.data.data;

        const mappedStores = stores.map(store => {
          const sched = store.Schedule[currentDayOfWeek];

          if (sched) {
            if (sched.From && sched.To) {
              const from = moment(sched.From, 'HH:mm');
              const to = moment(sched.To, 'HH:mm');
              const isBetween = currentDay.isBetween(from, to);

              store.StoreHours = `${from.format('hh:mm A')} - ${to.format(
                'hh:mm A',
              )}`;
              store.IsOpen = isBetween;
            } else {
              store.StoreHours = 'not available';
              store.IsOpen = false;
            }
          }

          store.distance = Math.round(store.distance * 100) / 100;
          store.Medicines = store.Medicines.map(med => {
            const {Margin, Srp} = med;

            if (Margin === 0) {
              med.Price = `PHP ${Srp.toFixed(2)}`;
            } else {
              const marginPrice = Srp * Margin;
              const minSrp = Srp - marginPrice;
              const maxSrp = Srp + marginPrice;

              med.Price = `PHP ${minSrp.toFixed(2)} - PHP ${maxSrp.toFixed(2)}`;
            }
            return med;
          });

          return store;
        });

        rspns.data.data = mappedStores;
        return rspns;
      })
      .catch(err => {
        console.log('error', err);
      }),
  });
};
