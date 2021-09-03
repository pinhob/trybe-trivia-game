export const SAVE_PLAYER = 'SAVE_PLAYER';

export const savePlayer = (payload) => ({
  type: SAVE_PLAYER,
  payload,
});

export const getQuestions = () => async () => {
  const token = localStorage.getItem('token');
  await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
    .then((response) => response.json())
    .then((data) => this.setState({ questions: data.results }));
};
