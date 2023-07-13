import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-bottom: 16px;
  margin-top: 16px;
`;

export const Input = styled.input`
  padding: 8px 32px 8px 8px;
  margin-right: 8px;
  border-radius: 4px;
  font: inherit;
`;

export const Button = styled.button`
  padding: 8px 16px;
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

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid #999999;
  width: 300px;
  min-height: 310px;
  padding: 8px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  background-image: linear-gradient(
    130deg,
    #68b9ac 0,
    #63b9b2 6.25%,
    #5fb9b9 12.5%,
    #5db9bf 18.75%,
    #5cb8c6 25%,
    #5db8cb 31.25%,
    #60b7d0 37.5%,
    #65b5d4 43.75%,
    #6cb4d8 50%,
    #74b2db 56.25%,
    #7cb1dd 62.5%,
    #86afde 68.75%,
    #8facde 75%,
    #99aadd 81.25%,
    #a2a8db 87.5%,
    #aba6d9 93.75%,
    #b4a3d5 100%
  );
`;
