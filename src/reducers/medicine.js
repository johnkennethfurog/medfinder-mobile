import {
  SEARCH_MEDICINE,
  GET_MEDICINE_CART,
  GET_RECENT_SEARCH,
  MEDICINE_ADDED,
  CLEAR_SEARCH_RESULT,
} from '../utils/constants';
import medicineData from '../dummy/medicine.json';

const initialState = {
  isLoading: false,
  data: [],
  recentSearch: [],
  searchResult: [],
};

export default function medicine(state = initialState, action) {
  switch (action.type) {
    case `${SEARCH_MEDICINE}_REJECTED`: {
      return {
        ...state,
        searchResult: [],
        isLoading: false,
      };
    }

    case `${SEARCH_MEDICINE}_PENDING`: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case `${SEARCH_MEDICINE}_FULFILLED`: {
      const searchResult = action.payload;

      return {
        ...state,
        searchResult,
        isLoading: false,
      };
    }

    case `${GET_MEDICINE_CART}`: {
      const data = action.payload;
      return {
        ...state,
        data,
        isLoading: false,
      };
    }

    case `${MEDICINE_ADDED}`: {
      const medicine = action.payload;
      const medIndex = state.searchResult.findIndex(
        x => x._id === medicine._id,
      );
      state.searchResult[medIndex].isAdded = true;
      const clonedSearchResult = JSON.parse(JSON.stringify(state.searchResult));
      return {
        ...state,
        searchResult: clonedSearchResult,
        isLoading: false,
      };
    }

    case `${GET_RECENT_SEARCH}`: {
      return {
        ...state,
        recentSearch: medicineData,
        isLoading: false,
      };
    }

    case CLEAR_SEARCH_RESULT: {
      state.searchResult = [];
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}
