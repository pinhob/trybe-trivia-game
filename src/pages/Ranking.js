import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Loading from '../components/Loading';
import { localStorageToRanking, resetScoreAndAssertions } from '../redux/actions';

const TopPlayers = styled.main`
width: 90vw;
margin: 3rem auto;
display: flex;
flex-flow: row wrap;
justify-content: center;
position: relative;

.player-0, .player-1, .player-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 1rem;
  text-align: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  
  > span {
    font-size: 1.5rem;
    font-weight: 700;
  }
  
}

.player-0 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.player-1, .player-2 {
  font-size: 0.65rem;
  
  img {
    width: 4.5rem;
    height: 4.5rem;
  }
  
  > span {
    font-size: 0.85rem;
  }
}

.player-1 {
  position: absolute;
  left: 15%;
  transform: translateX(-50%);
  margin-top: 6rem;
}

.player-2 {
  position: absolute;
  left: 85%;
  transform: translateX(-50%);
  margin-top: 6rem;
}

.first, .second, .third {
  background-color: #3C6FEE;
  width: 33.33%;
  height: 7rem;
  margin-top: 13rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  color: #fff;
  /* position: absolute; */
  /* bottom: 0; */
}

.second {
  margin-top: 15rem;
  height: 5rem;
}

.third {
  margin-top: 16rem;
  height: 4rem;
}
`;

const PlayAgain = styled(Link)`
text-decoration: none;
background-color: #E0B821;
color: #fff;
font-size: 1.15rem;
font-weight: 700;
text-align: center;
padding: 0.5rem;
border-radius: 3px;

position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

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
    const { ranking, handleLocalStorageToRanking } = this.props;
    const ordered = ranking.sort((a, b) => b.score - a.score);
    this.setState({ listPlayers: ordered });
    handleLocalStorageToRanking(ordered);
  }

  render() {
    const { listPlayers } = this.state;
    const { handleResetScoreAndAssertions } = this.props;

    const NUMBER_OF_PLAYERS = 3;
    const topThreePlayers = listPlayers.slice(0, NUMBER_OF_PLAYERS);
    return (

      !listPlayers
        ? <Loading />
        : (
          <>
            <TopPlayers data-testid="ranking-title">
              {topThreePlayers.map((player, index) => (
                <div
                  key={ player.name }
                  className={ `player-${index}` }
                >
                  <img src={ player.gravatar } alt={ `Foto de pessoa ${player.name}` } />
                  <span data-testid={ `player-name-${index}` }>
                    {player.name}
                  </span>
                  <div>
                    Pontuação:
                    <span data-testid={ `player-score-${index}` }>
                      {' '}
                      {player.score}
                    </span>
                  </div>
                  <div>
                    Acertos:
                    {player.assertions}
                  </div>
                </div>)) }
              <div className="second">2º</div>
              <div className="first">1º</div>
              <div className="third">3º</div>
            </TopPlayers>
            <PlayAgain
              to="/"
              data-testid="btn-go-home"
              onClick={ handleResetScoreAndAssertions }
            >
              Recomeçar jogo
            </PlayAgain>
          </>
        )
    );
  }
}

Ranking.propTypes = {
  handleResetScoreAndAssertions: PropTypes.func.isRequired,
  handleLocalStorageToRanking: PropTypes.func.isRequired,
  ranking: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

const mapStateToProps = ({ ranking }) => ({ ranking });

const mapDispatchToProps = (dispatch) => ({
  handleResetScoreAndAssertions: () => dispatch(resetScoreAndAssertions()),
  handleLocalStorageToRanking: (payload) => dispatch(localStorageToRanking(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
