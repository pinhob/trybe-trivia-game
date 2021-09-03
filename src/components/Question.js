import React from 'react';
import PropTypes from 'prop-types';

class Question extends React.Component {
  render() {
    const { currentQuestion } = this.props;
    return (
      <div>
        <span data-testid="question-category">
          { currentQuestion && currentQuestion.category }
        </span>

        <span data-testid="question-text">
          { currentQuestion && currentQuestion.question }
        </span>

        <ul>
          { currentQuestion
            ? currentQuestion.incorrect_answers.map((answer, index) => (
              <li data-testid={ `wrong-answer-${index}` } key={ answer }>{ answer }</li>))
            : <li data-testid="wrong-answer" /> }
          <li data-testid="correct-answer">
            { currentQuestion && currentQuestion.correct_answer }
          </li>
        </ul>
      </div>
    );
  }
}

Question.propTypes = {
  currentQuestion: PropTypes.shape().isRequired,
};

export default Question;
