import { ADD_PLAYER_TO_RANKING, LOCALSTORAGE_TO_RANKING } from '../actions';

const storage = JSON.parse(localStorage.getItem('state'));
const INITIAL_STATE = storage ? [...storage.ranking] : [];

function verifyPlayerExists(state, incomingPlayer) {
  const playerExists = state.find((player) => player.name === incomingPlayer.name);

  if (playerExists) {
    const updateState = state.map((statePlayer) => {
      if (statePlayer.name === incomingPlayer.name) {
        return {
          ...statePlayer,
          score: incomingPlayer.score,
          assertions: incomingPlayer.assertions,
        };
      }
      return statePlayer;
    });

    return updateState;
  }

  const newState = [...state, incomingPlayer];
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
