import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NextButtonStyled = styled.button`
padding: 0.5rem 1rem;
background-color: #E0B821;
color: #fff;
font-size: 1.25rem;
border-radius: 3px;
z-index: 10;
`;

function NextButton({ handleNextQuestion, time }) {
  return (
    <NextButtonStyled
      type="button"
      onClick={ handleNextQuestion }
      data-testid="btn-next"
      value={ time }
      style={ { display: time === 0 ? 'block' : 'none' } }
    >
      Próxima
    </NextButtonStyled>
  );
}

NextButton.propTypes = {
  handleNextQuestion: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default NextButton;
