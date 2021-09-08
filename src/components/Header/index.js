import React from 'react';
import PropTypes from 'prop-types';

function Header({ name = 'Nome da pessoa', score = 0, profilePicture = '' }) {
  return (
    <header data-testid="header-profile-picture">
      <img src={ profilePicture } alt="user profile" />
      <p data-testid="header-player-name">
        Jogador:
        {name}
      </p>
      <p data-testid="header-score">
        Pontos:
        {score}
      </p>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  profilePicture: PropTypes.string.isRequired,
};

export default Header;
