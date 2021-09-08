import React from 'react';
import PropTypes from 'prop-types';
import Counter from '../components/Counter';
import Header from '../components/Header';
import Question from '../components/Question';
import NextButton from '../components/NextButton';
import Loading from '../components/Loading';

let timeout = () => { };

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
      isLoading: true,
    };

    this.handleTimeOver = this.handleTimeOver.bind(this);
    this.verifyQuestion = this.verifyQuestion.bind(this);
    this.setCounter = this.setCounter.bind(this);
    this.handleNextQuestion = this.handleNextQuestion.bind(this);
    this.getQuestions = this.getQuestions.bind(this);
  }

  componentDidMount() {
    this.getQuestions();
  }

  async getQuestions() {
    const token = localStorage.getItem('token');
    await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`)
      .then((response) => response.json())
      .then((data) => this.setState({
        questions: data.results,
        isLoading: false,
        currentIndex: 0,
      }));
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

  verifyQuestion() {
    clearTimeout(timeout);

    // const isWrong = currentQuestion.incorrect_answers
    //   .find((answer) => answer === target.value);

    const wrongColor = '3px solid rgb(255, 0, 0)';
    const rightColor = '3px solid rgb(6, 240, 15)';

    this.setState({
      wrongBorder: wrongColor,
      rightBorder: rightColor,
      isTimeOver: true,
      time: 0,
    });
  }

  handleNextQuestion() {
    const { currentIndex, questions } = this.state;
    const nextIndex = currentIndex + 1;
    const { history } = this.props;

    if (nextIndex < questions.length) {
      clearTimeout(timeout);
      this.setState((prevState) => ({
        currentIndex: prevState.currentIndex + 1,
        wrongBorder: '',
        rightBorder: '',
        isTimeOver: false,
        time: 30,
      }));
    } else {
      this.setState({
        currentIndex: 0,
      });

      history.push('/feedback');
    }
  }

  render() {
    const {
      questions,
      currentIndex,
      isTimeOver,
      wrongBorder,
      rightBorder,
      time,
      isLoading,
    } = this.state;
    const currentQuestion = questions[currentIndex];
    console.log(currentQuestion);

    return (
      isLoading
        ? (<Loading />)
        : (
          <>
            <Header />
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
            <NextButton
              handleNextQuestion={ this.handleNextQuestion }
              time={ time }
            />
          </>
        )
    );
  }
}

Trivia.propTypes = {
  history: PropTypes.shape().isRequired,
};

export default Trivia;
