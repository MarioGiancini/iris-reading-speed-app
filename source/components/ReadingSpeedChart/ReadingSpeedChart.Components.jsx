import styled from 'styled-components';
import { Classes } from '@blueprintjs/core';

const Container = styled.div.attrs({
  className: Classes.ELEVATION_3,
})`
  position: relative;
  width: 900px;
  height: 400px;
  margin-top: 50px;
  padding: 70px 20px 40px;
  border-radius: 3px;
  background-color: white;

  .recharts-text {
    font-weight: 600;
    font-family: Nunito;
  }

  @media screen and (max-width: 1024px) {
    width: calc(100vw - 100px);
  }
`;

const Label = styled.div.attrs(({ top, left, bottom, width, color, fontSize }) => ({
  style: { top, left, bottom, width, color, fontSize },
}))`
  position: absolute;
  top: auto;
  color: #5c7080;
  font-size: 18px;
  font-family: Nunito;
  font-weight: bold;
  text-align: center;
  transform: translateX(-50%);
`;

const SpeedPointer = styled.div.attrs((props) => ({
  style: {
    left: `calc(${props.position}px + 26px)`,
  },
}))`
  position: absolute;
  top: 90px;
  left: 23px;
  width: 4px;
  height: calc(100% - 165px);
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 2px;
  transition: left 1s 0.5s;
  z-index: 1;
`;

const SpeedPointerValue = styled.div`
  padding: 7px 15px;
  margin-left: 10px;
  display: block;
  position: absolute;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background-color: rgba(0,0,0, 0.6);
  border-radius: 25px;
  white-space: nowrap;

  ${props => props.position === 'left' && `
    transform: translateX(calc(-100% - 20px));
  `}
`;

export {
  Label,
  Container,
  SpeedPointer,
  SpeedPointerValue,
};
