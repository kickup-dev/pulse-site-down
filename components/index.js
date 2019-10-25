import styled, { keyframes } from 'styled-components';

const Main = styled.div`
  margin-top: 40vh;
  font-family: 'Nunito Sans', sans-serif;
  font-weight: 300;
  width: 100vw;
  height: 40vh;
  line-height: 1.4;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  .content {
    margin: 0 100px 200px 0;
    width: 400px;
  }
  .illustration_container {
    z-index: 99;
  }
  h1 { font-weight: 800; font-size: 36px; margin-bottom: 16px; }
`;

const Ground = styled.div`
width: 100vw;
height: 20vh;
background: linear-gradient(#eee, white);
transform: translateY(-30px);
z-index: -1;
`;

const move = keyframes`
  from {
    left: 105%;
  }
  to {
    left: -5%;
  }
`

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90px;
  z-index: 0;
  svg {
    position: absolute;
    top: 0;
    // left: 0%;
    animation: ${move} 60s linear infinite;
    &:nth-child(2) {
      left: -20%;
      animation: move 80s linear infinite 1s;
      transform: scale(2);
      z-index: -1;
      opacity: .5;
    }
  }
`



export {
  Background,
  Ground,
  Main
}