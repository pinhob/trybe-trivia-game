import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CounterStyled = styled.div`
color: #fff;
background-color: #32AE60;
display: flex;
align-items: center;
justify-content: center;
width: 2.5rem;
height: 2.5em;
font-size: 1rem;
padding: 0.5rem;
border-radius: 50%;
margin-bottom: 1rem;
z-index: 10;

`;

function Counter({ time, setCounter }) {
  useEffect(() => {
    setCounter();
  }, [time, setCounter]);

  return (
    <CounterStyled>{time}</CounterStyled>
  );
}

Counter.propTypes = {
  setCounter: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default Counter;
