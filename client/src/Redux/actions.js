import axios from "axios";

export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const FILTER = "FILTER";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";

export const createActivity = (id) => {
  return {
    type: CREATE_ACTIVITY,
    payload: id,
  };
};

export const filterCards = (continent) => {
  return {
    type: FILTER,
    payload: continent,
  };
};

export const searchCountry = (name) => {
  return {
    type: SEARCH_COUNTRY,
    payload: name,
  };
};

export const getAllCountry = () => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/countries`);
    return dispatch({
      type: GET_ALL_COUNTRY,
      payload: response.data,
    });
  };
};

export const getCountryDetail = (id) => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: GET_COUNTRY_DETAIL,
      payload: response.data,
    });
  };
};
