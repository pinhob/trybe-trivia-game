import React from 'react';
import PropTypes from 'prop-types';

function NextButton({ handleNextQuestion, time }) {
  return (
    <button
      type="button"
      onClick={ handleNextQuestion }
      data-testid="btn-next"
      value={ time }
      style={ { opacity: time === 0 ? 1 : 0 } }
    >
      Próxima
    </button>
  );
}

NextButton.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default NextButton;
