import {
  CREATE_ACTIVITY,
  SEARCH_COUNTRY,
  GET_ALL_COUNTRY,
  GET_COUNTRY_DETAIL,
  FILTER_CONTINENT,
  FILTER_ACT,
  ORDER_ALPH,
  ORDER_POBLATION,
  GET_NAME_ACTIVITIES,
} from "./actions";

// ESTADO
const initialState = {
  backUp: [],
  allCountry: [],
  countryDetail: [],
  sortCountry: [],
  activitiesNames: [],
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

    case GET_NAME_ACTIVITIES:
      return {
        ...state,
        activitiesNames: action.payload,
      };

    case SEARCH_COUNTRY:
      return {
        ...state,
        backUp: action.payload,
        allCountry: action.payload,
      };

    case GET_COUNTRY_DETAIL:
      console.log(action.payload);
      return {
        ...state,
        countryDetail: action.payload,
      };

    case CREATE_ACTIVITY:
      return {
        ...state,
        backUp: [...state.backUp, action.payload],
      };
    // ! =======================================================
    case FILTER_CONTINENT:
      return {
        ...state,
        allCountry: state.allCountry.filter(
          (e) => e.continent === action.payload
        ),
      };

    case FILTER_ACT:
      return {
        ...state,
        allCountry: state.allCountry.filter((e) =>
          e.activities.includes(action.payload)
        ),
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
            return a.poblation - b.poblation;
          } else {
            return b.poblation - a.poblation;
          }
        }),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
