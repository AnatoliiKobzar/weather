import styled from 'styled-components';

export const Overlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(29, 28, 28, 0.8);
  z-index: 1200;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 5%;
  width: 300px;

  @media screen and (min-width: 768px) {
    width: 668px;
  }

  @media screen and (min-width: 1200px) {
    top: 20%;
    width: 940px;
  }
`;
