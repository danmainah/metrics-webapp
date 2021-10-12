import axios from 'axios';

const FETCH_WORLD = 'FETCH_WORLD';
const url = 'https://corona.lmao.ninja/v2/all';
const initialState = [];

export const getWorld = () => async (dispatch) => {
  axios.get(url).then((response) => {
    const { data } = response;
    dispatch({ type: FETCH_WORLD, payload: data });
  });
};

const worldReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_WORLD:
      return payload;
    default:
      return state;
  }
};

export default worldReducer;
