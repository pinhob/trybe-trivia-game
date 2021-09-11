import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderContainer from './HeaderContainer';

function Header({ name = 'Nome da pessoa', score = 0, email = '', currentIndex }) {
  return (
    <HeaderContainer data-testid="header-profile-picture">
      <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="user profile" />
      <section>
        <p data-testid="header-player-name">
          {`Jogador: ${name}`}
        </p>
        <p data-testid="header-score">
          {`Pontos: ${score}`}
        </p>
      </section>
      <section>
        <div>Pergunta</div>
        <div>
          { currentIndex + 1}
          /5
        </div>
      </section>
    </HeaderContainer>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  currentIndex: PropTypes.number.isRequired,
};

const mapStateToProps = ({ player: { name, email, score } }) => ({
  name,
  email,
  score,
});

export default connect(mapStateToProps)(Header);
