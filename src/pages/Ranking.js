import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from '../components/Loading';
import { localStorageToRanking, resetScoreAndAssertions } from '../redux/actions';

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listPlayers: [],
    };

    this.getLocalStorage = this.getLocalStorage.bind(this);
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const { ranking } = JSON.parse(localStorage.getItem('state'));
    const ordered = ranking.sort((a, b) => b.score - a.score);
    this.setState({ listPlayers: ordered });

    const { handleLocalStorageToRanking } = this.props;
    handleLocalStorageToRanking(ordered);
    // const { ranking } = this.props;
    // return ordered;
  }

  render() {
    const { listPlayers } = this.state;
    const { handleResetScoreAndAssertions } = this.props;
    return (

      !listPlayers
        ? <Loading />
        : (
          <div data-testid="ranking-title">
            {listPlayers.map((player, index) => (
              <div key={ player }>
                <img src={ player.gravatar } alt={ `Foto de pessoa ${player.name}` } />
                <span data-testid={ `player-name-${index}` }>
                  {player.name}
                </span>
                <span data-testid={ `player-score-${index}` }>
                  {player.score}
                </span>
                <span>
                  Acertos:
                  {player.assertions}
                </span>
              </div>))}
            <p>
              <Link to="/">
                <button
                  type="button"
                  data-testid="btn-go-home"
                  onClick={ handleResetScoreAndAssertions }
                >
                  Recomeçar jogo
                </button>
              </Link>
            </p>
          </div>
        )
    );
  }
}

Ranking.propTypes = {
  handleResetScoreAndAssertions: PropTypes.func.isRequired,
  handleLocalStorageToRanking: PropTypes.func.isRequired,
  // ranking: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = ({ ranking }) => ({ ranking });

const mapDispatchToProps = (dispatch) => ({
  handleResetScoreAndAssertions: () => dispatch(resetScoreAndAssertions()),
  handleLocalStorageToRanking: (payload) => dispatch(localStorageToRanking(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
