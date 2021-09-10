import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  htmlDecode(input) {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innerHTML;
  }

  render() {
    // console.log(this.htmlDecode('What is &quot;dabbing&quot;?'));
    const {
      currentQuestion,
      isTimeOver,
      wrongBorder,
      rightBorder,
      verifyQuestion,
    } = this.props;

    return (
      <div>
        <div data-testid="question-category">
          { currentQuestion.category }
        </div>
        <span
          data-testid="question-text"
        >
          {this.htmlDecode(currentQuestion.question)}
        </span>

        <div>
          {currentQuestion.shuffledQuestions.map((question, index) => (
            <button
              type="button"
              data-testid={ question.type === 'incorrect'
                ? `wrong-answer-${index}` : 'correct-answer' }
              key={ question.answer }
              disabled={ isTimeOver }
              value={ question.answer }
              onClick={ (event) => verifyQuestion(event, currentQuestion) }
              style={ {
                border: question.type === 'incorrect'
                  ? wrongBorder : rightBorder,
              } }
            >
              { this.htmlDecode(question.answer) }
            </button>
          )) }

        </div>
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
