import React from 'react';
import PropTypes from 'prop-types';

const THREE = 3;

class FeedbackMessage extends React.Component {
  render() {
    const { playerInfos } = this.props;
    const { assertions } = playerInfos;

    return (
      <div className="feedback-text-box">
        {
          assertions >= THREE
            ? <p data-testid="feedback-text">Mandou bem!</p>
            : <p data-testid="feedback-text">Podia ser melhor...</p>
        }
      </div>
    );
  }
}

FeedbackMessage.propTypes = {
  playerInfos: PropTypes.shape({ assertions: PropTypes.number.isRequired }).isRequired,
};

export default FeedbackMessage;
