import {SEARCH_STORE, CLEAR_STORE} from '../utils/constants';
import storeData from '../dummy/stores.json';

const initialState = {
  isLoading: false,
  data: [],
};

export default function store(state = initialState, action) {
  switch (action.type) {
    case `${SEARCH_STORE}_REJECTED`: {
      return {
        data: [],
        isLoading: false,
      };
    }

    case `${SEARCH_STORE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${SEARCH_STORE}_FULFILLED`: {
      const data = action.payload.data.data;
      return {
        data,
        isLoading: false,
      };
    }

    default:
      return state;
  }
}
