import React from 'react';
import Counter from '../components/Counter';
import Question from '../components/Question';

let timeout = () => {};

class Trivia extends React.Component {
  constructor() {
    super();
    this.state = {
      questions: [],
      currentIndex: 0,
      isTimeOver: false,
      wrongBorder: '',
      rightBorder: '',
      time: 30,
    };

    this.handleTimeOver = this.handleTimeOver.bind(this);
    this.verifyQuestion = this.verifyQuestion.bind(this);
    this.setCounter = this.setCounter.bind(this);
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

  setCounter() {
    const ONE_SECOND = 1000;
    const { time } = this.state;

    if (time > 0) {
      timeout = setTimeout(() => {
        this.setState((prevState) => ({ time: prevState.time - 1 }));
      }, ONE_SECOND);
    } else {
      this.handleTimeOver();
    }
  }

  handleTimeOver() {
    const wrongColor = '3px solid rgb(255, 0, 0)';
    const rightColor = '3px solid rgb(6, 240, 15)';

    this.setState({
      isTimeOver: true,
      wrongBorder: wrongColor,
      rightBorder: rightColor,
    });
  }

  verifyQuestion({ target }, currentQuestion) {
    clearTimeout(timeout);

    const isWrong = currentQuestion.incorrect_answers
      .find((answer) => answer === target.value);

    const wrongColor = '3px solid rgb(255, 0, 0)';
    const rightColor = '3px solid rgb(6, 240, 15)';

    if (isWrong) {
      return this.setState({
        wrongBorder: wrongColor,
        rightBorder: wrongColor,
        isTimeOver: true,
        time: 0,
      });
    }

    this.setState({
      wrongBorder: wrongColor,
      rightBorder: rightColor,
      isTimeOver: true,
      time: 0,
    });
  }

  render() {
    const {
      questions,
      currentIndex,
      isTimeOver,
      wrongBorder,
      rightBorder,
      time,
    } = this.state;
    const currentQuestion = questions[currentIndex];
    console.log(currentQuestion);

    return (
      <>
        <Question
          currentQuestion={ currentQuestion }
          isTimeOver={ isTimeOver }
          wrongBorder={ wrongBorder }
          rightBorder={ rightBorder }
          verifyQuestion={ this.verifyQuestion }
        />
        <Counter
          time={ time }
          handleTimeOver={ this.handleTimeOver }
          setCounter={ this.setCounter }
        />
      </>
    );
  }
}

export default Trivia;
