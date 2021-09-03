import React from 'react';

class Trivia extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentIndex: 0,
    };
  }

  componentDidMount() {
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
    console.log(currentQuestion);
    return (
      <div>
        <span data-testid="question-category">
          { currentQuestion && currentQuestion.category }
        </span>

        <span data-testid="question-text">
          { currentQuestion && currentQuestion.question }
        </span>

        <ul>
          { currentQuestion && currentQuestion.incorrect_answers.map((answer) => (
            <li data-testid="wrong-answer" key={ answer }>{ answer }</li>)) }
          <li data-testid="correct-answer">
            { currentQuestion && currentQuestion.correct_answer }
          </li>
        </ul>
      </div>
    );
  }
}

export default Trivia;
