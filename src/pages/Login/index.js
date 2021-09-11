import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { savePlayer } from '../../redux/actions';
import showMilhao from '../../showMilhao.png';
import SettingsButton from '../../components/SettingsButton';
// import LoginContainer from './LoginContainer';

const LoginContainer = styled.div`
position: relative;
height: 100vh;
`;

const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;

margin: 0 auto;

img {
  width: 20rem;
  align-self: center;
}
`;

const FormsGroup = styled.form`
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
`;

const Input = styled.input`
font-size: 1rem;
height: 45px;
margin-top: 5%; 
padding-left: 2%;
width: 90%;
max-width: 345px;
border-radius: 3px;
outline-color: transparent;

  &::-webkit-input-placeholder {
    color: rgba(36, 36, 36, 0.64);
    font-size: 1.15rem;
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
width: 90%;
max-width: 345px;
transition: 0.2s;
border-radius: 3px;

&:disabled {
  background: #80AA8F;
}
`;

const Footer = styled.footer`
position: absolute;
bottom: 0;
background: #32AE60;
color: #FFF;
text-align: center;
font-weight: bold;
padding: 1rem 0.5rem;
/* margin-top: 1rem; */
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
      <LoginContainer>
        <SettingsButton />
        <Main>
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
              maxLength={ 15 }
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
        </Main>
        <Footer>
          Jogo criado por Anajulia Brito, Bruno Pinho, Jessica Queiroz
          e Leandro Liduvino para a Trybe
        </Footer>
      </LoginContainer>
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
