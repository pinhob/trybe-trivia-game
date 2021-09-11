import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #FFF;
`;

class Settings extends React.Component {
  render() {
    return (
      <main>
        <Title data-testid="settings-title">Configurações</Title>
        <iframe src="https://giphy.com/embed/3nYiLDDRFqMAE" width="480" height="360" frameBorder="0" className="giphy-embed" allowFullScreen title="Silvio" />
      </main>
    );
  }
}

export default Settings;
