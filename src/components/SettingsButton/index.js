import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Settings = styled(Link)`
  text-decoration: none;
  font-size: 36px;
  color: white;
  align-self: flex-end;
  position: absolute;
  right: 20px;
  top: 20px;
`;

class SettingsButton extends React.Component {
  render() {
    return (
      <Settings
        to="/settings"
        data-testid="btn-settings"
      >
        <span role="img" title="Settings" aria-label="Settings">⚙️</span>
      </Settings>
    );
  }
}

export default SettingsButton;
