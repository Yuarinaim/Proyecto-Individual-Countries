import axios from "axios";

export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const GET_ALL_COUNTRY = "GET_ALL_COUNTRY";
export const GET_COUNTRY_DETAIL = "GET_COUNTRY_DETAIL";
// CONTINENTE Y TIPO DE ACTIVIDAD
export const FILTER_CONTINENT = "FILTER_CONTINENT";
export const FILTER_ACT = "FILTER_ACT";
// ASC Y DESC ALFABETICO, CANT POBLACION
export const ORDER_ALPH = "ORDER_ALPH";
export const ORDER_POBLATION = "ORDER_POBLATION";

export const createActivity = (id) => {
  return {
    type: CREATE_ACTIVITY,
    payload: id,
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

// prettier-ignore
export const getNameCountry = (name) => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/countries?name=${name}`);
    return dispatch({
      type: SEARCH_COUNTRY,
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

export const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

////////////////////////////////////////////////////////
export const filterAct = (act) => {
  return {
    type: FILTER_ACT,
    payload: act,
  };
};

export const orderAZ = (state) => {
  return {
    type: ORDER_ALPH,
    payload: state,
  };
};

export const orderPobla = (method) => {
  return {
    type: ORDER_POBLATION,
    payload: method,
  };
};
