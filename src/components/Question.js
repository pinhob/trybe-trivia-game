import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  emptyQuestions() {
    return (
      <>
        <span data-testid="question-category">Carregando</span>
        <span data-testid="question-text">Carregando</span>
        <div>
          <button type="button" data-testid="wrong-answer">Carregando</button>
          <button data-testid="correct-answer" type="button">Carregando</button>
        </div>
      </>
    );
  }

  filledQuestion() {
    const {
      currentQuestion,
      isTimeOver,
      wrongBorder,
      rightBorder,
      verifyQuestion,
    } = this.props;

    return (
      <>
        <div data-testid="question-category">
          { currentQuestion.category }
        </div>
        <span
          data-testid="question-text"
          dangerouslySetInnerHTML={ { __html: currentQuestion.question } }
        />

        <div>
          {currentQuestion.incorrect_answers.map((answer, index) => (
            <button
              type="button"
              data-testid={ `wrong-answer-${index}` }
              key={ answer }
              disabled={ isTimeOver }
              value={ answer }
              onClick={ (event) => verifyQuestion(event, currentQuestion) }
              style={ { border: wrongBorder } }
            >
              { answer }
            </button>
          )) }

          <button
            data-testid="correct-answer"
            type="button"
            disabled={ isTimeOver }
            value={ currentQuestion.correct_answer }
            style={ { border: rightBorder } }
            onClick={ (event) => verifyQuestion(event, currentQuestion) }
          >
            { currentQuestion && currentQuestion.correct_answer }
          </button>
        </div>
      </>
    );
  }

  render() {
    const { currentQuestion } = this.props;
    return (
      <div>
        {
          currentQuestion ? (
            this.filledQuestion()
          ) : (
            this.emptyQuestions()
          )
        }

      </div>
    );
  }
}

Question.defaultProps = {
  currentQuestion: {
    category: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [''],
  },
};

Question.propTypes = {
  currentQuestion: PropTypes.shape(),
  isTimeOver: PropTypes.bool.isRequired,
  wrongBorder: PropTypes.string.isRequired,
  rightBorder: PropTypes.string.isRequired,
  verifyQuestion: PropTypes.func.isRequired,
};

export default Question;
