import { ADD_PLAYER_TO_RANKING, LOCALSTORAGE_TO_RANKING } from '../actions';

const INITIAL_STATE = [];

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PLAYER_TO_RANKING:
    return [...state, action.payload];

  case LOCALSTORAGE_TO_RANKING:
    return [...action.payload];
  default:
    return state;
  }
};

export default ranking;
