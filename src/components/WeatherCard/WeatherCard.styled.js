import styled from 'styled-components';

export const BtnMoreDetails = styled.button`
  padding: 8px 10px;
  margin-top: 4px;
  border-radius: 8px;
  border: 1px solid rgb(41, 46, 34);
  position: relative;
  overflow: hidden;
  background: transparent;
  font-style: italic;
  font-weight: 700;
  cursor: pointer;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    box-shadow: 1px 1px 25px 10px rgba(70, 70, 104, 0.4);
  }

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(54, 54, 80, 0.4),
      transparent
    );
    transition: all 650ms;
  }

  :hover:before {
    left: 100%;
  }
`;

export const CityName = styled.h2`
  font-style: italic;
`;
