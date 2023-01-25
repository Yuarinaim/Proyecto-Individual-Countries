import {
  CREATE_ACTIVITY,
  SEARCH_COUNTRY,
  GET_ALL_COUNTRY,
  GET_COUNTRY_DETAIL,
  FILTER_CONTINENT,
  FILTER_ACT,
  ORDER_ALPH,
  ORDER_POBLATION,
} from "./actions";

// ESTADO
const initialState = {
  backUp: [],
  allCountry: [],
  countryDetail: [],
  sortCountry: [],
};
//

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRY:
      return {
        ...state,
        backUp: action.payload,
        allCountry: action.payload,
      };

    case SEARCH_COUNTRY:
      console.log("payload", action.payload);
      return {
        ...state,
        backUp: action.payload,
        allCountry: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      return {
        ...state,
        countryDetail: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        backUp: [...state.backUp, action.payload],
      };
    ///////////////////////////////////
    case FILTER_CONTINENT:
      return {
        ...state,
        allCountry: state.backUp.filter((e) => e.continent === action.payload),
      };

    case FILTER_ACT:
      return {
        ...state,
        allCountry: state.backUp.filter((e) => e.activities === action.payload),
      };

    case ORDER_ALPH:
      return {
        ...state,
        allCountry: [...state.allCountry].sort((a, b) => {
          if (action.payload === "ascendente") {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
          } else {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
          }
        }),
      };

    case ORDER_POBLATION:
      return {
        ...state,
        allCountry: [...state.allCountry].sort((a, b) => {
          if (action.payload === "ascendente") {
            if (a.poblation < b.poblation) return -1;
            if (a.poblation > b.poblation) return 1;
            return 0;
          } else {
            if (a.poblation < b.poblation) return 1;
            if (a.poblation > b.poblation) return -1;
            return 0;
          }
        }),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
