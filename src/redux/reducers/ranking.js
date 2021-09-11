import { ADD_PLAYER_TO_RANKING, LOCALSTORAGE_TO_RANKING } from '../actions';

const storage = JSON.parse(localStorage.getItem('state'));
const INITIAL_STATE = storage ? [...storage.ranking] : [];

function verifyPlayerExists(state, payload) {
  // const playerExists = state.find((player) => player.name === payload.name);

  // if (playerExists) {
  //   const updateState = state.map((player) => {
  //     if (player.name === payload.name) {
  //       return {
  //         ...player,
  //         score: payload.score,
  //         assertions: payload.assertions,
  //       };
  //     }
  //     return player;
  //   });

  //   return updateState;
  // }

  const newState = [...state, payload];
  return newState;
}

const ranking = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case ADD_PLAYER_TO_RANKING:
    return [...verifyPlayerExists(state, action.payload)];

  case LOCALSTORAGE_TO_RANKING:
    return [...action.payload];
  default:
    return state;
  }
};

export default ranking;
