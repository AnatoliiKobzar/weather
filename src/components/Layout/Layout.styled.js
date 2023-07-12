import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const Header = styled.header`
  border-bottom: solid 1px #949494;
  padding: 8px 0;

  background: #65b5d4;
`;

export const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  flex-direction: row;

  > p {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
  }
`;

export const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  padding: 8px;
  width: 100%;
  color: #999;
  background-color: #3f3f3f;
  text-align: center;
  border-top: solid 1px #949494;
`;
