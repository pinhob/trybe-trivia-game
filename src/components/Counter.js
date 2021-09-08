import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Counter({ time, setCounter }) {
  useEffect(() => {
    setCounter();
  }, [time, setCounter]);

  return (
    <div>{time}</div>
  );
}

Counter.propTypes = {
  setCounter: PropTypes.func.isRequired,
  time: PropTypes.number.isRequired,
};

export default Counter;
