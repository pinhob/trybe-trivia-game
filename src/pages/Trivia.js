import React from 'react';
import Question from '../components/Question';

class Trivia extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentIndex: 0,
    };
  }

  componentDidMount() {
    // const { handleGetQuestions } = this.props;
    // handleGetQuestions();
    this.getQuestions();
  }

  async getQuestions() {
    const token = localStorage.getItem('token');
    await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
      .then((response) => response.json())
      .then((data) => this.setState({ questions: data.results }));
  }

  render() {
    const { questions, currentIndex } = this.state;
    const currentQuestion = questions[currentIndex];

    return (
      <Question currentQuestion={ currentQuestion } />
    );
  }
}

// const mapStateToProps = ({ questions: { questionsList } }) => ({
//   questionsList,
// });
// const mapDispatchToProps = (dispatch) => ({
//   handleGetQuestions: () => dispatch(getQuestions()),
// });

export default Trivia;
