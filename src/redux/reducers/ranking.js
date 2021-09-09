import React, { Component } from 'react';
import md5 from 'crypto-js/md5';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Ranking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listPlayers: [],
    };
  }

  componentDidMount() {
    this.getLocalStorage();
  }

  getLocalStorage() {
    const { playerList } = JSON.parse(localStorage.getItem('state'));
    const players = [];
    const simulation = {
      name: 'Bruno',
      email: 'brunopinho@outlook.com',
      gravatar: `https://www.gravatar.com/avatar/${md5('brunopinho@outlook.com').toString()}`,
      assertions: 0,
      score: 123,
    };
    players.push(playerList, simulation);
    players.sort((a, b) => b.score - a.score);
    this.setState({ listPlayers: players });
  }

  render() {
    const { listPlayers } = this.state;
    return (

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
            >
              Recomeçar jogo
            </button>
          </Link>
        </p>
      </div>
    );
  }
}

export default connect(null, null)(Ranking);
