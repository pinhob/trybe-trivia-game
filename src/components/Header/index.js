import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Header({ name = 'Nome da pessoa', score = 0, email = '' }) {
  return (
    <header data-testid="header-profile-picture">
      <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="user profile" />
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
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({ player: { name, email, score } }) => ({
  name,
  email,
  score,
});

export default connect(mapStateToProps)(Header);
