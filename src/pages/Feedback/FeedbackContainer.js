import styled from 'styled-components';

export default styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4rem 0;
width: 90vw;
margin: auto;

header {
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-bottom: 0.5rem;
  }
  
  div {
    color: #fff;
    font-size: 0.85rem;
    text-align: center;
 
    &:last-child {
      margin-top: 0.25rem;
      font-size: 0.75rem;
    }
  }
}

main {
  margin-bottom: 2rem;
  
  div {
    color: #fff;

    &:first-child {
      font-size: 2rem;
      font-weight: 700;
      margin: 1rem 0;
    }
  }

  .feedback-score-box {
    font-size: 1.25rem;
    text-align: center;

    p {
      margin-top: 1rem;
    }
    
    span {
      font-weight: 700;
    }
  }
}

footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    text-decoration: none;
    background-color: #E0B821;
    color: #fff;
    font-size: 1.15rem;
    font-weight: 700;
    text-align: center;
    width: 47%;
    padding: 0.5rem 0;
    border-radius: 3px;

    &:last-child {
      background-color: #3C6FEE;
    }
  }
}

.bottom-img {
  position: absolute;
  bottom: 0;
  height: 10rem;
}
  
`;
