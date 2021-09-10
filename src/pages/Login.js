import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { savePlayer } from '../redux/actions';
import showMilhao from '../showMilhao.png';

const Settings = styled(Link)`
  text-decoration: none;
  font-size: 36px;
  color: white;
  align-self: flex-end;
  margin-right: 3%;
  margin-top: 3%;
`;

const Main = styled.div`
  align-items: center;  
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
`;

const FormsGroup = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  font-size: 24px;
  height: 45px;
  margin-top: 5%; 
  padding-left: 2%;
  width: 345px;
    &::-webkit-input-placeholder {
      color: rgba(36, 36, 36, 0.64);
      font-size: 24px;
    }
    &:focus { 
      outline-color: #3C6FEE;
    }
    &:valid {
      outline-color: #32AE60;
    }
`;

const Button = styled.button`
  align-self: center;
  background: #32AE60;
  border: none;
  color: #F1F1F1;
  font-size: 24px;
  font-weight: bold;
  height: 50px;
  margin: 5% 0%;
  width: 225px;
`;

const Footer = styled.footer`
align-items: center;
  background: #32AE60;
  bottom: 0;
  color: #FFF;
  display: flex;
  font-weight: bold;
  height: 7%;
  justify-content: center;
  margin: 0;
  position: absolute;
  width: 100%;
`;

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      nameValidation: false,
      emailValidation: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async getToken() {
    await fetch('https://opentdb.com/api_token.php?command=request')
      .then((response) => response.json())
      .then(({ token }) => localStorage.setItem('token', token))
      .catch((err) => console.error('Error:', err.message));
  }

  handleInput({ target }) {
    this.setState((prevState) => ({
      [target.name]: target.value,
      nameValidation: target.name === 'name' ? true : prevState.nameValidation,
      emailValidation: target.name === 'email' ? true : prevState.emailValidation,
    }));
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { handleSavePlayer, history, state } = this.props;
    const { name, email } = this.state;
    handleSavePlayer({ name, email });

    // const state = {
    //   player: {
    //     name, email, assertions: 0, score: 0,
    //   },
    // };

    localStorage.setItem('state', JSON.stringify(state));

    await this.getToken();
    history.push('/trivia');
  }

  render() {
    const { name, email, nameValidation, emailValidation } = this.state;

    return (
      <Main>
        <Settings
          to="/settings"
          data-testid="btn-settings"
        >
          <span role="img" title="Settings" aria-label="Settings">⚙️</span>
        </Settings>
        <img src={ showMilhao } alt="Logo do Show do Milhão" />
        <FormsGroup onSubmit={ this.handleSubmit }>
          <Input
            type="text"
            name="name"
            value={ name }
            id="input-name"
            placeholder="Nome"
            onChange={ this.handleInput }
            data-testid="input-player-name"
            required
          />
          <Input
            type="email"
            name="email"
            value={ email }
            placeholder="Email"
            id="input-email"
            onChange={ this.handleInput }
            data-testid="input-gravatar-email"
            required
          />
          <Button
            type="submit"
            data-testid="btn-play"
            disabled={ !nameValidation || !emailValidation }
          >
            Jogar
          </Button>
        </FormsGroup>
        <Footer>
          <p>
            Jogo criado por Anajulia Brito, Bruno Pinho, Jessica Queiroz
            e Leandro Liduvino para a Trybe
          </p>
        </Footer>
      </Main>
    );
  }
}

Login.propTypes = {
  handleSavePlayer: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
  state: PropTypes.shape({}).isRequired,
};

const mapStateToProps = (state) => ({ state });

const mapDistatchToProps = (dispatch) => ({
  handleSavePlayer: (player) => dispatch(savePlayer(player)),
});

export default connect(mapStateToProps, mapDistatchToProps)(Login);
