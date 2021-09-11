import React from 'react';
import styled from 'styled-components';

const LoadingStyled = styled.div`
width: 100vw;
height: 100vh;
color: #fff;
font-size: 1.5rem;
font-weight: 700;
display: flex;
justify-content: center;
/* padding: 10rem 0; */
align-items: center;
`;

function Loading() {
  return (
    <LoadingStyled>Carregando...</LoadingStyled>
  );
}

export default Loading;
