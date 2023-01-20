import {
  SEARCH_COUNTRY,
  GET_ALL_COUNTRY,
  GET_COUNTRY_DETAIL,
  CREATE_ACTIVITY,
  FILTER,
} from "./actions";

// ESTADO
const initialState = {
  country: [],
  filtCountry: [],
  countryDetail: [],
};
//

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_COUNTRY:
      return {
        ...state,
        filtCountry: [
          ...state.country.filter((e) => e.name.includes(action.payload)),
        ],
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case GET_ALL_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        country: [...state.country, action.payload],
      };

    case FILTER:
      return {
        ...state,
        country: state.country.filter((e) => e.continent !== action.payload),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
