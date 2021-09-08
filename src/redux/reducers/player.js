import { SAVE_PLAYER, ANSWER_QUESTION } from '../actions';

const INITIAL_STATE = {
  name: '',
  email: 'brunopinho@outlook.com',
  score: 0,
};
const dificuldades = {
  easy: 1,
  medium: 2,
  hard: 3,
};
function calcScore(time, dificuldade, score) {
  const magicNumber = 10;

  return score + (magicNumber + (time * dificuldades[dificuldade]));
}
const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_PLAYER:
    return { ...state, ...action.payload };

  case ANSWER_QUESTION:

    return { ...state,
      score: calcScore(action.payload.time,
        action.payload.dificuldade,
        state.score) };
  default:
    return state;
  }
};

export default player;
