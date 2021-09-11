import React from 'react';
import PropTypes from 'prop-types';
import QuestionTopic from './QuestionTopic';
import QuestionAnswers from './QuestionAnswers';

class Question extends React.Component {
  htmlDecode(input) {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.innerHTML;
  }
  // console.log(this.htmlDecode('What is &quot;dabbing&quot;?'));

  render() {
    const {
      currentQuestion,
      isTimeOver,
      wrongBorder,
      rightBorder,
      verifyQuestion,
    } = this.props;
    return (
      <>
        <QuestionTopic>
          <div data-testid="question-category">{ currentQuestion.category }</div>
          <span
            data-testid="question-text"
          >
            {this.htmlDecode(currentQuestion.question)}
          </span>
        </QuestionTopic>
        <QuestionAnswers>
          {currentQuestion.shuffledQuestions.map((question, index) => (
            <button
              type="button"
              data-testid={ question.type === 'incorrect'
                ? `wrong-answer-${index}` : 'correct-answer' }
              key={ question.answer }
              disabled={ isTimeOver }
              onClick={ () => verifyQuestion(question.answer, currentQuestion) }
              style={ {
                border: question.type === 'incorrect'
                  ? wrongBorder : rightBorder,
              } }
            >
              <span className="number">
                <h4>{ index + 1 }</h4>
              </span>
              <span className="border" />
              <span className="answer">
                { this.htmlDecode(question.answer) }
              </span>
            </button>
          )) }
        </QuestionAnswers>
      </>
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
