import styled from 'styled-components';

export default styled.header`
display: flex;
justify-content: center;
align-items: center;
width: 90vw;
margin: 2rem auto;

img {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1rem;
}

section {
  display: flex;
  flex-direction: column;
  color: #fff;
  text-align: left;

  &:last-child {
  font-size: 1.15rem;
  margin-left: auto;
  text-align: center;
}
  
  p {
    &:last-child {
      font-size: 0.75rem;
    }
  }
}
`;
