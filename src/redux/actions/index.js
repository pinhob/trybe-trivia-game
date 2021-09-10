export const SAVE_PLAYER = 'SAVE_PLAYER';
export const SAVE_QUESTIONS = 'SAVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const INCREASE_ASSERTIONS = 'INCREASE_ASSERTIONS';

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
