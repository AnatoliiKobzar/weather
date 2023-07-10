import styled from 'styled-components';

export const ListItem = styled.li`
  border-radius: 8px;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    box-shadow: 5px 5px 16px 0px rgba(75, 70, 70, 0.55);
  }
`;

export const Button = styled.button`
  position: absolute;
  top: 0;
  padding: 8px 16px;
  margin-left: 8px;
  border-radius: 4px;
  border: none;
  height: 38px;
  font-weight: 500;
  color: white;
  background-color: rgb(93, 138, 221);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  :hover {
    background-color: rgba(63, 120, 226, 1);
  }
`;

export const PhotoWrap = styled.div`
  margin-top: 16px;
  width: 100%;
  height: 180px;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
`;

export const CapitalPhoto = styled.img`
  object-fit: cover;
  width: 100%;
  height: 180px;
`;
