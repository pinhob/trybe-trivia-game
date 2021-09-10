import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FeedbackMessage from '../components/FeedbackMessage';
import FeedbackScore from '../components/FeedbackScore';
import { resetScoreAndAssertions } from '../redux/actions';

class Feedback extends React.Component {
  render() {
    const playerState = JSON.parse(localStorage.getItem('state'));
    const { player } = playerState;
    const { name, email, score, handleResetScoreAndAssertions } = this.props;
    return (
      <div>
        <header>
          <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="" data-testid="header-profile-picture" />
          <span data-testid="header-player-name">{ name }</span>
          <span data-testid="header-score">{ score }</span>
        </header>
        <main>
          <FeedbackMessage playerInfos={ player } />
          <FeedbackScore player={ player } />
        </main>
        <Link
          to="/"
          data-testid="btn-play-again"
          className="btn-play-again"
          onClick={ handleResetScoreAndAssertions }
        >
          Jogar novamente
        </Link>
        <Link
          to="/ranking"
          data-testid="btn-ranking"
          className="btn-ranking"
        >
          Ver ranking
        </Link>
      </div>
    );
  }
}

Feedback.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleResetScoreAndAssertions: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player: { email, name, score } }) => ({
  name,
  email,
  score,
});

const mapDispatchToProps = (dispatch) => ({
  handleResetScoreAndAssertions: () => dispatch(resetScoreAndAssertions()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
