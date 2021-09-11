import React from 'react';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import FeedbackMessage from '../../components/FeedbackMessage';
import FeedbackScore from '../../components/FeedbackScore';
import { addPlayerToRanking, resetScoreAndAssertions } from '../../redux/actions';
import FeedbackContainer from './FeedbackContainer';
import logo from '../../assets/showMilhao.png';

class Feedback extends React.Component {
  constructor() {
    super();
    this.updateRanking = this.updateRanking.bind(this);
  }

  componentDidMount() {
    this.updateRanking();
  }

  updateRanking() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const { handleAddPlayerToRanking } = this.props;
    const newPlayer = {
      ...player,
      gravatar: `https://www.gravatar.com/avatar/${md5(player.email).toString()}`,
    };

    handleAddPlayerToRanking(newPlayer);
  }

  render() {
    const { player } = JSON.parse(localStorage.getItem('state'));
    const { name, email, score, handleResetScoreAndAssertions } = this.props;
    return (
      <FeedbackContainer>
        <header>
          <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt="" data-testid="header-profile-picture" />
          <div data-testid="header-player-name">
            {`Jogador: ${name}`}
          </div>
          <div data-testid="header-score">
            {`Pontos: ${score}`}
          </div>
        </header>
        <main>
          <FeedbackMessage playerInfos={ player } />
          <FeedbackScore player={ player } />
        </main>
        <footer>
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
            // onClick={ () => this.updateRanking(player) }
          >
            Ver ranking
          </Link>
        </footer>
        <img className="bottom-img" src={ logo } alt="Show do Milhão" />
      </FeedbackContainer>
    );
  }
}

Feedback.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  handleResetScoreAndAssertions: PropTypes.func.isRequired,
  handleAddPlayerToRanking: PropTypes.func.isRequired,
};

const mapStateToProps = ({ player: { email, name, score } }) => ({
  name,
  email,
  score,
});

const mapDispatchToProps = (dispatch) => ({
  handleResetScoreAndAssertions: () => dispatch(resetScoreAndAssertions()),
  handleAddPlayerToRanking: (payload) => dispatch(addPlayerToRanking(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);
