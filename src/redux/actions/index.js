export const SAVE_PLAYER = 'SAVE_PLAYER';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INCREASE_ASSERTIONS = 'INCREASE_ASSERTIONS';
export const RESET_SCORE_AND_ASSERTIONS = 'RESET_SCORE_AND_ASSERTIONS';
export const ADD_PLAYER_TO_RANKING = 'ADD_PLAYER_TO_RANKING';
export const LOCALSTORAGE_TO_RANKING = 'LOCALSTORAGE_TO_RANKING';

export const savePlayer = (payload) => ({
  type: SAVE_PLAYER,
  payload,
});

export const saveQuestions = (payload) => ({
  type: SAVE_QUESTIONS,
  payload,
});

export const getQuestions = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((data) => {
      dispatch(saveQuestions(data.results));
    });
};

export const increaseAssertions = () => ({
  type: INCREASE_ASSERTIONS,
});

export const answerQuestion = (payload) => ({
  type: 'ANSWER_QUESTION',
  payload,
});

export const resetScoreAndAssertions = () => ({
  type: RESET_SCORE_AND_ASSERTIONS,
});

export const addPlayerToRanking = (payload) => ({
  type: ADD_PLAYER_TO_RANKING,
  payload,
});

export const localStorageToRanking = (payload) => ({
  type: LOCALSTORAGE_TO_RANKING,
  payload,
});
