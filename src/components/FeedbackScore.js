import React from 'react';
import PropTypes from 'prop-types';

class FeedbackScore extends React.Component {
  render() {
    const { player } = this.props;
    const { assertions, score } = player;

    return (
      <div className="feedback-score-box">
        <p>Pontos:</p>
        <span data-testid="feedback-total-score">
          {score}
        </span>
        <p>Perguntas certas:</p>
        <span data-testid="feedback-total-question">
          {assertions}
        </span>
      </div>
    );
  }
}

FeedbackScore.propTypes = {
  player: PropTypes.shape({
    assertions: PropTypes.number.isRequired,
    score: PropTypes.number.isRequired,
  }).isRequired,
};

export default FeedbackScore;
