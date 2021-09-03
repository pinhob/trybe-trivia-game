import { SAVE_QUESTIONS } from '../actions';

const INITIAL_STATE = {
  questionsList: [],
};

const questions = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_QUESTIONS:
    return { questionsList: [...action.payload] };

  default:
    return state;
  }
};

export default questions;
