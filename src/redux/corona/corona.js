import axios from 'axios';

const FETCH_DATA = 'FETCH_DATA';
const url = 'https://corona.lmao.ninja/v2/countries?today=&sort=';
const initialState = [];

export const getCorona = () => async (dispatch) => {
  axios.get(url).then((response) => {
    const { data } = response;
    dispatch({ type: FETCH_DATA, payload: data });
  });
};

const coronaReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    default:
      return state;
  }
};

export default coronaReducer;
