import Slider from 'react-slick';
import styled from 'styled-components';

export const WrapFut = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 16px;
  color: #fff;
`;

export const Desc = styled.p`
  font-size: 20px;
`;

export const SliderWrap = styled(Slider)`
  padding-top: 16px;
  padding-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #999999;
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
