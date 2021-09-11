import {
  SAVE_PLAYER,
  ANSWER_QUESTION,
  INCREASE_ASSERTIONS,
  RESET_SCORE_AND_ASSERTIONS,
} from '../actions';

const INITIAL_STATE = {
  name: 'Player',
  email: 'brunopinho@outlook.com',
  score: 0,
  assertions: 0,
};

const difficultyMap = {
  easy: 1,
  medium: 2,
  hard: 3,
};

function calcScore(time, difficulty, score) {
  const magicNumber = 10;
  const newScore = score + (magicNumber + time * difficultyMap[difficulty]);
  console.log({ newScore });
  return newScore;
}

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_PLAYER:
    return { ...state, ...action.payload };

  case ANSWER_QUESTION:
    return {
      ...state,
      score: calcScore(
        action.payload.time,
        action.payload.difficulty,
        state.score,
      ),
    };

  case INCREASE_ASSERTIONS:
    return {
      ...state,
      assertions: state.assertions + 1,
    };

  case RESET_SCORE_AND_ASSERTIONS:
    return {
      ...state,
      assertions: 0,
      score: 0,
    };

  default:
    return state;
  }
};

export default player;
