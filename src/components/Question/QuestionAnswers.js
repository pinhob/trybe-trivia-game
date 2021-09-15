import styled from 'styled-components';

export default styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 90vw;
z-index: 10;

button {
  background-color: #3C6FEE;
  color: #fff;
  width: 80%;
  font-size: 1.15rem;
  font-weight: 700;
  border: none;
  border-radius: 3px;
  margin-bottom: 1rem;
  
  display: flex;
  justify-content: center;
  align-items: stretch;
  position: relative;
  
  .number {
    /* position: absolute; */
    /* top: 0; */
    /* left: 5%; */
    /* height: 100%; */
    /* margin: 0; */
    margin-left: 1rem;
    justify-self: flex-start;
    width: 3rem;
    background-color: #16181C;
    transform: skewY(25deg) rotateZ(-25deg);
    display: flex;
    justify-content: center;
    align-items: center;
    
    h4 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #3C6FEE ;
      transform: skewY(-25deg) rotateZ(30deg);
      
    }
  }

  .border {
    /* position: absolute; */
    /* margin: 0; */
    /* top: 0; */
    /* left: 15%; */
    /* height: 100%; */
    margin-left: 0.15rem;
    margin-right: auto;
    width: 1rem;
    background-color: #6BC0F5;
    transform: skewY(25deg) rotateZ(-25deg);
  }
  
  .answer {
    align-self: center;
    justify-self: center;
    padding: 0.5rem 1rem;
    margin-right: auto;
  }
}

`;
